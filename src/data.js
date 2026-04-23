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
      { id: 'default', name: '✅ 默认分组' },
      { id: 'tx-y5', name: '⚡ TX-Y5' },
      { id: 'kj', name: '💎 KJ直连' }
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
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用大模型分组' },
      { id: 'transfer', name: '🔄 官转分组' },
      { id: 'kj', name: '⚡ KJ直连' }
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
      { id: 'default', name: '🚀 default (默认)' },
      { id: 'slow', name: '🐢 MJ慢速分组' }
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
    id: 100, title: 'grok-video-3-plus', modelId: 'grok-video-3-plus', category: 'video', desc: 'Grok 推出的 Plus 级视频生成模型，支持 10/15/20/25 秒多种时长，覆盖 16:9、9:16、3:2、2:3、1:1 全比例，适合社交媒体和创意短片场景。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/Grok_bai.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 101, title: 'Pix C1 参考生', modelId: 'pixverse-c1-cankaosheng', category: 'video', desc: 'PixVerse C1 视频生成模型，专为打斗、法术特效及高速运动等动态场景优化。支持文生视频和参考生两种模式，不传图自动走文生，传图自动走参考生（最多7张），自动生成有声视频，支持360P-1080P分辨率，1-15秒。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/PixVerse.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 102, title: 'SD 2.0 参考生', modelId: 'kwvideo-v2-ref', category: 'video', desc: '字节跳动即梦团队推出的旗舰级视频生成模型 Seedance 2.0，支持多图参考生视频，上传 1~9 张参考图，模型智能融合风格、元素和构图生成新视频。自动生成有声视频，4~15秒灵活时长，标准/快速双版本可选。按官方 Token 计费。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/doubao.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 103, title: 'Pix C1 首尾帧', modelId: 'pixverse-c1-shouweizhen', category: 'video', desc: 'PixVerse C1 视频生成模型，专为打斗、法术特效及高速运动等动态场景优化。支持首帧生视频和首尾帧两种模式，自动生成有声视频，支持360P-1080P分辨率，1-15秒。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/PixVerse.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 104, title: 'Vidu Q3 参考生', modelId: 'viduq3-cankaosheng', category: 'video', desc: 'Vidu Q3 参考生视频模型，上传1-7张参考图片，AI以图中主体为参考生成主体一致的有声视频。当前版本为漫剧做了针对优化，支持音画同出，最高1080P分辨率，4-16秒时长可选。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/vidu-icon.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 105, title: 'veo3.1', modelId: 'veo3.1', category: 'video', desc: '谷歌推出的高可控性视频模型，凭借独特的“首尾帧控制”技术（补全起始与结束画面）和精准运镜指令，能生成自带背景音乐的专业级视频。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/gemini.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 106, title: 'Vidu Q3', modelId: 'viduq3', category: 'video', desc: 'Vidu 推出的 Q3 系列视频生成模型，支持文生视频、首帧图生视频、首尾帧过渡视频三种模式。内置音视频同步直出能力，生成的视频自带台词和音效。提供快速(turbo)和高质量(pro)两种版本，最长支持16秒视频生成。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/vidu-icon.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 107, title: 'veo3.1-lite', modelId: 'veo3.1-lite', category: 'video', desc: 'Google最新的高级人工智能模型，veo3.1 lite 模式，支持视频自动配套音频生成，质量高价格很低，性价比最高的选择。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/gemini.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 108, title: 'Pix V6 首尾帧', modelId: 'pixverse-v6-shouweizhen', category: 'video', desc: 'PixVerse V6 多模态视频生成，支持文生视频、图生视频、首尾帧三种模式。不传图=文生视频，1张图=首帧生视频，2张图=首尾帧，自动生成有声视频，支持360P-1080P分辨率，3-15秒。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/PixVerse.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 109, title: 'veo3.1-4K高清', modelId: 'veo3.1-4k', category: 'video', desc: 'Google Veo 3.1 4K 超清画质、逻辑级首尾帧控制、电影级运镜与原生音频生成于一体的“全能 AI 导演”，它让高难度的视频创意实现了从“不可控”到“精准定制”的跨越。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/gemini.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 110, title: 'SD 2.0 首尾帧', modelId: 'kwvideo-v2', category: 'video', desc: '字节跳动即梦团队推出的旗舰级视频生成模型 Seedance 2.0，全球第一梯队超级多模态视频生成。支持文生视频、首帧图生视频、首尾帧三种模式，自动生成有声视频，4~15秒灵活时长，标准/快速双版本可选。按官方 Token 计费。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/doubao.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 111, title: '万相 2.6 参考生', modelId: 'wan2.6-cankaosheng', category: 'video', desc: '万相2.6官方版参考生视频模型，支持上传参考图片提取角色形象，生成单角色或多角色互动视频。提供快速和高质量两档画质，支持720P/1080P分辨率，最长可生成10秒视频。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 112, title: 'SD 2.0 全能参考', modelId: 'kwvideo-v2-quannengcankao', category: 'video', desc: '字节跳动即梦团队推出的旗舰级视频生成模型 Seedance 2.0，支持图片+视频+音频任意组合作为参考输入，智能融合多模态素材生成高质量视频。最多支持 9 张图片、3 个视频、3 段音频，自动生成有声视频。按官方 Token 计费。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/doubao.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 113, title: '可灵-Omni 首尾帧', modelId: 'kling-v3-omni-shouweizhen', category: 'video', desc: '可灵 V3 Omni 首尾帧模式，上传1张图作为首帧，或2张图作为首帧+尾帧，AI智能分镜生成有声视频，支持标准/高品质双模式，5-15秒。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 114, title: '可灵-V3-video', modelId: 'kling-v3-video', category: 'video', desc: '快手可灵第三代视频生成模型，支持文生视频和图生视频，支持首尾帧控制，标准/高品质双模式，5-15秒有声视频，画质和运动表现全面升级。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 115, title: '可灵-Omni 视频参考', modelId: 'kling-v3-omni-videoref', category: 'video', desc: '可灵 V3 Omni 视频参考模式，上传参考视频 + 可选0-4张参考图，支持视频参考（参考运镜/风格生新视频）和视频编辑（指令修改原视频）两种玩法，按秒计费。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 116, title: '可灵-动作控制 V3', modelId: 'kling-motion-control-v3', category: 'video', desc: '可灵AI动作控制V3模型，基于V3引擎升级，通过上传参考图像和动作视频，让图片中的人物按照视频中的动作运动。支持std标准模式和pro高品质模式，可选择保留视频原声，人物朝向可与图片或视频一致。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 117, title: 'Vidu Q2 参考生', modelId: 'viduq2-cankaosheng', category: 'video', desc: 'Vidu Q2 参考生视频模型，上传1-7张参考图片，AI以图中主体为参考生成风格一致的高质量视频。提供标准版（细节丰富）和高质量（支持视频参考、视频编辑）两种模式，最高1080P分辨率，5-10秒时长可选。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/vidu-icon.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 118, title: '可灵-动作控制', modelId: 'kling-motion-control', category: 'video', desc: '可灵AI动作控制模型，通过上传参考图像和动作视频，让图片中的人物按照视频中的动作运动。支持std标准模式和pro高品质模式，可选择保留视频原声，人物朝向可与图片或视频一致。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 119, title: '万相-视频换人', modelId: 'wan2.2-animate-mix', category: 'video', desc: '万相2.2视频换人模型，上传一张人物图片和一段参考视频，AI将视频中的人物替换为图片中的人物，支持标准模式和专业模式。无需输入提示词。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 120, title: 'Pix V5.6 参考生', modelId: 'pixverse-v5.6-r2v', category: 'video', desc: 'PixVerse V5.6 参考生视频模型，支持上传1-7张参考图片，AI参考图片中的角色、风格、场景融合生成有声视频。支持360P至1080P分辨率，5-10秒时长可选。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/PixVerse.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 121, title: 'Pix V5.6 首尾帧', modelId: 'pixverse-v5.6-shouweizhen', category: 'video', desc: 'PixVerse V5.6 多模态视频生成，支持文生视频、图生视频、首尾帧三种模式。不传图=文生视频，1张图=首帧生视频，2张图=首尾帧，自动生成有声视频，支持360P-1080P分辨率，5-10秒。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/PixVerse.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 122, title: '万相 2.6 首帧', modelId: 'wan2.6-shouzheng', category: 'video', desc: '万相2.6官方版图生视频模型，支持首帧图片驱动和纯文本生成两种模式，自动生成有声视频。提供快速和高质量两档画质，支持720P/1080P分辨率，最长可生成15秒电影级视频。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 123, title: '可灵 2.6 Pro', modelId: 'kling-v2-6', category: 'video', desc: '快手推出的“物理世界模拟器”视频旗舰可灵 2.6，支持文生视频与单图生视频。凭借卓越的 Transformer 架构，仅需一张参考图即可生成符合真实物理规律的 1080p 电影级视频。它在光影一致性与大幅度运动表现上实现了质的飞跃，是能将静态灵感瞬间转化为动态大片的“光影造梦引擎”。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 124, title: '可灵-数字人', modelId: 'kling-avatar-image2video', category: 'video', desc: '可灵AI数字人模型，通过上传数字人参考图和音频文件，让图片中的人物开口说话。支持std标准模式和pro高品质模式，可定义数字人动作、情绪及运镜等。', tag: '热推', hot: true, icon: 'https://cos.lingkeai.vip/kling.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 125, title: '海螺 2.3', modelId: 'hailuo-2.3', category: 'video', desc: '海螺AI是MiniMax推出的视频生成模型，2.3版本在动作自然度、物理真实感和指令遵循能力上实现重大突破。提供标准版和极速版两种选择，极速版价格更优惠，适合批量创作。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/minimax.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 126, title: '万相 2.7 参考生', modelId: 'wan2.7-cankaosheng', category: 'video', desc: '阿里云万相2.7旗舰参考生视频模型，支持文本生视频和参考生视频两种模式。纯文本自动走文生视频(t2v)，上传参考图片或视频后自动切换为参考生视频(r2v)。支持720P/1080P分辨率，最长15秒视频生成。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }
    ]
  },
  { 
    id: 127, title: '万相 2.7 视频续写', modelId: 'wan2.7-xuxie', category: 'video', desc: '阿里云万相2.7视频续写模型，支持首段视频续写和首段视频+尾帧续写两种模式。上传视频片段自动续写，可选添加尾帧图片引导视频方向。支持720P/1080P分辨率，最长15秒视频生成。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' }
    ]
  },
  { 
    id: 128, title: '万相 2.7 首尾帧', modelId: 'wan2.7-shouweizhen', category: 'video', desc: '阿里云万相2.7旗舰图生视频模型，支持首帧/首尾帧两种模式。上传1张图片自动走首帧生视频，上传2张图片自动走首尾帧生视频。支持720P/1080P分辨率，最长15秒视频生成。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/qwen.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' },
      { name: 'quality', label: '画质', type: 'select', options: [{v:'standard',l:'标准'}, {v:'pro',l:'高品质(Pro)'}], default: 'standard' },
      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }
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
