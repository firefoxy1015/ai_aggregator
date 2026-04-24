import os

workspace_jsx_path = r'd:\gravity\ai_aggregator\src\Workspace.jsx'
workspace_css_path = r'd:\gravity\ai_aggregator\src\Workspace.css'

with open(workspace_jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()

start_marker = "const handleEnhance = async (agent) => {"
# Find the start of handleEnhance
start_idx = jsx_content.find(start_marker)

# Find the end of handleEnhance (the first "  };\n" after start_idx)
end_marker = "\n  };\n"
end_idx = jsx_content.find(end_marker, start_idx) + len(end_marker)

new_handleEnhance = """  const [directorModal, setDirectorModal] = useState({ open: false, agent: null, status: 'idle', result: null });

  const handleEnhance = async (agent) => {
    if (!input.trim()) {
      alert("请先在输入框中写下你的初步想法或提示词~");
      return;
    }
    const original = input;
    setDirectorModal({ open: true, agent, status: 'dispatch', result: null });
    
    // Simulate progress steps
    setTimeout(() => setDirectorModal(prev => prev.status === 'dispatch' ? { ...prev, status: 'think' } : prev), 1000);
    setTimeout(() => setDirectorModal(prev => prev.status === 'think' ? { ...prev, status: 'build' } : prev), 3000);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'data999',
          model: 'gpt-4o-mini',
          system: `你现在是${agent.name.split('\\n')[0]}。${agent.name.split('\\n')[1]} 
请根据用户的输入，生成一段专业的视频提示词。
请严格按照以下格式输出（必须包含这三个标签，不要带Markdown代码块的修饰，直接输出文本）：

[EXPLANATION]
你的创意灵感说明（分析用户的需求并说明你增加的细节）

[ZH_PROMPT]
扩写后的中文提示词（包含画面、光影、运镜、风格，逗号分隔，不要超过100字）

[EN_PROMPT]
对应的英文提示词（专业影视术语，逗号分隔）`,
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
        for (const line of chunk.split('\\n')) {
          if (line.startsWith('data: ') && !line.includes('[DONE]')) {
            try {
              const data = JSON.parse(line.substring(6));
              if (data.text) {
                assistantContent += data.text;
              }
            } catch (e) {}
          }
        }
      }

      if (assistantContent.includes('暂不支持') || assistantContent.includes('请联系管理员')) {
        throw new Error(assistantContent);
      }

      // Parse the response
      const expMatch = assistantContent.match(/\\[EXPLANATION\\]([\\s\\S]*?)(?=\\[ZH_PROMPT\\]|\\[EN_PROMPT\\]|$)/i);
      const zhMatch = assistantContent.match(/\\[ZH_PROMPT\\]([\\s\\S]*?)(?=\\[EN_PROMPT\\]|$)/i);
      const enMatch = assistantContent.match(/\\[EN_PROMPT\\]([\\s\\S]*?)$/i);

      setDirectorModal(prev => ({
        ...prev,
        status: 'complete',
        result: {
          explanation: expMatch ? expMatch[1].trim() : '已为你生成创意提示词。',
          zhPrompt: zhMatch ? zhMatch[1].trim() : assistantContent.trim(),
          enPrompt: enMatch ? enMatch[1].trim() : '请查看上方生成的提示词'
        }
      }));

    } catch (err) {
      alert("AI 引擎调用失败: " + err.message);
      setDirectorModal({ open: false, agent: null, status: 'idle', result: null });
    }
  };

  const applyDirectorPrompt = (promptText) => {
    setInput(promptText);
    setDirectorModal({ open: false, agent: null, status: 'idle', result: null });
  };
"""

jsx_content = jsx_content[:start_idx] + new_handleEnhance + jsx_content[end_idx:]

# Insert the modal JSX just before </main>
modal_jsx = """
          {directorModal.open && (
            <div className="director-modal-overlay">
              <div className="director-modal">
                <div className="director-modal-header">
                  <div className="director-modal-title">
                    <img src={directorModal.agent?.img} alt="avatar" className="director-avatar" />
                    <span>{directorModal.agent?.name.split('\\n')[0]}</span>
                  </div>
                  <button className="director-close-btn" onClick={() => setDirectorModal({ open: false, agent: null, status: 'idle', result: null })}><X size={18} /></button>
                </div>
                
                <div className="director-modal-body">
                  {directorModal.status === 'complete' ? (
                    <div className="director-success-header">
                      <CheckCircle2 size={18} color="#10b981" />
                      <span className="success-text">生成完成</span>
                    </div>
                  ) : (
                    <div className="director-loading-header">
                      <div className="pulse-dot"></div>
                      <span className="loading-text">
                        {directorModal.status === 'dispatch' && '正在连接AI创作引擎...'}
                        {directorModal.status === 'think' && '正在深度解析画面需求...'}
                        {directorModal.status === 'build' && '正在构建分镜与光影细节...'}
                      </span>
                    </div>
                  )}

                  <div className="director-progress-bar">
                    <div className="progress-line-bg"></div>
                    <div className="progress-line-fill" style={{ 
                      width: directorModal.status === 'dispatch' ? '10%' : 
                             directorModal.status === 'think' ? '40%' : 
                             directorModal.status === 'build' ? '70%' : '100%' 
                    }}></div>
                    <div className={`progress-step ${['dispatch', 'think', 'build', 'complete'].includes(directorModal.status) ? 'active' : ''}`}>调度</div>
                    <div className={`progress-step ${['think', 'build', 'complete'].includes(directorModal.status) ? 'active' : ''}`}>思考</div>
                    <div className={`progress-step ${['build', 'complete'].includes(directorModal.status) ? 'active' : ''}`}>构建</div>
                    <div className={`progress-step ${directorModal.status === 'complete' ? 'active' : ''}`}>完成</div>
                  </div>

                  {directorModal.status === 'complete' && directorModal.result && (
                    <div className="director-result-cards">
                      <div className="result-card">
                        <div className="card-title"><Lightbulb size={14} color="#f59e0b" /> 创意说明</div>
                        <div className="card-content">{directorModal.result.explanation}</div>
                      </div>
                      <div className="result-card">
                        <div className="card-title">🇨🇳 中文提示词</div>
                        <div className="card-content">{directorModal.result.zhPrompt}</div>
                      </div>
                      <div className="result-card">
                        <div className="card-title">🌐 英文提示词</div>
                        <div className="card-content">{directorModal.result.enPrompt}</div>
                      </div>
                    </div>
                  )}
                </div>

                {directorModal.status === 'complete' && (
                  <div className="director-modal-footer">
                    <button className="director-btn btn-ghost" onClick={() => handleEnhance(directorModal.agent)}>
                      <RefreshCw size={14} /> 重新生成
                    </button>
                    <div className="footer-actions">
                      <button className="director-btn btn-secondary" onClick={() => applyDirectorPrompt(directorModal.result.zhPrompt)}>
                        使用中文提示词
                      </button>
                      <button className="director-btn btn-primary" onClick={() => applyDirectorPrompt(directorModal.result.enPrompt)}>
                        使用英文提示词
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
"""

if "CheckCircle2" not in jsx_content:
    jsx_content = jsx_content.replace('RefreshCw, X', 'RefreshCw, X, CheckCircle2, Lightbulb')

if "directorModal.open" not in jsx_content:
    jsx_content = jsx_content.replace('</main>', modal_jsx + '\n        </main>')

with open(workspace_jsx_path, 'w', encoding='utf-8') as f:
    f.write(jsx_content)

css_addition = """
/* Director Modal Styles */
.director-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

.director-modal {
  background: #1a1a20;
  width: 90%;
  max-width: 800px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalSlideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.director-modal-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.director-modal-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
}

.director-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.director-close-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.director-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.director-modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.director-loading-header, .director-success-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  animation: pulseDot 1.5s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}

.loading-text {
  color: #3b82f6;
  font-weight: 500;
  font-size: 1rem;
}

.success-text {
  color: #10b981;
  font-weight: 500;
  font-size: 1rem;
}

.director-progress-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
}

.progress-line-bg {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.progress-line-fill {
  position: absolute;
  top: 10px;
  left: 0;
  height: 2px;
  background: #3b82f6;
  z-index: 2;
  transition: width 0.5s ease;
}

.progress-step {
  position: relative;
  z-index: 3;
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.progress-step::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2a2a35;
  border: 2px solid rgba(255,255,255,0.2);
  transition: all 0.3s;
}

.progress-step.active {
  color: #3b82f6;
}

.progress-step.active::before {
  border-color: #3b82f6;
  background: #1a1a20;
}

.director-result-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 8px;
}

.director-result-cards::-webkit-scrollbar {
  width: 6px;
}
.director-result-cards::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
}

.result-card {
  background: rgba(30, 30, 35, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.card-content {
  font-size: 0.95rem;
  color: #e2e8f0;
  line-height: 1.6;
  white-space: pre-wrap;
}

.director-modal-footer {
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(20, 20, 25, 0.5);
}

.footer-actions {
  display: flex;
  gap: 12px;
}

.director-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.director-btn.btn-ghost {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid rgba(255,255,255,0.1);
}
.director-btn.btn-ghost:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.director-btn.btn-secondary {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
}
.director-btn.btn-secondary:hover {
  background: rgba(139, 92, 246, 0.3);
}

.director-btn.btn-primary {
  background: rgba(139, 92, 246, 0.15);
  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.5);
}
.director-btn.btn-primary:hover {
  background: rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 0.8);
}
"""

with open(workspace_css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

if ".director-modal-overlay" not in css_content:
    with open(workspace_css_path, 'a', encoding='utf-8') as f:
        f.write(css_addition)

print("Modal patched successfully!")
