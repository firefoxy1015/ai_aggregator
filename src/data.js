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
    id: 100, title: '可灵 Kling V3 首尾帧', modelId: 'kling-v3-shouweizhen', category: 'video', desc: '首尾帧控制最强，完美锁帧。优点：首尾一致性极高。缺点：动作幅度过大会轻微畸变。', tag: '首尾帧利器', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 101, title: '可灵 Kling V3 参考图', modelId: 'kling-v3-cankao', category: 'video', desc: '经典的图生视频模型。优点：画质细腻，细节丰富。缺点：对复杂指令理解略慢。', tag: '画质天花板', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 102, title: '可灵 Kling V3 纯文本', modelId: 'kling-v3-video', category: 'video', desc: '仅通过文字生成视频。优点：创意自由度高，想象力强。缺点：无法精确控制人物长相。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 103, title: '可灵 Kling Omni 首尾帧', modelId: 'kling-omni-shouweizhen', category: 'video', desc: '新一代多模态可灵模型。优点：物理规律极佳，动作自然。缺点：生成速度较慢。', tag: '动态最强', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 104, title: '可灵 Kling Omni 参考', modelId: 'kling-omni-cankao', category: 'video', desc: 'Omni架构的图生视频。优点：人物微表情逼真。缺点：算力消耗大。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 105, title: '可灵 动态头像 V3', modelId: 'kling-avatar', category: 'video', desc: '专用于静图转动态头像。优点：唇形和眨眼极其自然。缺点：只支持面部特写。', tag: '播报必备', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 106, title: '即梦 Seedance 2.7 首尾帧', modelId: 'doubao-seedance-2-7-shouweizhen', category: 'video', desc: '字节跳动最新旗舰首尾帧。优点：动作张力大，镜头感强。缺点：偶尔出现多出手指的幻觉。', tag: '大动态', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 107, title: '即梦 Seedance 2.7 参考图', modelId: 'doubao-seedance-2-7-cankao', category: 'video', desc: '即梦旗舰图生视频。优点：色彩鲜艳，画面极度讨喜。缺点：写实度略逊于可灵。', tag: '网感极佳', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 108, title: '即梦 Seedance 2.7 文本', modelId: 'doubao-seedance-2-7-video', category: 'video', desc: '即梦文生视频。优点：生成速度极快。缺点：一致性中等。', tag: '极速生成', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 109, title: '即梦 Seedance 2.7 视频重写', modelId: 'doubao-seedance-2-7-v2v', category: 'video', desc: '视频转视频。优点：可以完美保留原视频动作换画风。缺点：对原视频光影要求高。', tag: 'V2V利器', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 110, title: '即梦 Seedance 2.6 首尾帧', modelId: 'doubao-seedance-2-6-shouweizhen', category: 'video', desc: '上一代高稳定模型。优点：几乎不崩坏，成功率极高。缺点：画质上限不如2.7。', tag: '高成功率', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 111, title: '即梦 Seedance 2.6 参考图', modelId: 'doubao-seedance-2-6-cankao', category: 'video', desc: '上一代图生视频。优点：价格便宜。缺点：清晰度一般。', tag: '性价比', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 112, title: 'PixVerse C1 首尾帧', modelId: 'pixverse-c1-shouweizhen', category: 'video', desc: 'PixVerse V3升级版。优点：二次元和3D动画生成效果极佳。缺点：写实人物容易偏欧美脸。', tag: '二次元首选', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 113, title: 'PixVerse C1 参考图', modelId: 'pixverse-c1-cankao', category: 'video', desc: 'PixVerse 图生视频。优点：动漫光影处理一流。缺点：无法处理太复杂的物理碰撞。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 114, title: 'PixVerse V6 首尾帧', modelId: 'pixverse-v6-shouweizhen', category: 'video', desc: 'PixVerse V6 架构。优点：支持4K输出。缺点：生成耗时长达10分钟。', tag: '4K级输出', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 115, title: 'PixVerse V5.6 参考图', modelId: 'pixverse-v5-6-cankao', category: 'video', desc: '稳定版 PixVerse。优点：风格化强烈。缺点：分辨率受限。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 116, title: 'Vidu Q3 参考图', modelId: 'vidu-q3-cankao', category: 'video', desc: 'Vidu最新一代。优点：一键生成3D卡通感，非常立体。缺点：边缘偶尔有闪烁模糊。', tag: '立体感强', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 117, title: 'Vidu Q3 文本', modelId: 'vidu-q3-video', category: 'video', desc: 'Vidu 文生视频。优点：对长提示词理解深刻。缺点：算力昂贵。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 118, title: 'Vidu Q2 参考图', modelId: 'vidu-q2-cankao', category: 'video', desc: 'Vidu 上一代模型。优点：超快生成（1分钟内）。缺点：细节缺失。', tag: '秒级出片', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 119, title: 'Sora-2 全能参考', modelId: 'sora-2-all', category: 'video', desc: 'Sora第二代通用版。优点：物理世界模拟器，流体和光影世界第一。缺点：偶尔报错退回。', tag: '物理引擎', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 120, title: 'Sora-2 首尾帧', modelId: 'sora-2-shouweizhen', category: 'video', desc: 'Sora首尾帧控制。优点：极强的前后逻辑一致性。缺点：只支持部分账号灰度测试。', tag: '王者归来', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'image_start', label: '必填：首帧图', type: 'image_upload', max: 1 },
      { name: 'image_end', label: '必填：尾帧图', type: 'image_upload', max: 1 }
    ]
  },
  { 
    id: 121, title: 'Sora-2 纯文本', modelId: 'sora-2-video', category: 'video', desc: 'Sora 原生文生视频。优点：可生成长达60秒的连贯视频。缺点：等待队伍极长。', tag: '超长生成', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 122, title: 'Veo 3.1', modelId: 'veo3.1', category: 'video', desc: 'Google 视频大模型。优点：自带非常契合画面的BGM和音效。缺点：对中文提示词理解偏弱。', tag: '自带音效', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 123, title: 'Veo 3.1 Lite', modelId: 'veo3.1-lite', category: 'video', desc: 'Veo轻量版。优点：响应迅速。缺点：画质压缩明显。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 124, title: 'Veo 3.1 4K高频', modelId: 'veo3.1-4k', category: 'video', desc: 'Veo高级版。优点：4K超清，色彩还原度极高。缺点：非常耗费Tokens。', tag: '4K原生', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 125, title: 'Grok Video 3', modelId: 'grok-video-3', category: 'video', desc: 'xAI 视频生成。优点：无审查限制，脑洞极大。缺点：画面偶尔出现诡异逻辑。', tag: '无限制', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 126, title: 'Grok Video 3 Plus', modelId: 'grok-video-3-plus', category: 'video', desc: 'Grok 长视频生成。优点：最长支持30秒一镜到底。缺点：镜头运动较为单一。', tag: '一镜到底', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 127, title: 'Runway Gen-3 Alpha', modelId: 'runway-gen3', category: 'video', desc: 'Runway 旗舰模型。优点：好莱坞级别的运镜和光影，极其专业。缺点：生成价格最贵。', tag: '好莱坞级', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 128, title: 'Runway Gen-3 极速版', modelId: 'runway-gen3-turbo', category: 'video', desc: 'Runway Turbo。优点：在保留质感的同时提升了3倍速度。缺点：最大时长只有5秒。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 129, title: 'Runway Gen-2', modelId: 'runway-gen2', category: 'video', desc: 'Runway 经典模型。优点：特定艺术风格表现优异。缺点：清晰度和动作幅度落后于时代。', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 130, title: 'Luma Dream Machine', modelId: 'luma-dream', category: 'video', desc: 'Luma 高性能模型。优点：对现实物理引擎还原极好，极少扭曲。缺点：人物面部容易模糊。', tag: '物理极佳', hot: true, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 131, title: 'Luma 运镜版', modelId: 'luma-camera', category: 'video', desc: 'Luma 专属运镜控制模型。优点：可指定摇、移、推、拉等专业运镜。缺点：学习成本高。', tag: '专业运镜', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
    ]
  },
  { 
    id: 132, title: 'Kuaishou KWVideo V3', modelId: 'kwvideo-v3', category: 'video', desc: '快手最新版大模型。优点：对国内网红风格、短视频风格把控极其精准。缺点：不太适合做正剧/电影。', tag: '短视频风', hot: false, icon: 'Video', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'duration', label: '时长', type: 'select', options: [{v:5,l:'5秒'}, {v:10,l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'9:16',l:'9:16'}, {v:'1:1',l:'1:1'}], default: '16:9' }
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
