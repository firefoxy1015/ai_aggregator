import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, RefreshCw, AlertCircle, Settings2, Image as ImageIcon, X, Upload, CheckCircle2, Lightbulb } from 'lucide-react';
import { toolsData } from './data';
import './Workspace.css';

const BACKEND_URL = 'https://ai-studio-swo7.onrender.com';

function Workspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = toolsData.find(t => t.id === parseInt(id));
  const chatStorageKey = `nexus_chat_${id}`;

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(chatStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter out any incomplete streaming messages
          return parsed.filter(m => m.id !== 'streaming');
        }
      }
    } catch (e) {
      localStorage.removeItem(chatStorageKey);
    }
    return [{ role: 'system', content: `连接已建立！我是 ${tool?.title} (${tool?.modelId})。您可以向我发送指令了。`, type: 'text' }];
  });
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    // Don't save if there's only the initial welcome message
    if (messages.length > 1) {
      localStorage.setItem(chatStorageKey, JSON.stringify(messages));
    }
  }, [messages, chatStorageKey]);

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

  const [directorModal, setDirectorModal] = useState({ open: false, agent: null, status: 'idle', result: null });
  const messagesEndRef = useRef(null);

  const handleEnhance = async (agent) => {
    if (!input.trim()) {
      alert("请先在输入框中写下你的初步想法或提示词~");
      return;
    }
    const original = input;
    setDirectorModal({ open: true, agent, status: 'dispatch', result: null });

    // Simulate progress steps
    setTimeout(() => setDirectorModal(prev => prev.status === 'dispatch' ? { ...prev, status: 'think' } : prev), 1200);
    setTimeout(() => setDirectorModal(prev => prev.status === 'think' ? { ...prev, status: 'build' } : prev), 3500);

    try {
      const agentTitle = agent.name.split('\n')[0];
      const agentDesc = agent.name.split('\n')[1] || '';
      const sysPrompt = `你现在是顶级大厂的${agentTitle}。${agentDesc}\n你的任务是将用户的简短输入，扩写成极具画面感、电影级质感的高质量 AI 视频生成提示词。请尽情发挥你的专业编剧和导演能力，补充丰富的细节，包括但不限于：1.画面主体（动作、服饰、神态） 2.场景环境（时间、天气、气氛） 3.电影级光影（丁达尔光、轮廓光、霓虹灯等） 4.专业运镜（推拉摇移、微距、慢动作等） 5.画质与质感（8k、电影感、胶片质感）。\n\n请严格使用以下XML标签包裹输出内容（直接输出XML，绝对不要带Markdown代码块或任何废话）：\n\n<explanation>你的编剧构思说明（分析你为什么这么设计，增加了哪些惊艳的视觉细节）</explanation>\n<zh_prompt>极具画面感的中文视频提示词（细节极度丰富，包含构图、光影、动作等全方位描述，字数在200-400字左右，必须极具专业水准）</zh_prompt>\n<en_prompt>完美对应的英文视频提示词（使用好莱坞级别的专业影视词汇、打光术语和摄影机参数，逗号分隔，这是最终喂给AI视频大模型的提示词，必须极为详尽和专业）</en_prompt>`;

      const response = await fetch(`https://api.ai6700.com/v1/chat/completions`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer sk-37b060cd778ee075ac3388fe421c6df1cc367f591238195c`
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          messages: [
            { role: 'user', content: sysPrompt + '\n\n用户的真实输入内容如下：\n' + original }
          ],
          stream: false
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const assistantContent = data.choices?.[0]?.message?.content || '';

      if (!assistantContent || assistantContent.includes('暂不支持') || assistantContent.includes('请联系管理员')) {
        throw new Error(assistantContent || '未收到有效回复');
      }

      // Parse XML tags robustly
      const extractTag = (text, tag) => {
        const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i');
        const match = text.match(regex);
        return match ? match[1].trim() : '';
      };

      const exp = extractTag(assistantContent, 'explanation');
      const zh = extractTag(assistantContent, 'zh_prompt');
      const en = extractTag(assistantContent, 'en_prompt');

      setDirectorModal(prev => ({
        ...prev,
        status: 'complete',
        result: {
          explanation: exp || '已为你生成创意提示词。',
          zhPrompt: zh || assistantContent.replace(/<[^>]+>/g, '').trim(),
          enPrompt: en || '未成功生成英文提示词，请重试或检查模型输出。'
        }
      }));

    } catch (err) {
      console.error('Director enhance error:', err);
      alert("AI 引擎调用失败: " + err.message);
      setDirectorModal({ open: false, agent: null, status: 'idle', result: null });
    }
  };

  const applyDirectorPrompt = (promptText) => {
    setInput(promptText);
    setDirectorModal({ open: false, agent: null, status: 'idle', result: null });
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
    formData.append('reqtype', 'fileupload');
    formData.append('fileToUpload', file);

    try {
      const res = await fetch('https://catbox.moe/user/api.php', { method: 'POST', body: formData });
      const url = await res.text();
      if (res.ok && url.startsWith('http')) {
        setParams(prev => {
          const current = prev[name] || [];
          if (current.length >= max) current.shift(); // keep under max
          return { ...prev, [name]: [...current, url] };
        });
      } else {
        throw new Error('公共CDN上传失败: ' + url);
      }
    } catch (err) {
      alert("媒体文件上传失败: " + err.message + "\n\n(如果持续失败，可能是本地网络无法访问公共图床，请直接粘贴图片/视频链接)");
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
        // DEEPWL Models
        const DEEPWL_MODELS = {
          'grok-4': true, 'grok-4-2': true, 'grok-4-1-auto': true,
          'deepseek-r1': true, 'deepseek-v3.2': true,
          'glm-5': true, 'kimi-k2.5': true
        };
        const DEEPWL_URL = 'https://zx1.deepwl.net/v1/chat/completions';
        const DEEPWL_KEY = 'sk-hUviZm3xQzam0EaaA9622c041aA249CbB4924c929c9805Aa';

        // DATA999 Chat Models
        const DATA999_CHAT_MODELS = {
          'gpt-5.5': true
        };
        const DATA999_URL = 'https://api.ai6700.com/api/v1/chat/completions';
        const DATA999_KEY = 'sk-37b060cd778ee075ac3388fe421c6df1cc367f591238195c';

        let response;
        if (DEEPWL_MODELS[tool.modelId]) {
          response = await fetch(DEEPWL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${DEEPWL_KEY}` },
            body: JSON.stringify({ model: tool.modelId, messages: chatHistory, stream: true })
          });
        } else if (DATA999_CHAT_MODELS[tool.modelId]) {
          response = await fetch(DATA999_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${DATA999_KEY}` },
            body: JSON.stringify({ model: tool.modelId, messages: chatHistory, stream: true })
          });
        } else {
          const body = {
            model: tool.modelId,
            messages: chatHistory,
            system: params.system || undefined,
            web_search: params.web_search,
            enable_thinking: params.enable_thinking
          };
          response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        }

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
                // Support both proxy format (data.text) and OpenAI format (choices[0].delta.content)
                const txt = data.text || data.choices?.[0]?.delta?.content || '';
                if (txt) {
                  assistantContent += txt;
                  setMessages(prev => prev.map(m => m.id === 'streaming' ? { ...m, content: assistantContent } : m));
                }
              } catch (e) { }
            }
          }
        }
        setMessages(prev => prev.map(m => m.id === 'streaming' ? { role: 'assistant', content: m.content, type: 'text' } : m));
        setIsTyping(false);

      } else {
        // Models routed through deepwl video endpoint
        const ALT_VIDEO_MODELS = {
          'grok-video-3-10s': true, 'grok-video-3-15s': true,
        };
        const ALT_VIDEO_URL = 'https://zx1.deepwl.net/v1/video/generations';
        const ALT_VIDEO_KEY = 'sk-hUviZm3xQzam0EaaA9622c041aA249CbB4924c929c9805Aa';

        const useAltVideo = ALT_VIDEO_MODELS[tool.modelId];

        if (useAltVideo) {
          // Deepwl video API: multipart form submit + polling
          const formData = new FormData();
          formData.append('model', tool.modelId);
          formData.append('prompt', userMessage);

          const submitRes = await fetch(ALT_VIDEO_URL, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${ALT_VIDEO_KEY}` },
            body: formData
          });
          const submitData = await submitRes.json();
          if (!submitRes.ok) throw new Error(submitData.message || submitData.detail || '生成请求失败');

          const taskId = submitData.id || submitData.task_id;
          setMessages(prev => [...prev, { role: 'system', content: `任务已提交 (ID: ${taskId})，渲染中...`, type: 'text' }]);

          // Poll deepwl/data999 video status
          let isFinal = false;
          let pollAttempts = 0;
          const maxPollAttempts = 60;
          while (!isFinal && pollAttempts < maxPollAttempts) {
            await new Promise(r => setTimeout(r, 8000));
            pollAttempts++;
            try {
              const statusRes = await fetch(`${ALT_VIDEO_URL}/${taskId}`, {
                headers: { 'Authorization': `Bearer ${ALT_VIDEO_KEY}` }
              });
              if (!statusRes.ok) { console.warn(`Poll ${pollAttempts} failed: HTTP ${statusRes.status}`); continue; }
              const sData = await statusRes.json();
              const status = sData.data?.status || sData.status || '';
              if (status === 'SUCCESS' || status === 'COMPLETED' || status === 'completed') {
                isFinal = true;
                setIsTyping(false);
                const url = sData.data?.result_url || sData.data?.video_url || '';
                if (url) {
                  setMessages(prev => [...prev, { role: 'assistant', content: '生成完成：', type: 'media', url, mediaType: 'video' }]);
                  try {
                    const gallery = JSON.parse(localStorage.getItem('nexus_gallery') || '[]');
                    gallery.push({ id: `${Date.now()}_${Math.random().toString(36).substr(2,6)}`, url, mediaType: 'video', modelId: tool.modelId, modelTitle: tool.title, prompt: userMessage, timestamp: Date.now() });
                    localStorage.setItem('nexus_gallery', JSON.stringify(gallery));
                  } catch (e) { console.error('Gallery save error:', e); }
                } else {
                  setMessages(prev => [...prev, { role: 'system', content: '生成完成但未返回视频文件。', type: 'error' }]);
                }
              } else if (status === 'FAILURE' || status === 'FAILED' || status === 'failed') {
                isFinal = true;
                setIsTyping(false);
                const reason = sData.data?.fail_reason || sData.data?.error || '未知错误';
                setMessages(prev => [...prev, { role: 'system', content: `生成失败: ${reason}`, type: 'error' }]);
              }
            } catch (pollErr) {
              console.warn(`Poll ${pollAttempts} error:`, pollErr.message);
            }
          }
          if (!isFinal) {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'system', content: `轮询超时（已等待${maxPollAttempts * 8}秒），请稍后重试。`, type: 'error' }]);
          }
        } else {
        const finalParams = { ...params };

        // Handle custom image_start and image_end mapping
        if (finalParams.image_start || finalParams.image_end) {
          const startUrl = finalParams.image_start?.[0] || "";
          const endUrl = finalParams.image_end?.[0] || "";
          if (startUrl || endUrl) {
            finalParams.images = [startUrl, endUrl].filter(u => u);
          }
          delete finalParams.image_start;
          delete finalParams.image_end;
        }

        // Helper to convert base64 to public URL via Catbox (Data999 requires public URLs)
        const uploadBase64 = async (base64Str) => {
          if (typeof base64Str !== 'string' || !base64Str.startsWith('data:')) return base64Str;
          try {
            const match = base64Str.match(/^data:(image\/[a-zA-Z]+);base64,(.*)$/);
            if (!match) return base64Str;
            const mime = match[1];
            const bstr = atob(match[2]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while(n--){ u8arr[n] = bstr.charCodeAt(n); }
            const blob = new Blob([u8arr], {type: mime});
            const ext = mime.split('/')[1] || 'jpg';
            const file = new File([blob], `upload.${ext}`, {type: mime});
            const formData = new FormData();
            formData.append('reqtype', 'fileupload');
            formData.append('fileToUpload', file);
            const res = await fetch('https://catbox.moe/user/api.php', { method: 'POST', body: formData });
            if (!res.ok) throw new Error('Catbox upload failed');
            return await res.text();
          } catch (e) {
            console.error('Image upload error:', e);
            return base64Str; // Fallback, though Data999 will likely reject base64
          }
        };

        // Clean up empty values and upload any base64 images
        for (const key of Object.keys(finalParams)) {
          const val = finalParams[key];
          if (Array.isArray(val)) {
            if (val.length === 0) delete finalParams[key];
            else {
              setMessages(prev => [...prev.filter(m => m.content !== '正在上传参考图到公共CDN...'), { role: 'system', content: '正在上传参考图到公共CDN...', type: 'text' }]);
              finalParams[key] = await Promise.all(val.map(uploadBase64));
            }
          } else if (val === '' || val === undefined || val === null) {
            delete finalParams[key];
          } else if (typeof val === 'string' && val.startsWith('data:')) {
            setMessages(prev => [...prev.filter(m => m.content !== '正在上传参考图到公共CDN...'), { role: 'system', content: '正在上传参考图到公共CDN...', type: 'text' }]);
            finalParams[key] = await uploadBase64(val);
          }
        }

        let finalPrompt = userMessage;
        if (activePreset && tool.category === 'paint') {
          const presetObj = [
            { id: 1, prompt: ', 赛博朋克风格, 霓虹灯效' },
            { id: 2, prompt: ', 高质量二次元动漫风格, 绚丽光影' },
            { id: 3, prompt: ', 真实摄影, 单反镜头, 8k画质, 电影级光影' },
            { id: 4, prompt: ', 3D渲染, 虚幻引擎5, 辛烷渲染器, 极高细节' },
            { id: 5, prompt: ', 奇幻魔法风格, 史诗感, 绚丽的魔法光效' },
            { id: 6, prompt: ', 极简主义摄影, 干净背景, 人像特写' },
            { id: 7, prompt: ', 壮丽的自然风光, 国家地理摄影, 阳光透过树叶' },
            { id: 8, prompt: ', 美食摄影, 令人垂涎欲滴, 焦外虚化, 柔和微距光' },
            { id: 9, prompt: ', 深空摄影, 浩瀚宇宙, 星空银河, 神秘氛围' }
          ].find(s => s.id === activePreset);
          if (presetObj) finalPrompt += presetObj.prompt;
        }

        const DATA999_MEDIA_URL = 'https://api.ai6700.com/api/v1/media/generate';
        const reqBody = {
          model: tool.modelId,
          prompt: finalPrompt,
          params: finalParams
        };

        const generateRes = await fetch(DATA999_MEDIA_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-37b060cd778ee075ac3388fe421c6df1cc367f591238195c`
          },
          body: JSON.stringify(reqBody)
        });

        const genData = await generateRes.json();
        if (!generateRes.ok || genData.code !== 200) {
          throw new Error(genData.msg || genData.error?.message || 'Data999请求失败');
        }

        // Data999 v1 media API returns task ids in data.任务ids[0]
        const taskId = genData.data?.['任务ids']?.[0] || genData.data?.task_id;
        if (!taskId) throw new Error('未能从Data999获取到任务ID');

        setMessages(prev => [...prev.filter(m => m.content !== '正在上传参考图到公共CDN...'), { role: 'system', content: `任务已提交 (ID: ${taskId})，Data999 渲染中...`, type: 'text' }]);

        let isFinal = false;
        let pollAttempts = 0;
        const maxPollAttempts = tool.category === 'video' ? 150 : 60; // 150 * 8s = 20 minutes max for videos
        while (!isFinal && pollAttempts < maxPollAttempts) {
          await new Promise(r => setTimeout(r, 8000));
          pollAttempts++;
          try {
            const statusRes = await fetch(`https://api.ai6700.com/api/v1/skills/task-status?task_id=${taskId}`, {
              headers: { 'Authorization': `Bearer sk-37b060cd778ee075ac3388fe421c6df1cc367f591238195c` }
            });
            if (!statusRes.ok) {
              console.warn(`Poll attempt ${pollAttempts} failed: HTTP ${statusRes.status}`);
              continue;
            }
            const statusData = await statusRes.json();
            
            // Data999 status API returns 'is_final', 'state', 'error', 'result_url' inside data or root
            const sData = statusData.data || statusData;
            
            if (!sData.is_final) {
              setMessages(prev => {
                const newMsg = [...prev];
                const lastIdx = newMsg.length - 1;
                if (newMsg[lastIdx] && newMsg[lastIdx].role === 'system' && newMsg[lastIdx].content.includes(taskId)) {
                  let pText = sData.progress ? ` (进度: ${sData.progress}%)` : '';
                  let sText = sData.status ? ` [${sData.status}]` : '';
                  newMsg[lastIdx].content = `任务已提交 (ID: ${taskId})${sText}${pText}，请耐心等待渲染...`;
                }
                return newMsg;
              });
            }

            if (sData.is_final) {
              isFinal = true;
              setIsTyping(false);
              if (sData.state === 'failed' || sData.error) {
                setMessages(prev => [...prev, { role: 'system', content: `生成失败: ${sData.error || '未知错误'}`, type: 'error' }]);
              } else if (sData.result_url || (sData.result_urls && sData.result_urls.length > 0)) {
                const url = sData.result_url || sData.result_urls[0];
                const isVideo = url.match(/\.(mp4|webm|mov|m3u8)/i) || tool.category === 'video';
                const isAudio = url.match(/\.(mp3|wav|ogg|aac)/i) || tool.category === 'audio';
                let mType = 'image';
                if (isVideo) mType = 'video';
                if (isAudio) mType = 'audio';

                setMessages(prev => [...prev, { role: 'assistant', content: `生成完成：`, type: 'media', url, mediaType: mType }]);

                // Save to gallery
                try {
                  const gallery = JSON.parse(localStorage.getItem('nexus_gallery') || '[]');
                  gallery.push({
                    id: `${Date.now()}_${Math.random().toString(36).substr(2,6)}`,
                    url,
                    mediaType: mType,
                    modelId: tool.modelId,
                    modelTitle: tool.title,
                    prompt: userMessage,
                    timestamp: Date.now()
                  });
                  localStorage.setItem('nexus_gallery', JSON.stringify(gallery));
                } catch (e) { console.error('Gallery save error:', e); }
              } else {
                setMessages(prev => [...prev, { role: 'system', content: `生成完成但未返回结果文件。`, type: 'error' }]);
              }
            }
          } catch (pollErr) {
            console.warn(`Poll attempt ${pollAttempts} error:`, pollErr.message);
          }
        }
        if (!isFinal) {
          setIsTyping(false);
          setMessages(prev => [...prev, { role: 'system', content: `轮询超时（已等待${maxPollAttempts * 8}秒），请手动刷新或稍后重试。`, type: 'error' }]);
        }
        } // end useAltVideo else
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
                      onClick={() => setActivePreset(prev => prev === style.id ? null : style.id)}
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
                  <div className="style-avatar add-style" onMouseEnter={() => setHoveredPreset({ name: '自定义\n添加属于你自己的专属风格或预设模型' })} onMouseLeave={() => setHoveredPreset(null)} onClick={() => alert('自定义风格卡槽即将开放')}>
                    <span>+</span>
                  </div>
                </div>
              </div>
            )}

            <div className="advanced-input-container">
              {/* Main Input Area: Textarea + Toolbar + Image Upload */}
              <div className="input-right-panel" style={{ width: '100%', position: 'relative' }}>
                <div className="price-badge">预计 ⚡ 0.35/次</div>

                <div className="textarea-with-images" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="upload-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flexShrink: 0, maxWidth: '240px' }}>
                    {tool.configurableParams?.filter(p => p.type === 'image_upload').map(param => (
                      <div key={param.name} className="inline-upload" style={{ position: 'relative', width: '70px', height: '90px' }}>
                        <label className="reference-upload-box inline-box" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', background: 'rgba(20,20,25,0.6)' }}>
                          {isUploading ? <RefreshCw size={24} className="spin" /> : <span className="plus-icon">+</span>}
                          <span className="upload-text" style={{ fontSize: '0.65rem', marginTop: '4px', color: 'var(--text-muted)' }}>{param.label}</span>
                          <input type="file" accept={param.name.includes('video') ? "video/*" : param.name.includes('audio') ? "audio/*" : "image/*"} style={{ display: 'none' }} onChange={e => handleImageUpload(e, param.name, param.max)} />
                        </label>
                        {params[param.name] && params[param.name].length > 0 && (
                          <div className="uploaded-preview-overlay inline-preview" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden', background: '#1a1a24' }}>
                            {param.name.includes('video') ? (
                              <video src={params[param.name][params[param.name].length - 1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop />
                            ) : param.name.includes('audio') ? (
                              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <span style={{ fontSize: '0.65rem', color: '#c4b5fd' }}>🎵 已传</span>
                              </div>
                            ) : (
                              <img src={params[param.name][params[param.name].length - 1]} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            )}
                            <span className="count-badge" style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.7)', fontSize: '0.6rem', padding: '2px 4px', borderRadius: '4px' }}>{params[param.name].length}/{param.max}</span>
                            <button className="remove-image" style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }} onClick={() => removeImage(param.name, params[param.name].length - 1)}><X size={12} /></button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-input-section" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <textarea
                      className="main-textarea"
                      style={{ width: '100%', minHeight: '80px', maxHeight: '200px', background: 'transparent', border: 'none', resize: 'none', color: 'var(--text-main)', outline: 'none', padding: '4px 0', fontFamily: 'inherit', fontSize: '0.95rem' }}
                      disabled={isEnhancing}
                      placeholder={tool.category === 'video' ? "由于该模型渠道火爆，选择智能调度分组时，大概率会调度到高价格分组，请适度使用\n最好的效果是横版传横图，竖版传竖图，尽量不要乱传" : `描述你想要生成的内容...`}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                    />
                    {activePreset && tool.category === 'paint' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c4b5fd', fontSize: '0.8rem', background: 'rgba(124, 58, 237, 0.15)', padding: '4px 10px', borderRadius: '12px', width: 'fit-content' }}>
                        <Sparkles size={12} />
                        <span>已应用风格: {
                          [
                            { id: 1, name: '赛博朋克' }, { id: 2, name: '二次元' }, { id: 3, name: '真实摄影' },
                            { id: 4, name: '3D架构' }, { id: 5, name: '魔法幻想' }, { id: 6, name: '极简人像' },
                            { id: 7, name: '自然风景' }, { id: 8, name: '美食静物' }, { id: 9, name: '暗黑星空' }
                          ].find(s => s.id === activePreset)?.name
                        }</span>
                        <button onClick={() => setActivePreset(null)} style={{ background: 'none', border: 'none', color: '#c4b5fd', cursor: 'pointer', display: 'flex', padding: 0, marginLeft: '4px' }}><X size={12} /></button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="input-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                  <div className="toolbar-params" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    {tool.configurableParams?.filter(p => p.type === 'select' || p.type === 'boolean').map(param => (
                      <div key={param.name} className="toolbar-param-item">
                        {param.type === 'boolean' ? (
                          <button
                            className={`param-toggle-btn ${params[param.name] ? 'active' : ''}`}
                            style={{ display: 'flex', alignItems: 'center', gap: '4px', background: params[param.name] ? 'rgba(124,58,237,0.2)' : 'rgba(40,40,50,0.6)', border: `1px solid ${params[param.name] ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`, color: params[param.name] ? '#c4b5fd' : 'var(--text-main)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer' }}
                            onClick={() => handleParamChange(param.name, !params[param.name])}
                          >
                            <Sparkles size={14} />
                            {param.label}
                          </button>
                        ) : (
                          <div className="param-select-wrapper">
                            <select
                              className="param-select"
                              style={{ background: 'rgba(40,40,50,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-main)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' }}
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
                  </div>

                  <button className="send-btn-large" style={{ flexShrink: 0, marginLeft: '12px', width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 15px rgba(124,58,237,0.3)' }} onClick={handleSend} disabled={!input.trim()}>
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </footer>

          {directorModal.open && (
            <div className="director-modal-overlay">
              <div className="director-modal">
                <div className="director-modal-header">
                  <div className="director-modal-title">
                    <img src={directorModal.agent?.img} alt="avatar" className="director-avatar" />
                    <span>{directorModal.agent?.name.split('\n')[0]}</span>
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
