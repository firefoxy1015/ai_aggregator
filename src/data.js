export const menuItems = [
  { id: 'all', label: '全部', icon: 'LayoutGrid' },
  { id: 'chat', label: 'AI对话', icon: 'MessageSquare' },
  { id: 'paint', label: 'AI绘画', icon: 'Palette' },
  { id: 'video', label: 'AI视频', icon: 'Video' },
  { id: 'agent', label: 'AI智能体', icon: 'Bot' },
];

export const toolsData = [
  // --- AI 对话 (Chat) ---
  { id: 1, title: 'ChatGPT-4o', category: 'chat', desc: 'OpenAI最新旗舰模型，支持多模态交互，速度极快。', tag: '官方同步', hot: true, icon: 'Bot', url: 'https://chat.openai.com' },
  { id: 2, title: 'Claude 3.5 Sonnet', category: 'chat', desc: 'Anthropic最强模型，擅长长文本和代码编写，逻辑严密。', tag: '代码神器', hot: true, icon: 'Code', url: 'https://claude.ai' },
  { id: 3, title: 'Gemini 1.5 Pro', category: 'chat', desc: 'Google推出的原生多模态模型，支持超长上下文。', tag: '超大上下文', hot: false, icon: 'Sparkles', url: 'https://gemini.google.com' },
  { id: 13, title: 'DeepSeek-V2', category: 'chat', desc: '深度求索推出的超高性价比模型，代码与数学能力顶尖。', tag: '国产之光', hot: true, icon: 'Zap' },
  { id: 14, title: 'Kimi (Moonshot)', category: 'chat', desc: '月之暗面推出的长文本模型，支持200万字超长输入。', tag: '长文本', hot: true, icon: 'BookOpen' },
  { id: 15, title: '文心一言 4.0', category: 'chat', desc: '百度推出的新一代大语言模型，全面升级各项能力。', tag: '中文最强', hot: false, icon: 'MessageSquare' },
  { id: 16, title: '通义千问 Max', category: 'chat', desc: '阿里云顶尖模型，多模态和复杂指令遵循极佳。', tag: '企业首选', hot: false, icon: 'Bot' },
  { id: 17, title: 'Grok-1.5', category: 'chat', desc: 'xAI研发的幽默大模型，无审查，获取实时推特数据。', tag: '实时网络', hot: true, icon: 'Zap' },

  // --- AI 绘画 (Paint) ---
  { id: 4, title: 'Midjourney v6', category: 'paint', desc: '全球最顶尖的AI绘画工具，画质逼真，艺术感极强。', tag: '设计必看', hot: true, icon: 'Image' },
  { id: 5, title: 'Flux.1', category: 'paint', desc: '全新一代开源文生图模型，指令遵循极强，真实感惊人。', tag: '新星', hot: true, icon: 'Aperture' },
  { id: 6, title: 'DALL·E 3', category: 'paint', desc: 'OpenAI的图像生成模型，能完美理解复杂提示词。', tag: '精准理解', hot: false, icon: 'Brush' },
  { id: 18, title: 'Stable Diffusion 3', category: 'paint', desc: 'Stability AI最新开源模型，文本生成与细节处理极佳。', tag: '开源之王', hot: true, icon: 'Palette' },
  { id: 19, title: 'Niji Journey v6', category: 'paint', desc: '专为二次元动漫风格优化的绘画大模型。', tag: '二次元', hot: true, icon: 'Image' },
  { id: 20, title: 'Leonardo.AI', category: 'paint', desc: '专注于游戏资产与精美艺术生成的集成平台。', tag: '资产生成', hot: false, icon: 'Aperture' },

  // --- AI 视频 (Video) ---
  { id: 7, title: 'Sora (Waitlist)', category: 'video', desc: 'OpenAI推出的文字生成视频模型，物理规律极其逼真。', tag: '即将上线', hot: true, icon: 'Film' },
  { id: 8, title: '可灵 Kling', category: 'video', desc: '快手推出的高质量AI视频生成工具，支持超长视频。', tag: '国产视频', hot: true, icon: 'Clapperboard' },
  { id: 9, title: 'Vidu', category: 'video', desc: '生数科技推出的视频大模型，一键生成高清动态视频。', tag: '快速生成', hot: false, icon: 'PlaySquare' },
  { id: 21, title: 'Runway Gen-3', category: 'video', desc: '顶尖视频生成模型，极高的时间一致性与电影级画质。', tag: '电影级', hot: true, icon: 'Film' },
  { id: 22, title: 'Pika 1.0', category: 'video', desc: '强大的AI动画与视频生成工具，支持局部重绘视频。', tag: '动画神器', hot: false, icon: 'PlaySquare' },
  { id: 23, title: 'Luma Dream Machine', category: 'video', desc: '极速生成高质量视频的下一代AI大模型。', tag: '极速生成', hot: true, icon: 'Clapperboard' },

  // --- AI 智能体 (Agent) ---
  { id: 10, title: 'AI漫剧助手', category: 'agent', desc: '一键生成小说推文漫剧，包含分镜、生图和配音。', tag: '爆款必备', hot: true, icon: 'BookOpen' },
  { id: 11, title: '电商一键生图', category: 'agent', desc: '上传商品图，一键替换背景，生成高转化率商品图。', tag: '效率工具', hot: false, icon: 'ShoppingBag' },
  { id: 12, title: '小红书文案专家', category: 'agent', desc: '自动生成带Emoji的爆款小红书风格文案。', tag: '运营', hot: false, icon: 'PenTool' },
  { id: 24, title: 'SEO爆文写手', category: 'agent', desc: '基于关键词自动生成符合搜索引擎排名的长篇文章。', tag: 'SEO优化', hot: false, icon: 'PenTool' },
  { id: 25, title: '专业代码审查员', category: 'agent', desc: '上传代码，自动进行漏洞扫描、重构建议和单元测试。', tag: '开发辅助', hot: true, icon: 'Code' },
  { id: 26, title: '数字人短视频', category: 'agent', desc: '输入文案，一键生成逼真数字人播报短视频。', tag: '数字人', hot: true, icon: 'Bot' }
];
