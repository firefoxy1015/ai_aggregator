export const menuItems = [
  { id: 'all', label: '全部', icon: 'LayoutGrid' },
  { id: 'chat', label: 'AI对话', icon: 'MessageSquare' },
  { id: 'paint', label: 'AI绘画', icon: 'Palette' },
  { id: 'video', label: 'AI视频', icon: 'Video' },
  { id: 'agent', label: 'AI智能体', icon: 'Bot' },
];

export const toolsData = [
  {
    id: 1,
    title: 'ChatGPT-4o',
    category: 'chat',
    desc: 'OpenAI最新旗舰模型，支持多模态交互，速度极快。',
    tag: '官方同步',
    hot: true,
    icon: 'Bot'
  },
  {
    id: 2,
    title: 'Claude 3.5 Sonnet',
    category: 'chat',
    desc: 'Anthropic最强模型，擅长长文本和代码编写，逻辑严密。',
    tag: '代码神器',
    hot: true,
    icon: 'Code'
  },
  {
    id: 3,
    title: 'Gemini 1.5 Pro',
    category: 'chat',
    desc: 'Google推出的原生多模态模型，支持超长上下文。',
    tag: '超大上下文',
    hot: false,
    icon: 'Sparkles'
  },
  {
    id: 4,
    title: 'Midjourney v6',
    category: 'paint',
    desc: '全球最顶尖的AI绘画工具，画质逼真，艺术感极强。',
    tag: '设计必看',
    hot: true,
    icon: 'Image'
  },
  {
    id: 5,
    title: 'Flux.1',
    category: 'paint',
    desc: '全新一代开源文生图模型，指令遵循极强，真实感惊人。',
    tag: '新星',
    hot: true,
    icon: 'Aperture'
  },
  {
    id: 6,
    title: 'DALL·E 3',
    category: 'paint',
    desc: 'OpenAI的图像生成模型，能完美理解复杂提示词。',
    tag: '精准理解',
    hot: false,
    icon: 'Brush'
  },
  {
    id: 7,
    title: 'Sora (Waitlist)',
    category: 'video',
    desc: 'OpenAI推出的文字生成视频模型，物理规律极其逼真。',
    tag: '即将上线',
    hot: true,
    icon: 'Film'
  },
  {
    id: 8,
    title: '可灵 Kling',
    category: 'video',
    desc: '快手推出的高质量AI视频生成工具，支持超长视频。',
    tag: '国产之光',
    hot: true,
    icon: 'Clapperboard'
  },
  {
    id: 9,
    title: 'Vidu',
    category: 'video',
    desc: '生数科技推出的视频大模型，一键生成高清动态视频。',
    tag: '快速生图',
    hot: false,
    icon: 'PlaySquare'
  },
  {
    id: 10,
    title: 'AI漫剧助手',
    category: 'agent',
    desc: '一键生成小说推文漫剧，包含分镜、生图和配音。',
    tag: '爆款必备',
    hot: true,
    icon: 'BookOpen'
  },
  {
    id: 11,
    title: '电商一键生图',
    category: 'agent',
    desc: '上传商品图，一键替换背景，生成高转化率商品图。',
    tag: '效率工具',
    hot: false,
    icon: 'ShoppingBag'
  },
  {
    id: 12,
    title: '小红书文案专家',
    category: 'agent',
    desc: '自动生成带Emoji的爆款小红书风格文案。',
    tag: '运营',
    hot: false,
    icon: 'PenTool'
  }
];
