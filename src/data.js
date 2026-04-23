export const menuItems = [
  { id: 'all', label: '全部', icon: 'LayoutGrid' },
  { id: 'chat', label: 'AI对话', icon: 'MessageSquare' },
  { id: 'paint', label: 'AI绘画', icon: 'Palette' },
  { id: 'video', label: 'AI视频', icon: 'Video' },
];

export const toolsData = [
  // --- AI 对话 (Chat) ---
  { id: 1, title: 'Claude 3.5 Sonnet', modelId: 'claude-sonnet-4-6', category: 'chat', desc: 'Anthropic最强模型，擅长长文本和代码编写，逻辑严密。', tag: '代码神器', hot: true, icon: 'Code' },
  { id: 2, title: 'Claude 3 Opus', modelId: 'claude-opus-4-7', category: 'chat', desc: 'Anthropic旗舰模型，深度推理。', tag: '最新旗舰', hot: false, icon: 'Bot' },
  { id: 3, title: 'Gemini 1.5 Pro', modelId: 'gemini-3.1-pro-preview', category: 'chat', desc: 'Google原生多模态模型，支持超长上下文。', tag: '超大上下文', hot: true, icon: 'Sparkles' },
  { id: 4, title: 'GPT-4o (GPT-5.4)', modelId: 'gpt-5.4', category: 'chat', desc: 'OpenAI顶级模型，全能型助手。', tag: '官方同步', hot: true, icon: 'Zap' },
  { id: 5, title: 'Grok 1.5', modelId: 'grok-4.2', category: 'chat', desc: 'xAI研发的幽默大模型，无审查，获取实时网络数据。', tag: '实时网络', hot: true, icon: 'Zap' },
  { id: 6, title: '豆包 Seed 2.0', modelId: 'doubao-seed-2-0-pro-260215', category: 'chat', desc: '字节跳动旗舰，支持长文本与高质量生成。', tag: '国产之光', hot: false, icon: 'BookOpen' },

  // --- AI 绘画 (Paint) ---
  { id: 7, title: 'Midjourney v6', modelId: 'mj_imagine', category: 'paint', desc: '全球顶尖AI绘画，艺术感极强。', tag: '设计必看', hot: true, icon: 'Image', defaultParams: { botType: "MID_JOURNEY", aspectRatio: "16:9" } },
  { id: 8, title: 'Grok 1.5 Image', modelId: 'grok-4.2-image', category: 'paint', desc: 'xAI写实生图，极速出图。', tag: '极速', hot: true, icon: 'Aperture', defaultParams: { size: "1080x1920" } },
  { id: 9, title: 'DALL·E 3 (GPT Image)', modelId: 'gpt-image-1.5-all', category: 'paint', desc: '精准遵循复杂提示词，一键生图。', tag: '精准理解', hot: false, icon: 'Brush', defaultParams: { size: "1024x1024" } },

  // --- AI 视频 (Video) ---
  { id: 10, title: 'Sora 2', modelId: 'sora-2', category: 'video', desc: '文字生成高清视频，物理规律逼真。', tag: '即将上线', hot: true, icon: 'Film', defaultParams: { seconds: 5, size: "1080x1920" } },
  { id: 11, title: '可灵 Kling v3', modelId: 'kling-v3-video', category: 'video', desc: '高质量AI视频生成，国产之光。', tag: '国产视频', hot: true, icon: 'Clapperboard', defaultParams: { duration: 5, mode: "standard", aspect_ratio: "16:9" } },
  { id: 12, title: 'Veo 3.1', modelId: 'veo3.1', category: 'video', desc: '自带BGM的视频生成模型。', tag: '带音效', hot: false, icon: 'PlaySquare', defaultParams: { generation_mode: "standard", aspect_ratio: "16:9", enhance_prompt: true } },
  { id: 13, title: '即梦 Seedance', modelId: 'doubao-seedance-1-5-pro-251215', category: 'video', desc: '音画同步极佳的视频模型。', tag: '电影级', hot: true, icon: 'Film', defaultParams: { audio_duration: 5, resolution: "1080p", ratio: "16:9" } },
];
