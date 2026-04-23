import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { toolsData } from './data';
import './Workspace.css';

function Workspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = toolsData.find(t => t.id === parseInt(id));
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([
    { role: 'system', content: `您好！我是 ${tool?.title || 'AI助手'}。我已经被全面激活，现在您可以向我发送真实的指令，我将为您实时生成内容！` }
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
    setMessages(prev => [...prev, { role: 'user', content: userMessage, type: 'text' }]);
    setInput('');
    setIsTyping(true);
    
    try {
      if (tool.category === 'paint' || tool.category === 'video') {
        // AI Painting - using free pollinations image API
        const safePrompt = encodeURIComponent(userMessage);
        const seed = Math.floor(Math.random() * 100000);
        const imageUrl = `https://image.pollinations.ai/prompt/${safePrompt}?width=1024&height=1024&seed=${seed}&nologo=true`;
        
        // Wait a little bit to simulate generation
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'system', 
            content: `已经为您生成了关于“${userMessage}”的图像：`,
            type: 'image',
            url: imageUrl
          }]);
          setIsTyping(false);
        }, 2000);

      } else {
        // AI Chat / Agent - using free pollinations text API
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(userMessage)}`);
        if (!response.ok) throw new Error('网络请求失败');
        
        const data = await response.text();
        setMessages(prev => [...prev, { 
          role: 'system', 
          content: data,
          type: 'text'
        }]);
        setIsTyping(false);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: `抱歉，接口调用失败：${error.message}。请稍后再试。`,
        type: 'text'
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
              className={`message-wrapper ${msg.role}`}
            >
              <div className="avatar">
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className="message-bubble">
                {msg.type === 'text' && <div style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>}
                {msg.type === 'image' && (
                  <div className="image-response">
                    <p style={{ marginBottom: '10px' }}>{msg.content}</p>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                      <img 
                        src={msg.url} 
                        alt="AI Generated" 
                        style={{ width: '100%', height: 'auto', display: 'block' }} 
                        onLoad={() => scrollToBottom()}
                      />
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
                {tool.category === 'paint' ? '正在渲染图像...' : '正在思考...'}
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
            placeholder={`给 ${tool.title} 发送消息... (尝试输入真实的指令)`}
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
        <p className="footer-note">AI内容由接口实时生成，现在已经完全可用</p>
      </footer>
    </div>
  );
}

export default Workspace;
