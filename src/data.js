export const menuItems = [
  { id: 'all', label: '全部', icon: 'LayoutGrid' },
  { id: 'chat', label: 'AI对话', icon: 'MessageSquare' },
  { id: 'paint', label: 'AI绘画', icon: 'Palette' },
  { id: 'video', label: 'AI视频', icon: 'Video' },
  { id: 'audio', label: 'AI音频', icon: 'Music' }
];

const chatParams = [
  { name: 'web_search', label: '联网搜索', type: 'boolean', default: false },
  { name: 'enable_thinking', label: '深度思考', type: 'boolean', default: false },
  { name: 'system', label: '角色设定', type: 'textarea', placeholder: '例如：你是一个精通Python的高级架构师...', default: '' }
];

const grokSizes = [
  {v:'1080x1920',l:'1080x1920 (竖屏)'},{v:'1440x2560',l:'1440x2560 (竖屏)'},{v:'720x1280',l:'720x1280 (竖屏)'},{v:'768x1366',l:'768x1366 (竖屏)'},{v:'900x1600',l:'900x1600 (竖屏)'},
  {v:'1920x1080',l:'1920x1080 (横屏)'},{v:'2560x1440',l:'2560x1440 (横屏)'},{v:'1280x720',l:'1280x720 (横屏)'},{v:'1366x768',l:'1366x768 (横屏)'},{v:'1600x900',l:'1600x900 (横屏)'},
  {v:'1024x1024',l:'1024x1024 (方形)'},{v:'1080x1080',l:'1080x1080 (方形)'},{v:'1200x1200',l:'1200x1200 (方形)'},{v:'2048x2048',l:'2048x2048 (方形)'},{v:'2160x2160',l:'2160x2160 (方形)'},
  {v:'1024x768',l:'1024x768 (4:3)'},{v:'1280x960',l:'1280x960 (4:3)'},{v:'2048x1536',l:'2048x1536 (4:3)'}
];

export const toolsData = [
  // --- AI 对话 (Chat) ---
  { id: 1, title: 'Claude 3.5 Sonnet', modelId: 'claude-sonnet-4-6', category: 'chat', desc: 'Anthropic均衡旗舰，逻辑严密，代码神器。', tag: '代码神器', hot: true, icon: 'Code', configurableParams: chatParams },
  { id: 2, title: 'Claude 3.5 Opus', modelId: 'claude-opus-4-7', category: 'chat', desc: 'Anthropic最新旗舰，极限深度推理。', tag: '最强推理', hot: true, icon: 'Bot', configurableParams: chatParams },
  { id: 3, title: 'Claude 3 Opus (上代)', modelId: 'claude-opus-4-6', category: 'chat', desc: '上一代旗舰。', hot: false, icon: 'Bot', configurableParams: chatParams },
  { id: 4, title: 'Claude 3.5 Haiku', modelId: 'claude-haiku-4-5-20251001', category: 'chat', desc: '极速轻量，响应迅捷。', hot: false, icon: 'Zap', configurableParams: chatParams },
  { id: 5, title: 'Claude 3.5 Sonnet (上代)', modelId: 'claude-opus-4-5-20251101', category: 'chat', desc: '上一代均衡模型。', hot: false, icon: 'Archive', configurableParams: chatParams },
  
  { id: 6, title: 'GPT-5.4', modelId: 'gpt-5.4', category: 'chat', desc: 'OpenAI最新旗舰，全能大师。', tag: '官方同步', hot: true, icon: 'Cpu', configurableParams: chatParams },
  { id: 7, title: 'GPT-5.4 深度推理', modelId: 'gpt-5.4-xhigh', category: 'chat', desc: '极致的推理与计算能力。', tag: '深度思考', hot: true, icon: 'BrainCircuit', configurableParams: chatParams },
  { id: 8, title: 'GPT-5.4 Mini', modelId: 'gpt-5.4-mini', category: 'chat', desc: '轻量化，日常问答。', hot: false, icon: 'Zap', configurableParams: chatParams },
  { id: 9, title: 'GPT-5.4 Nano', modelId: 'gpt-5.4-nano', category: 'chat', desc: '最轻量极速模型。', hot: false, icon: 'Zap', configurableParams: chatParams },
  { id: 10, title: 'GPT-5.2', modelId: 'gpt-5.2-chat-latest', category: 'chat', desc: '上上代经典模型。', hot: false, icon: 'Archive', configurableParams: chatParams },

  { id: 11, title: 'Gemini 3.1 Pro', modelId: 'gemini-3.1-pro-preview', category: 'chat', desc: 'Google最强多模态模型。', tag: '超长视界', hot: true, icon: 'Sparkles', configurableParams: chatParams },
  { id: 12, title: 'Gemini 3 Pro', modelId: 'gemini-3-pro-preview', category: 'chat', desc: '上一代多模态。', hot: false, icon: 'Sparkles', configurableParams: chatParams },
  { id: 13, title: 'Gemini 3.1 Flash Lite', modelId: 'gemini-3.1-flash-lite-preview', category: 'chat', desc: '极速视觉推理。', hot: false, icon: 'Zap', configurableParams: chatParams },
  { id: 14, title: 'Gemini 3 Flash', modelId: 'gemini-3-flash-preview', category: 'chat', desc: '上一代极速模型。', hot: false, icon: 'Zap', configurableParams: chatParams },

  { id: 15, title: 'Grok 1.5 / 4.2', modelId: 'grok-4.2', category: 'chat', desc: 'xAI研发的无审查模型，实时联网数据。', tag: '无审查', hot: true, icon: 'Twitter', configurableParams: chatParams },
  { id: 16, title: '豆包 Seed 2.0 Pro', modelId: 'doubao-seed-2-0-pro-260215', category: 'chat', desc: '字节跳动旗舰，256K上下文，多模态。', tag: '国产之光', hot: true, icon: 'BookOpen', configurableParams: chatParams },
  { id: 17, title: '千问 3.6 Plus', modelId: 'qwen3.6-plus', category: 'chat', desc: '阿里云顶尖大模型。', hot: false, icon: 'Cloud', configurableParams: chatParams },
  { id: 18, title: 'MiniMax M2.7', modelId: 'MiniMax-M2.7', category: 'chat', desc: 'MiniMax强大交互模型。', hot: false, icon: 'MessageCircle', configurableParams: chatParams },

  // --- AI 绘画 (Paint) ---
  { 
    id: 19, title: 'Grok 4.2 Image', modelId: 'grok-4.2-image', category: 'paint', desc: '写实度极高，固定输出2张图。', tag: '极速写实', hot: true, icon: 'Aperture', 
    configurableParams: [
      { name: 'size', label: '分辨率与比例', type: 'select', options: grokSizes, default: '1080x1920' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 42, title: 'Grok 4.1 Image', modelId: 'grok-4.1-image', category: 'paint', desc: '上一代 Grok 生图。', hot: false, icon: 'Aperture', 
    configurableParams: [
      { name: 'size', label: '分辨率与比例', type: 'select', options: grokSizes, default: '1080x1920' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 20, title: '可灵 Kling Image O1', modelId: 'kling-image-o1', category: 'paint', desc: '人物一致性极佳的生图模型。', hot: true, icon: 'Camera',
    channels: [
      { id: 'price', name: '¥ 价格优先' },
      { id: 'speed', name: '⚡ 极速调度' },
      { id: 'official', name: '💎 官方直连' }
    ],
    configurableParams: [
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'1k',l:'1K 标准'}, {v:'2k',l:'2K 高清'}], default: '1k' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'},{v:'9:16',l:'9:16'},{v:'1:1',l:'1:1'},{v:'3:4',l:'3:4'},{v:'4:3',l:'4:3'}], default: '9:16' },
      { name: 'images', label: '参考图 (最多10张)', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 21, title: '可灵 Kling v3 Omni', modelId: 'kling-v3-omni', category: 'paint', desc: '支持4K与多图融合的高端模型。', tag: '4K画质', hot: true, icon: 'Layers',
    configurableParams: [
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'1k',l:'1K 标准'}, {v:'2k',l:'2K 高清'}, {v:'4k',l:'4K 极清'}], default: '2k' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'},{v:'9:16',l:'9:16'},{v:'1:1',l:'1:1'}], default: '9:16' },
      { name: 'images', label: '参考图 (多图融合)', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 43, title: '可灵 Kling v3', modelId: 'kling-v3', category: 'paint', desc: '基础版可灵生图。', hot: false, icon: 'Camera',
    configurableParams: [
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'1k',l:'1K 标准'}, {v:'2k',l:'2K 高清'}], default: '1k' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'},{v:'9:16',l:'9:16'},{v:'1:1',l:'1:1'}], default: '9:16' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 44, title: '可灵 动态头像', modelId: 'kling-avatar-image2video', category: 'paint', desc: '可灵头像转视频。', hot: false, icon: 'Smile',
    configurableParams: [
      { name: 'images', label: '头像原图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 22, title: '即梦 Seedream 5.0', modelId: 'doubao-seedream-5-0-260128', category: 'paint', desc: '3K画质，支持联网生图。', hot: true, icon: 'ImagePlus',
    channels: [
      { id: 'price', name: '¥ 价格优先' },
      { id: 'vip', name: '👑 VIP 通道' }
    ],
    configurableParams: [
      { name: 'images', label: '参考图 (多图融合)', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 45, title: '即梦 Seedream 4.5', modelId: 'doubao-seedream-4-5-251128', category: 'paint', desc: '即梦上一代画图模型。', hot: false, icon: 'ImagePlus',
    configurableParams: [
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 23, title: 'Nano Banana Pro', modelId: 'gemini-3-pro-image-preview', category: 'paint', desc: '文字渲染极强，支持8K。', tag: '8K文字渲染', hot: true, icon: 'Type',
    configurableParams: [
      { name: 'imageSize', label: '分辨率', type: 'select', options: [{v:'1K',l:'1K 标准'}, {v:'2K',l:'2K 高清'}, {v:'4K',l:'4K 极清'}], default: '2K' },
      { name: 'aspectRatio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'},{v:'9:16',l:'9:16'},{v:'1:1',l:'1:1'},{v:'auto',l:'自动(根据垫图)'}], default: '16:9' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 14 }
    ]
  },
  { 
    id: 24, title: 'Nano Banana 2', modelId: 'gemini-3.1-flash-image-preview', category: 'paint', desc: '快速轻量图像生成。', hot: false, icon: 'Image',
    configurableParams: [
      { name: 'imageSize', label: '分辨率', type: 'select', options: [{v:'1K',l:'1K 标准'}, {v:'2K',l:'2K 高清'}, {v:'4K',l:'4K 极清'}], default: '2K' },
      { name: 'aspectRatio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'},{v:'9:16',l:'9:16'},{v:'1:1',l:'1:1'},{v:'auto',l:'自动(根据垫图)'}], default: '16:9' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 14 }
    ]
  },
  { 
    id: 25, title: 'GPT Image 1.5 (DALL-E 3)', modelId: 'gpt-image-1.5-all', category: 'paint', desc: '语义理解极佳。', hot: false, icon: 'Brush',
    configurableParams: [
      { name: 'size', label: '图片尺寸', type: 'select', options: [{v:'1024x1024',l:'1024x1024'},{v:'1024x1792',l:'1024x1792'},{v:'1792x1024',l:'1792x1024'}], default: '1024x1024' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 26, title: 'GPT Image 2.0', modelId: 'gpt-image-2-all', category: 'paint', desc: '新一代GPT生图。', hot: false, icon: 'Brush',
    configurableParams: [
      { name: 'size', label: '图片尺寸', type: 'select', options: [{v:'1024x1024',l:'1024x1024'}], default: '1024x1024' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 46, title: 'GPT Image 2 官转', modelId: 'gpt-image-2-guan', category: 'paint', desc: '官方原版GPT生图。', hot: false, icon: 'Brush',
    configurableParams: [
      { name: 'size', label: '图片尺寸', type: 'select', options: [{v:'1024x1024',l:'1024x1024'}], default: '1024x1024' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 10 }
    ]
  },
  { 
    id: 47, title: '千问 Image Max', modelId: 'qwen-image', category: 'paint', desc: '阿里云通义千问顶级视觉。', hot: false, icon: 'Cloud',
    configurableParams: [
      { name: 'size', label: '图片尺寸', type: 'select', options: [{v:'1024x1024',l:'1024x1024'}], default: '1024x1024' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 27, title: 'Midjourney v6', modelId: 'mj_imagine', category: 'paint', desc: '全球公认艺术感最强模型。', tag: '设计必看', hot: true, icon: 'Palette', 
    channels: [
      { id: 'relax', name: '🐢 Relax 慢速通道' },
      { id: 'fast', name: '⚡ Fast 快速通道' },
      { id: 'turbo', name: '🚀 Turbo 极速通道' },
      { id: 'pro', name: '💎 Pro 独享通道' }
    ],
    configurableParams: [
      { name: 'aspectRatio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9 横屏'}, {v:'9:16',l:'9:16 竖屏'}, {v:'1:1',l:'1:1 方形'}, {v:'4:3',l:'4:3'}, {v:'3:4',l:'3:4'}], default: '16:9' },
      { name: 'botType', label: '引擎类型', type: 'select', options: [{v:'MID_JOURNEY',l:'Midjourney V6'}, {v:'NIJI_JOURNEY',l:'Niji 二次元'}], default: 'MID_JOURNEY' },
      { name: 'images', label: '垫图(参考图)', type: 'image_upload', max: 4 }
    ]
  },
  { 
    id: 28, title: 'Wan 2.7 Image', modelId: 'wan2.7-image', category: 'paint', desc: '最新4K高质量图像模型。', hot: false, icon: 'Camera',
    configurableParams: [
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高画质(Pro)'}], default: 'pro' },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'1080x1920'}, {v:'1920x1080',l:'1920x1080'}, {v:'1024x1024',l:'1024x1024'}], default: '1080x1920' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 48, title: 'Wan 2.6 Image', modelId: 'wan2.6-image', category: 'paint', desc: '上一代 Wan 生图。', hot: false, icon: 'Camera',
    configurableParams: [
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高画质(Pro)'}], default: 'pro' },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'1080x1920'}, {v:'1920x1080',l:'1920x1080'}, {v:'1024x1024',l:'1024x1024'}], default: '1080x1920' },
      { name: 'images', label: '参考图', type: 'image_upload', max: 9 }
    ]
  },

  // --- AI 视频 (Video) ---
  { 
    id: 29, title: '可灵 Kling v3 首尾帧', modelId: 'kling-v3-omni-shouweizhen', category: 'video', desc: '极强运镜控制，强制首尾帧生成。', tag: '分镜利器', hot: true, icon: 'Film', 
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'mode', label: '模式', type: 'select', options: [{v:'std',l:'标准 (std)'}, {v:'pro',l:'高品质 (pro)'}], default: 'std' },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 30, title: '可灵 Kling v3 Video', modelId: 'kling-v3-video', category: 'video', desc: '常规高质量视频生成。', hot: false, icon: 'Clapperboard', 
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'mode', label: '模式', type: 'select', options: [{v:'std',l:'标准 (std)'}, {v:'pro',l:'高品质 (pro)'}], default: 'std' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'image_start', label: '首帧图 (可选)', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图 (可选)', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 31, title: 'Grok Video 3', modelId: 'grok-video-3', category: 'video', desc: '极速视频生成。', hot: false, icon: 'Zap', 
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'1080x1920'}, {v:'1920x1080',l:'1920x1080'}], default: '1080x1920' },
      { name: 'image_start', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 32, title: 'Grok Video 3 Plus', modelId: 'grok-video-3-plus', category: 'video', desc: '最长支持 30 秒长视频。', tag: '超长视频', hot: true, icon: 'Film', 
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:10,l:'10秒'}, {v:20,l:'20秒'}, {v:30,l:'30秒'}], default: 30 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'1080x1920'}, {v:'1920x1080',l:'1920x1080'}], default: '1080x1920' },
      { name: 'image_start', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 33, title: '即梦 Seedance 1.5 Pro', modelId: 'doubao-seedance-1-5-pro-251215', category: 'video', desc: '音画同步极佳的电影级模型。', tag: '电影级', hot: true, icon: 'Video', 
    channels: [
      { id: 'price', name: '¥ 价格优先' },
      { id: 'speed', name: '⚡ 速度优先' },
      { id: 'high', name: '💎 高价分组' }
    ],
    configurableParams: [
      { name: 'audio_duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}], default: 5 },
      { name: 'ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'1080p',l:'1080p高清'}, {v:'720p',l:'720p标清'}], default: '1080p' },
      { name: 'generate_audio', label: '生成音频 (必填)', type: 'boolean', default: true },
      { name: 'image_start', label: '上传首帧', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '上传尾帧', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 34, title: 'Sora 2 官转版', modelId: 'sora-2', category: 'video', desc: '100%成功率，极强物理规律。', tag: '最新Sora', hot: true, icon: 'Film', 
    configurableParams: [
      { name: 'seconds', label: '时长', type: 'select', options: [{v:4,l:'4秒'}, {v:8,l:'8秒'}], default: 4 },
      { name: 'size', label: '分辨率', type: 'select', options: [{v:'1080x1920',l:'竖屏 1080x1920'}, {v:'1920x1080',l:'横屏 1920x1080'}], default: '1080x1920' },
      { name: 'image_start', label: '参考图 (input_reference)', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 35, title: 'Veo 3.1', modelId: 'veo3.1', category: 'video', desc: '自带BGM的创新视频生成。', tag: '带音效', hot: false, icon: 'PlaySquare', 
    configurableParams: [
      { name: 'generation_mode', label: '模式', type: 'select', options: [{v:'fast',l:'快速 (fast)'}, {v:'pro',l:'高品质 (pro)'}], default: 'fast' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' },
      { name: 'enhance_prompt', label: '自动润色提示词', type: 'boolean', default: true },
      { name: 'images', label: '参考图 (最多3张)', type: 'image_upload', max: 3 }
    ]
  },
  { 
    id: 36, title: 'Veo 3.1 Lite', modelId: 'veo3.1-lite', category: 'video', desc: '轻量版 Veo。', hot: false, icon: 'PlaySquare',
    configurableParams: [
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'high',l:'高画质'}], default: 'standard' },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}], default: '16:9' }
    ]
  },
  { 
    id: 37, title: 'Kuaishou KWVideo v2', modelId: 'kwvideo-v2', category: 'video', desc: '快手全能视频模型。', hot: false, icon: 'Clapperboard',
    configurableParams: [
      { name: 'version', label: '版本', type: 'select', options: [{v:'v2',l:'v2'}], default: 'v2' },
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}], default: 5 },
      { name: 'images', label: '参考图', type: 'image_upload', max: 5 }
    ]
  },

  // --- AI 音频 (Audio) ---
  { 
    id: 38, title: '海螺音乐 2.5+', modelId: 'music-2.5+', category: 'audio', desc: '输入歌词生成高质量流行音乐。', tag: 'AI音乐', hot: true, icon: 'Music',
    configurableParams: [
      { name: 'genre', label: '曲风 (建议写在提示词内)', type: 'textarea', placeholder: 'Pop, Rock, EDM...', default: '' }
    ]
  },
  { 
    id: 39, title: '海螺语音克隆 2.8', modelId: 'speech-2.8', category: 'audio', desc: '高仿真语音合成与克隆。', hot: false, icon: 'Mic',
    configurableParams: [
      { name: 'voice_id', label: '声音ID或风格', type: 'textarea', placeholder: '输入你想合成的文本或配音风格', default: '' }
    ]
  },
  { 
    id: 40, title: '豆包 TTS 2.0', modelId: 'doubao-tts-2.0', category: 'audio', desc: '字节跳动极速语音合成。', hot: false, icon: 'Volume2',
    configurableParams: [
      { name: 'speed', label: '语速', type: 'select', options: [{v:'1.0',l:'正常'}, {v:'1.2',l:'稍快'}, {v:'1.5',l:'极快'}], default: '1.0' }
    ]
  }
];
