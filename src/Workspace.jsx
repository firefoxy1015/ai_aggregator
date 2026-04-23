import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, RefreshCw } from 'lucide-react';
import { toolsData } from './data';
import './Workspace.css';

function Workspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = toolsData.find(t => t.id === parseInt(id));
  
  const [messages, setMessages] = useState([
    { role: 'system', content: `您好！我是 ${tool?.title || 'AI助手'}。有什么我可以帮您的吗？` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!tool) {
    return (
      <div style={{ color: 'white', padding: '2rem' }}>
        <h2>未找到该工具</h2>
        <button onClick={() => navigate(-1)}>返回</button>
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: `这是 ${tool.title} 的模拟响应。您刚才输入了：“${input}”。此功能为UI演示，实际接入需要后端支持。` 
      }]);
      setIsTyping(false);
    }, 1500);
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
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="message-wrapper system">
              <div className="avatar"><Bot size={20} /></div>
              <div className="message-bubble typing">
                <RefreshCw size={16} className="spin" /> 正在生成回复...
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="chat-input-area">
        <div className="input-box">
          <input 
            type="text" 
            placeholder={`给 ${tool.title} 发送消息...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
            <Send size={18} />
          </button>
        </div>
        <p className="footer-note">AI内容由系统随机生成，请注意甄别</p>
      </footer>
    </div>
  );
}

export default Workspace;
