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

  const [activePreset, setActivePreset] = useState(null);
  const [hoveredPreset, setHoveredPreset] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async (agent) => {
    if (!input.trim()) {
      alert("请先在输入框中写下你的初步想法或提示词~");
      return;
    }
    setActivePreset(agent.id + 100);
    setIsEnhancing(true);
    const original = input;
    setInput("");
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          system: `你现在是${agent.name.split('\n')[0]}。${agent.name.split('\n')[1]} 请将用户的简短提示词扩写成一段专业的视频生成提示词，要求画面感强、细节丰富、包含运镜和光影描述。请直接输出最终的提示词，不要带任何其他废话或解释。`,
          messages: [{ role: 'user', content: original }]
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

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
                setInput(assistantContent);
              }
            } catch (e) {}
          }
        }
      }
    } catch (err) {
      alert("智能扩写失败: " + err.message);
      setInput(original);
    } finally {
      setIsEnhancing(false);
      setActivePreset(null);
    }
  };

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
            {(tool.category === 'paint' || tool.category === 'video') && (
              <div className="style-presets-container" style={{ position: 'relative' }}>
                {hoveredPreset && (
                  <div className="preset-tooltip">
                    <div className="tooltip-title">{hoveredPreset.name.split('\n')[0]}</div>
                    <div className="tooltip-desc">{hoveredPreset.name.split('\n')[1] || '添加特定的风格预设到提示词中'}</div>
                  </div>
                )}
                <div className="style-presets-row">
                {tool.category === 'paint' ? [
                  { id: 1, name: '赛博朋克\n充满霓虹灯、高科技与低生活的未来主义风格。', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100&h=100&fit=crop', prompt: ', 赛博朋克风格, 霓虹灯效' },
                  { id: 2, name: '二次元\n高质量二次元动漫风格，绚丽光影。', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&h=100&fit=crop', prompt: ', 高质量二次元动漫风格, 绚丽光影' },
                  { id: 3, name: '真实摄影\n单反镜头捕捉的真实世界，8k画质。', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop', prompt: ', 真实摄影, 单反镜头, 8k画质, 电影级光影' },
                  { id: 4, name: '3D架构\n虚幻引擎5渲染，极高细节与立体感。', img: 'https://images.unsplash.com/photo-1506744626753-1fa28f673fac?w=100&h=100&fit=crop', prompt: ', 3D渲染, 虚幻引擎5, 辛烷渲染器, 极高细节' },
                  { id: 5, name: '魔法幻想\n史诗般的奇幻魔法风格，绚丽光效。', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&h=100&fit=crop', prompt: ', 奇幻魔法风格, 史诗感, 绚丽的魔法光效' },
                  { id: 6, name: '极简人像\n极简主义摄影，干净背景下的人像特写。', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', prompt: ', 极简主义摄影, 干净背景, 人像特写' },
                  { id: 7, name: '自然风景\n国家地理级别的自然风光摄影。', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop', prompt: ', 壮丽的自然风光, 国家地理摄影, 阳光透过树叶' },
                  { id: 8, name: '美食静物\n令人垂涎欲滴的美食摄影，柔和微距光。', img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=100&h=100&fit=crop', prompt: ', 美食摄影, 令人垂涎欲滴, 焦外虚化, 柔和微距光' },
                  { id: 9, name: '暗黑星空\n深空摄影，浩瀚神秘的宇宙星空。', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=100&h=100&fit=crop', prompt: ', 深空摄影, 浩瀚宇宙, 星空银河, 神秘氛围' },
                ].map(style => (
                  <div 
                    key={style.id} 
                    className={`style-avatar ${activePreset === style.id ? 'active' : ''}`} 
                    onMouseEnter={() => setHoveredPreset(style)}
                    onMouseLeave={() => setHoveredPreset(null)}
                    onClick={() => {
                      setActivePreset(style.id);
                      setInput(prev => prev + style.prompt);
                    }}
                  >
                    <img src={style.img} alt={style.name.split('\n')[0]} />
                  </div>
                )) : [
                  { id: 1, name: '短视频创意编导\n将你的模糊想法或图片，智能添加创意，转换成生产级视频提示词。', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop' },
                  { id: 2, name: '产品广告导演\n打造让用户一秒种草的产品广告视频，精通商业视频的视觉说服力', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=100&h=100&fit=crop' },
                  { id: 3, name: '微电影编剧导演\n将故事构想变成电影级短片分镜，精通叙事结构、情绪转折与电影化视觉语言', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100&h=100&fit=crop' },
                  { id: 4, name: '时尚大片导演\n打造秀场级别的时尚视频，精通服装展示、身体语言与视觉美学的极致融合', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop' },
                  { id: 5, name: '动态视觉艺术家\n创造超越现实的视觉奇观，精通抽象动态、流体艺术、光影变幻与超现实运动', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100&h=100&fit=crop' },
                  { id: 6, name: '美食短视频导演\n将食物变成让人流口水的视觉盛宴，专精美食订餐视频、食谱短片和餐饮广告', img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=100&h=100&fit=crop' },
                  { id: 7, name: '音乐MV导演\n打造视觉与音乐完美共振的MV画面，精通节奏可视化、超现实视觉与情绪转译', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop' },
                  { id: 8, name: '旅行Vlog编导\n打造“没有一帧废镜头”的旅行视频，精通转场、节奏、以及用镜头语言讲故事', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=100&h=100&fit=crop' },
                  { id: 9, name: '自然纪录片编导\n用大制作级镜头语言展现自然的壮美与神秘，精通野生动物、地质奇观、天文现象', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' },
                ].map(agent => (
                  <div 
                    key={agent.id} 
                    className={`style-avatar ${activePreset === agent.id + 100 ? 'active' : ''} ${isEnhancing && activePreset === agent.id + 100 ? 'enhancing' : ''}`} 
                    onMouseEnter={() => setHoveredPreset(agent)}
                    onMouseLeave={() => setHoveredPreset(null)}
                    onClick={() => handleEnhance(agent)}
                  >
                    <img src={agent.img} alt={agent.name.split('\n')[0]} />
                  </div>
                ))}
                <div className="style-avatar add-style" onMouseEnter={() => setHoveredPreset({name:'自定义\n添加属于你自己的专属风格或预设模型'})} onMouseLeave={() => setHoveredPreset(null)} onClick={() => alert('自定义风格卡槽即将开放')}>
                  <span>+</span>
                </div>
                </div>
              </div>
            )}
            
            <div className="advanced-input-container">
              {/* Left side: Edit button */}
              <div className="input-left-panel">
                <button className="edit-image-btn">
                  <ImageIcon size={18} />
                  <span>编辑图片</span>
                </button>
              </div>

              {/* Right side: Textarea + Toolbar + Image Upload */}
              <div className="input-right-panel">
                <div className="price-badge">预计 ⚡ 0.35/次</div>
                
                <div className="textarea-with-images">
                  {tool.configurableParams?.filter(p => p.type === 'image_upload').map(param => (
                    <div key={param.name} className="image-upload-wrapper inline-upload">
                      <label className="reference-upload-box inline-box">
                        {isUploading ? <RefreshCw size={24} className="spin" /> : <span className="plus-icon">+</span>}
                        <span className="upload-text">{param.label}</span>
                        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleImageUpload(e, param.name, param.max)} />
                      </label>
                      {params[param.name] && params[param.name].length > 0 && (
                        <div className="uploaded-preview-overlay inline-preview">
                          <img src={params[param.name][params[param.name].length - 1]} alt="Preview" />
                          <span className="count-badge">{params[param.name].length}/{param.max}</span>
                          <button className="remove-image" onClick={() => removeImage(param.name, params[param.name].length - 1)}><X size={12} /></button>
                        </div>
                      )}
                    </div>
                  ))}
                  <textarea 
                    className="main-textarea"
                    disabled={isEnhancing}
                    placeholder={tool.category === 'video' ? "由于该模型渠道火爆，选择智能调度分组时，大概率会调度到高价格分组，请适度使用\n最好的效果是横版传横图，竖版传竖图，尽量不要乱传" : `描述你想要生成的内容，支持上传参考图片...`} 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => {
                      if(e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }} 
                  />
                </div>
                
                <div className="input-toolbar">
                  <div className="toolbar-params">
                    {(tool.category === 'paint' || tool.category === 'video') && (
                      <>
                        <div className="toolbar-param-item">
                          <div className="param-select-wrapper">
                            <select className="param-select">
                              {tool.channels ? tool.channels.map(ch => (
                                <option key={ch.id} value={ch.id}>{ch.name}</option>
                              )) : (
                                <>
                                  <option value="price">¥ 价格优先</option>
                                  <option value="speed">⚡ 极速调度</option>
                                  <option value="quality">💎 官方直连</option>
                                </>
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="toolbar-param-item">
                          <div className="param-select-wrapper">
                            <select className="param-select">
                              <option>1条</option>
                              <option>2条</option>
                              <option>3条</option>
                              <option>4条</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {tool.configurableParams?.filter(p => p.type === 'select' || p.type === 'boolean').map(param => (
                      <div key={param.name} className="toolbar-param-item">
                        {param.type === 'boolean' ? (
                          <button 
                            className={`param-toggle-btn ${params[param.name] ? 'active' : ''}`}
                            onClick={() => handleParamChange(param.name, !params[param.name])}
                          >
                            <Sparkles size={14} />
                            {param.label}: {params[param.name] ? '开启' : '关闭'}
                          </button>
                        ) : (
                          <div className="param-select-wrapper">
                            <select 
                              className="param-select" 
                              value={params[param.name] || param.default} 
                              onChange={e => handleParamChange(param.name, e.target.value)}
                            >
                              <optgroup label={param.label}>
                                {param.options.map(opt => (
                                  <option key={opt.v} value={opt.v}>{opt.l}</option>
                                ))}
                              </optgroup>
                            </select>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {tool.category === 'paint' && (
                      <div className="toolbar-param-item">
                        <button className="param-toggle-btn active">
                          <Sparkles size={14} /> 开启
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button className="send-btn-large" onClick={handleSend} disabled={!input.trim()}>
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </main>

        {tool.category === 'chat' && tool.configurableParams?.some(p => p.type === 'textarea') && (
          <aside className="settings-panel">
            <div className="settings-header">
              <Settings2 size={18} /> 角色与系统指令
            </div>
            {tool.configurableParams.filter(p => p.type === 'textarea').map(param => (
              <div key={param.name} className="settings-group">
                <label className="settings-label">{param.label}</label>
                <textarea className="settings-input" placeholder={param.placeholder} value={params[param.name] || ''} onChange={e => handleParamChange(param.name, e.target.value)} />
              </div>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}

export default Workspace;
