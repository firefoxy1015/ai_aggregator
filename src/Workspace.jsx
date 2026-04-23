import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, RefreshCw, AlertCircle } from 'lucide-react';
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

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    // Prepare history for chat context
    const chatHistory = messages
      .filter(m => m.type === 'text' && m.role !== 'system')
      .map(m => ({ role: m.role, content: m.content }));
      
    chatHistory.push({ role: 'user', content: userMessage });
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage, type: 'text' }]);
    setInput('');
    setIsTyping(true);
    
    try {
      if (tool.category === 'chat') {
        // SSE Streaming Chat
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: tool.modelId,
            messages: chatHistory
          })
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
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ') && !line.includes('[DONE]')) {
              try {
                const data = JSON.parse(line.substring(6));
                if (data.text) {
                  assistantContent += data.text;
                  setMessages(prev => prev.map(m => 
                    m.id === 'streaming' ? { ...m, content: assistantContent } : m
                  ));
                }
              } catch (e) {}
            }
          }
        }
        // Remove streaming ID
        setMessages(prev => prev.map(m => 
          m.id === 'streaming' ? { role: 'assistant', content: m.content, type: 'text' } : m
        ));
        setIsTyping(false);

      } else if (tool.category === 'paint' || tool.category === 'video') {
        // Media Generation via Backend Task
        const generateRes = await fetch(`${BACKEND_URL}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'data999',
            model: tool.modelId,
            prompt: userMessage,
            params: tool.defaultParams || {}
          })
        });

        const genData = await generateRes.json();
        if (!generateRes.ok) throw new Error(genData.detail || '生成请求失败');
        
        const taskId = genData.task_id;
        
        // Add a progress message
        setMessages(prev => [...prev, { role: 'system', content: `任务已提交 (ID: ${taskId})，正在渲染中，请稍候...`, type: 'text' }]);

        // Poll for status
        let isFinal = false;
        while (!isFinal) {
          await new Promise(r => setTimeout(r, 8000)); // Poll every 8 seconds
          const statusRes = await fetch(`${BACKEND_URL}/api/status/${taskId}`);
          const statusData = await statusRes.json();
          
          if (statusData.is_final) {
            isFinal = true;
            setIsTyping(false);
            
            if (statusData.error) {
              setMessages(prev => [...prev, { role: 'system', content: `生成失败: ${statusData.error}`, type: 'text' }]);
            } else if (statusData.result_urls && statusData.result_urls.length > 0) {
              const url = statusData.result_urls[0];
              const isVideo = url.match(/\.(mp4|webm|mov|m3u8)/i) || tool.category === 'video';
              
              setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: `为您生成完成：`,
                type: 'media',
                url: url,
                mediaType: isVideo ? 'video' : 'image'
              }]);
            }
          }
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: `接口调用失败：${error.message}。请确保后端服务 (main.py) 正在 localhost:8000 运行。`,
        type: 'error'
      }]);
      setIsTyping(false);
    }
  };

  return (
    <div className="workspace-container">
      <header className="workspace-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          <span>返回控制台</span>
        </button>
        <div className="workspace-title">
          <Sparkles size={18} color="var(--accent-secondary)" />
          <h2>{tool.title}</h2>
          <span className="workspace-badge">{tool.category.toUpperCase()}</span>
        </div>
      </header>

      <main className="chat-area">
        <div className="messages-container">
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`message-wrapper ${msg.role === 'user' ? 'user' : 'system'}`}
            >
              <div className="avatar">
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className="message-bubble">
                {msg.type === 'text' && <div style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>}
                {msg.type === 'error' && (
                  <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} /> {msg.content}
                  </div>
                )}
                {msg.type === 'media' && (
                  <div className="media-response">
                    <p style={{ marginBottom: '10px' }}>{msg.content}</p>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                      {msg.mediaType === 'video' ? (
                        <video src={msg.url} controls autoPlay loop style={{ width: '100%', display: 'block' }} />
                      ) : (
                        <img src={msg.url} alt="AI Generated" style={{ width: '100%', height: 'auto', display: 'block' }} onLoad={scrollToBottom} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="message-wrapper system">
              <div className="avatar"><Bot size={20} /></div>
              <div className="message-bubble typing">
                <RefreshCw size={16} className="spin" /> 
                {tool.category === 'paint' ? '正在渲染图像...' : (tool.category === 'video' ? '正在渲染视频...' : '正在思考...')}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="chat-input-area">
        <div className="input-box">
          <input 
            type="text" 
            placeholder={`给 ${tool.title} 发送消息... (已连接到专属云端算力节点)`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
            <Send size={18} />
          </button>
        </div>
        <p className="footer-note">已接入 {BACKEND_URL} 云端后端，使用 DATA999 真实接口</p>
      </footer>
    </div>
  );
}

export default Workspace;
