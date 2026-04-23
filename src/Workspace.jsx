import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, RefreshCw, AlertCircle, Settings2, Image as ImageIcon, X, Upload } from 'lucide-react';
import { toolsData } from './data';
import './Workspace.css';

const BACKEND_URL = 'https://ai-studio-swo7.onrender.com';

function Workspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = toolsData.find(t => t.id === parseInt(id));
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([
    { role: 'system', content: `连接已建立！我是 ${tool?.title} (${tool?.modelId})。您可以向我发送指令了。`, type: 'text' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Params state based on configurableParams and defaultParams
  const [params, setParams] = useState(() => {
    const init = { ...tool?.defaultParams };
    tool?.configurableParams?.forEach(p => {
      if (init[p.name] === undefined && p.default !== undefined) init[p.name] = p.default;
      if (p.type === 'image_upload' && !init[p.name]) init[p.name] = [];
    });
    return init;
  });

  const [isUploading, setIsUploading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  if (!tool) {
    return (
      <div style={{ color: 'white', padding: '2rem' }}>
        <h2>未找到该工具</h2>
        <button onClick={() => navigate(-1)}>返回</button>
      </div>
    );
  }

  const handleParamChange = (name, value) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e, name, max) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
      const data = await res.json();
      if (res.ok && data.url) {
        setParams(prev => {
          const current = prev[name] || [];
          if (current.length >= max) current.shift(); // keep under max
          return { ...prev, [name]: [...current, data.url] };
        });
      }
    } catch (err) {
      alert("上传失败: " + err.message);
    }
    setIsUploading(false);
  };

  const removeImage = (name, index) => {
    setParams(prev => {
      const current = [...(prev[name] || [])];
      current.splice(index, 1);
      return { ...prev, [name]: current };
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    const chatHistory = messages
      .filter(m => m.type === 'text' && m.role !== 'system')
      .map(m => ({ role: m.role, content: m.content }));
      
    chatHistory.push({ role: 'user', content: userMessage });
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage, type: 'text' }]);
    setInput('');
    setIsTyping(true);
    
    try {
      if (tool.category === 'chat') {
        const body = {
          model: tool.modelId,
          messages: chatHistory,
          system: params.system || undefined,
          web_search: params.web_search,
          enable_thinking: params.enable_thinking
        };
        
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantContent = '';
        setMessages(prev => [...prev, { role: 'assistant', content: '', type: 'text', id: 'streaming' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          for (const line of chunk.split('\n')) {
            if (line.startsWith('data: ') && !line.includes('[DONE]')) {
              try {
                const data = JSON.parse(line.substring(6));
                if (data.text) {
                  assistantContent += data.text;
                  setMessages(prev => prev.map(m => m.id === 'streaming' ? { ...m, content: assistantContent } : m));
                }
              } catch (e) {}
            }
          }
        }
        setMessages(prev => prev.map(m => m.id === 'streaming' ? { role: 'assistant', content: m.content, type: 'text' } : m));
        setIsTyping(false);

      } else {
        const finalParams = { ...params };
        
        // Handle custom image_start and image_end mapping
        if (finalParams.image_start || finalParams.image_end) {
          const startUrl = finalParams.image_start?.[0] || "";
          const endUrl = finalParams.image_end?.[0] || "";
          if (startUrl || endUrl) {
            finalParams.images = [startUrl, endUrl];
          }
          delete finalParams.image_start;
          delete finalParams.image_end;
        }
        
        const reqBody = {
          source: 'data999',
          model: tool.modelId,
          prompt: userMessage,
          params: finalParams
        };
        
        const generateRes = await fetch(`${BACKEND_URL}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reqBody)
        });

        const genData = await generateRes.json();
        if (!generateRes.ok) throw new Error(genData.detail || '生成请求失败');
        
        const taskId = genData.task_id;
        setMessages(prev => [...prev, { role: 'system', content: `任务已提交 (ID: ${taskId})，渲染中...`, type: 'text' }]);

        let isFinal = false;
        while (!isFinal) {
          await new Promise(r => setTimeout(r, 8000));
          const statusRes = await fetch(`${BACKEND_URL}/api/status/${taskId}`);
          const statusData = await statusRes.json();
          if (statusData.is_final) {
            isFinal = true;
            setIsTyping(false);
            if (statusData.error) {
              setMessages(prev => [...prev, { role: 'system', content: `生成失败: ${statusData.error}`, type: 'error' }]);
            } else if (statusData.result_urls?.length > 0) {
              const url = statusData.result_urls[0];
              const isVideo = url.match(/\.(mp4|webm|mov|m3u8)/i) || tool.category === 'video';
              const isAudio = url.match(/\.(mp3|wav|ogg|aac)/i) || tool.category === 'audio';
              let mType = 'image';
              if (isVideo) mType = 'video';
              if (isAudio) mType = 'audio';
              
              setMessages(prev => [...prev, { role: 'assistant', content: `生成完成：`, type: 'media', url, mediaType: mType }]);
            }
          }
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: `调用失败：${error.message}`, type: 'error' }]);
      setIsTyping(false);
    }
  };

  return (
    <div className="workspace-container">
      <header className="workspace-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />返回
        </button>
        <div className="workspace-title">
          <Sparkles size={18} color="var(--accent-secondary)" />
          <h2>{tool.title}</h2>
          <span className="workspace-badge">{tool.category.toUpperCase()}</span>
        </div>
      </header>

      <div className="workspace-body">
        <main className="chat-section">
          <div className="chat-area">
            <div className="messages-container">
              {messages.map((msg, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`message-wrapper ${msg.role === 'user' ? 'user' : 'system'}`}>
                  <div className="avatar">
                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className="message-bubble">
                    {msg.type === 'text' && <div style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>}
                    {msg.type === 'error' && <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}><AlertCircle size={16} /> {msg.content}</div>}
                    {msg.type === 'media' && (
                      <div className="media-response">
                        <p style={{ marginBottom: '10px' }}>{msg.content}</p>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                          {msg.mediaType === 'video' ? <video src={msg.url} controls autoPlay loop style={{ width: '100%', display: 'block' }} /> 
                           : msg.mediaType === 'audio' ? <audio src={msg.url} controls autoPlay style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
                           : <img src={msg.url} alt="AI Generated" style={{ width: '100%', height: 'auto', display: 'block' }} onLoad={scrollToBottom} />}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="message-wrapper system">
                  <div className="avatar"><Bot size={20} /></div>
                  <div className="message-bubble typing"><RefreshCw size={16} className="spin" /> 正在处理...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <footer className="chat-input-area">
            <div className="input-box">
              <input type="text" placeholder={`输入您的指令...`} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
              <button className="send-btn" onClick={handleSend} disabled={!input.trim()}><Send size={18} /></button>
            </div>
            <p className="footer-note">已连接 {BACKEND_URL}</p>
          </footer>
        </main>

        {tool.configurableParams && tool.configurableParams.length > 0 && (
          <aside className="settings-panel">
            <div className="settings-header">
              <Settings2 size={18} /> 模型配置参数
            </div>
            {tool.configurableParams.map(param => (
              <div key={param.name} className="settings-group">
                {param.type !== 'boolean' && <label className="settings-label">{param.label}</label>}
                
                {param.type === 'boolean' && (
                  <label className="settings-toggle">
                    <input type="checkbox" checked={params[param.name] || false} onChange={e => handleParamChange(param.name, e.target.checked)} />
                    {param.label}
                  </label>
                )}
                
                {param.type === 'select' && (
                  <select className="settings-select" value={params[param.name] || param.default} onChange={e => handleParamChange(param.name, e.target.value)}>
                    {param.options.map(opt => (
                      <option key={opt.v} value={opt.v}>{opt.l}</option>
                    ))}
                  </select>
                )}
                
                {param.type === 'textarea' && (
                  <textarea className="settings-input" placeholder={param.placeholder} value={params[param.name] || ''} onChange={e => handleParamChange(param.name, e.target.value)} />
                )}
                
                {param.type === 'image_upload' && (
                  <div>
                    <label className="image-upload-box">
                      {isUploading ? <RefreshCw size={24} className="spin" /> : <Upload size={24} />}
                      <span>上传{param.label} {params[param.name]?.length || 0}/{param.max}</span>
                      <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleImageUpload(e, param.name, param.max)} />
                    </label>
                    {params[param.name] && params[param.name].map((url, i) => (
                      <div key={i} className="uploaded-image-preview">
                        <img src={url} alt={`Upload ${i}`} />
                        <button className="remove-image" onClick={() => removeImage(param.name, i)}><X size={12} /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}

export default Workspace;
