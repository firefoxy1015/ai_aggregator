export const menuItems = [
  { id: 'all', label: '全部', icon: 'LayoutGrid' },
  { id: 'chat', label: 'AI对话', icon: 'MessageSquare' },
  { id: 'paint', label: 'AI绘画', icon: 'Palette' },
  { id: 'video', label: 'AI视频', icon: 'Video' },
];

const chatParams = [
  { name: 'web_search', label: '联网搜索', type: 'boolean', default: false },
  { name: 'enable_thinking', label: '深度思考', type: 'boolean', default: false },
  { name: 'system', label: '角色设定', type: 'textarea', placeholder: '例如：你是一个精通Python的高级架构师...', default: '' }
];

export const toolsData = [
  // --- AI 对话 (Chat) ---
  { id: 1, title: 'Claude 3.5 Sonnet', modelId: 'claude-sonnet-4-6', category: 'chat', desc: 'Anthropic最强模型，擅长长文本和代码编写，逻辑严密。', tag: '代码神器', hot: true, icon: 'Code', configurableParams: chatParams },
  { id: 2, title: 'Claude 3 Opus', modelId: 'claude-opus-4-7', category: 'chat', desc: 'Anthropic旗舰模型，深度推理。', tag: '最新旗舰', hot: false, icon: 'Bot', configurableParams: chatParams },
  { id: 3, title: 'Gemini 1.5 Pro', modelId: 'gemini-3.1-pro-preview', category: 'chat', desc: 'Google原生多模态模型，支持超长上下文。', tag: '超大上下文', hot: true, icon: 'Sparkles', configurableParams: chatParams },
  { id: 4, title: 'GPT-4o (GPT-5.4)', modelId: 'gpt-5.4', category: 'chat', desc: 'OpenAI顶级模型，全能型助手。', tag: '官方同步', hot: true, icon: 'Zap', configurableParams: chatParams },
  { id: 5, title: 'Grok 1.5', modelId: 'grok-4.2', category: 'chat', desc: 'xAI研发的幽默大模型，无审查，获取实时网络数据。', tag: '实时网络', hot: true, icon: 'Zap', configurableParams: chatParams },
  { id: 6, title: '豆包 Seed 2.0', modelId: 'doubao-seed-2-0-pro-260215', category: 'chat', desc: '字节跳动旗舰，支持长文本与高质量生成。', tag: '国产之光', hot: false, icon: 'BookOpen', configurableParams: chatParams },

  // --- AI 绘画 (Paint) ---
  { 
    id: 7, title: 'Midjourney v6', modelId: 'mj_imagine', category: 'paint', desc: '全球顶尖AI绘画，艺术感极强。', tag: '设计必看', hot: true, icon: 'Image', 
    configurableParams: [
      { name: 'aspectRatio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9 横屏'}, {v:'9:16',l:'9:16 竖屏'}, {v:'1:1',l:'1:1 方形'}, {v:'4:3',l:'4:3'}], default: '16:9' },
      { name: 'botType', label: '引擎类型', type: 'select', options: [{v:'MID_JOURNEY',l:'Midjourney V6'}, {v:'NIJI_JOURNEY',l:'Niji 二次元'}], default: 'MID_JOURNEY' },
      { name: 'images', label: '垫图(参考图)', type: 'image_upload', max: 4 }
    ]
  },
  { 
    id: 8, title: 'Grok 1.5 Image', modelId: 'grok-4.2-image', category: 'paint', desc: 'xAI写实生图，极速出图。', tag: '极速', hot: true, icon: 'Aperture', 
    configurableParams: [
      { name: 'size', label: '分辨率与比例', type: 'select', options: [{v:'1080x1920',l:'1080x1920 (竖屏)'}, {v:'1920x1080',l:'1920x1080 (横屏)'}, {v:'1024x1024',l:'1024x1024 (方形)'}], default: '1080x1920' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 9, title: 'DALL·E 3 (GPT Image)', modelId: 'gpt-image-1.5-all', category: 'paint', desc: '精准遵循复杂提示词，一键生图。', tag: '精准理解', hot: false, icon: 'Brush', 
    configurableParams: [
      { name: 'size', label: '图片尺寸', type: 'select', options: [{v:'1024x1024',l:'1024x1024'}], default: '1024x1024' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },

  // --- AI 视频 (Video) ---
  { 
    id: 10, title: 'Sora 2', modelId: 'sora-2', category: 'video', desc: '文字生成高清视频，物理规律逼真。', tag: '即将上线', hot: true, icon: 'Film', 
    configurableParams: [
      { name: 'seconds', label: '时长', type: 'select', options: [{v:5,l:'5秒'}], default: 5 },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'竖屏 1080x1920'}, {v:'1920x1080',l:'横屏 1920x1080'}], default: '1080x1920' },
      { name: 'image_start', label: '参考首帧', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 11, title: '可灵 Kling v3', modelId: 'kling-v3-video', category: 'video', desc: '高质量AI视频生成，国产之光。', tag: '国产视频', hot: true, icon: 'Clapperboard', 
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质'}], default: 'standard' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9 横屏'}, {v:'9:16',l:'9:16 竖屏'}, {v:'1:1',l:'1:1 方形'}], default: '16:9' },
      { name: 'image_start', label: '首帧图 (可选)', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图 (可选)', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 12, title: 'Veo 3.1', modelId: 'veo3.1', category: 'video', desc: '自带BGM的视频生成模型。', tag: '带音效', hot: false, icon: 'PlaySquare', 
    configurableParams: [
      { name: 'generation_mode', label: '生成模式', type: 'select', options: [{v:'standard',l:'标准'}], default: 'standard' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'enhance_prompt', label: '自动润色提示词', type: 'boolean', default: true },
      { name: 'image_start', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 13, title: '即梦 Seedance', modelId: 'doubao-seedance-1-5-pro-251215', category: 'video', desc: '音画同步极佳的视频模型。', tag: '电影级', hot: true, icon: 'Film', 
    configurableParams: [
      { name: 'audio_duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}], default: 5 },
      { name: 'ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'1080p',l:'1080p高清'}, {v:'720p',l:'720p标清'}], default: '1080p' },
      { name: 'image_start', label: '上传首帧', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '上传尾帧', type: 'image_upload', max: 1 }
    ]
  },
];
