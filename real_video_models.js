  // --- AI 视频 (Video) ---
  { 
    id: 100, title: 'grok-video-3-plus', modelId: 'grok-video-3-plus', category: 'video', desc: 'Grok 推出的 Plus 级视频生成模型，支持 10/15/20/25 秒多种时长，覆盖 16:9、9:16、3:2、2:3、1:1 全比例，适合社交媒体和创意短片场景。', tag: '', hot: false, icon: 'https://cos.lingkeai.vip/Grok_bai.svg', 
    channels: [
      { id: 'official', name: '💎 官方直连' },
      { id: 'enterprise', name: '🏢 企业级高可用分组' },
      { id: 'kj', name: '⚡ KJ直连' }
    ],
    configurableParams: [
      { name: 'images', label: '首帧参考图', type: 'image_upload', max: 1 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'10',l:'10秒'}, {v:'15',l:'15秒'}, {v:'20',l:'20秒'}, {v:'25',l:'25秒'}, {v:'30',l:'30秒'}], default: 10 }
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
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'360P',l:'360P'}, {v:'540P',l:'540P'}, {v:'720P',l:'720P'}, {v:'1080P',l:'1080P'}], default: '' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: '' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'横屏 16:9'}, {v:'9:16',l:'竖屏 9:16'}, {v:'1:1',l:'方形 1:1'}, {v:'3:4',l:'竖屏 3:4'}, {v:'4:3',l:'传统 4:3'}, {v:'3:2',l:'横屏 3:2'}, {v:'2:3',l:'竖屏 2:3'}, {v:'21:9',l:'超宽 21:9'}], default: '' },
      { name: 'images', label: '参考图片', type: 'image_upload', max: 1 }
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
      { name: 'version', label: '速度版本', type: 'select', options: [{v:'标准',l:'标准'}, {v:'快速',l:'快速'}], default: '快速' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'auto',l:'自动'}, {v:'4',l:'4秒'}, {v:'5',l:'5秒'}, {v:'6',l:'6秒'}, {v:'7',l:'7秒'}, {v:'8',l:'8秒'}, {v:'9',l:'9秒'}, {v:'10',l:'10秒'}, {v:'11',l:'11秒'}, {v:'12',l:'12秒'}, {v:'13',l:'13秒'}, {v:'14',l:'14秒'}, {v:'15',l:'15秒'}], default: 'auto' },
      { name: 'aspect_ratio', label: '宽高比', type: 'select', options: [{v:'adaptive',l:'自适应'}, {v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}, {v:'21:9',l:'21:9'}], default: 'adaptive' },
      { name: 'resolution', label: '视频分辨率', type: 'select', options: [{v:'480p',l:'480p'}, {v:'720p',l:'720p'}], default: '480p' },
      { name: 'images', label: '参考图片', type: 'image_upload', max: 9 }
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
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'360P',l:'360P'}, {v:'540P',l:'540P'}, {v:'720P',l:'720P'}, {v:'1080P',l:'1080P'}], default: '360P' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 }
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
      { name: 'images', label: '参考图片', type: 'image_upload', max: 7 },
      { name: 'duration', label: '时长', type: 'select', options: [{v:'4',l:'4秒'}, {v:'8',l:'8秒'}, {v:'12',l:'12秒'}, {v:'16',l:'16秒'}], default: 4 }
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
      { name: 'images', label: '参考图片', type: 'image_upload', max: 3 }
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
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'duration', label: '时长', type: 'select', options: [{v:'4',l:'4秒'}, {v:'8',l:'8秒'}, {v:'12',l:'12秒'}, {v:'16',l:'16秒'}], default: 4 }
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
      { name: 'quality', label: '视频画质', type: 'select', options: [{v:'sd',l:'标清'}, {v:'4k',l:'4K'}], default: '标清' },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 }
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
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'360P',l:'360P'}, {v:'540P',l:'540P'}, {v:'720P',l:'720P'}, {v:'1080P',l:'1080P'}], default: '360P' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'aspect_ratio', label: '宽高比', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}, {v:'3:2',l:'3:2'}, {v:'2:3',l:'2:3'}, {v:'21:9',l:'21:9'}], default: '16:9' }
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
      { name: 'images', label: '参考图片', type: 'image_upload', max: 3 }
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
      { name: 'version', label: '速度版本', type: 'select', options: [{v:'标准',l:'标准'}, {v:'快速',l:'快速'}], default: '快速' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'auto',l:'自动'}, {v:'4',l:'4秒'}, {v:'5',l:'5秒'}, {v:'6',l:'6秒'}, {v:'7',l:'7秒'}, {v:'8',l:'8秒'}, {v:'9',l:'9秒'}, {v:'10',l:'10秒'}, {v:'11',l:'11秒'}, {v:'12',l:'12秒'}, {v:'13',l:'13秒'}, {v:'14',l:'14秒'}, {v:'15',l:'15秒'}], default: 'auto' },
      { name: 'aspect_ratio', label: '宽高比', type: 'select', options: [{v:'adaptive',l:'自适应'}, {v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}, {v:'21:9',l:'21:9'}], default: 'adaptive' },
      { name: 'resolution', label: '视频分辨率', type: 'select', options: [{v:'480p',l:'480p'}, {v:'720p',l:'720p'}], default: '480p' },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 1 }
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
      { name: 'reference_urls', label: '参考图片', type: 'image_upload', max: 5 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'2',l:'2秒'}, {v:'4',l:'4秒'}, {v:'6',l:'6秒'}, {v:'8',l:'8秒'}, {v:'10',l:'10秒'}], default: 2 }
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
      { name: 'version', label: '速度版本', type: 'select', options: [{v:'标准',l:'标准'}, {v:'快速',l:'快速'}], default: '快速' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'auto',l:'自动'}, {v:'4',l:'4秒'}, {v:'5',l:'5秒'}, {v:'6',l:'6秒'}, {v:'7',l:'7秒'}, {v:'8',l:'8秒'}, {v:'9',l:'9秒'}, {v:'10',l:'10秒'}, {v:'11',l:'11秒'}, {v:'12',l:'12秒'}, {v:'13',l:'13秒'}, {v:'14',l:'14秒'}, {v:'15',l:'15秒'}], default: 'auto' },
      { name: 'aspect_ratio', label: '宽高比', type: 'select', options: [{v:'adaptive',l:'自适应'}, {v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}, {v:'21:9',l:'21:9'}], default: 'adaptive' },
      { name: 'resolution', label: '视频分辨率', type: 'select', options: [{v:'480p',l:'480p'}, {v:'720p',l:'720p'}], default: '480p' },
      { name: 'image_url', label: '参考图片', type: 'image_upload', max: 9 },
      { name: 'video_url', label: '参考视频', type: 'image_upload', max: 3 },
      { name: 'audio_url', label: '音频文件', type: 'image_upload', max: 3 }
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
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'10',l:'10秒'}, {v:'15',l:'15秒'}], default: 5 },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准'}, {v:'pro',l:'高品质'}], default: 'std' }
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
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'10',l:'10秒'}, {v:'15',l:'15秒'}], default: 5 },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准'}, {v:'pro',l:'高品质'}], default: 'std' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9 横屏'}, {v:'9:16',l:'9:16 竖屏'}, {v:'1:1',l:'1:1 正方形'}], default: '16:9' }
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
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'10',l:'10秒'}], default: 5 },
      { name: 'images', label: '参考图片', type: 'image_upload', max: 4 },
      { name: 'video', label: '参考视频', type: 'image_upload', max: 1 },
      { name: 'refer_type', label: '参考类型', type: 'select', options: [{v:'feature',l:'视频参考'}, {v:'base',l:'编辑视频'}], default: 'feature' },
      { name: 'keep_original_sound', label: '保留原声', type: 'select', options: [{v:'yes',l:'保留原声'}, {v:'no',l:'不保留'}], default: 'yes' },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准'}, {v:'pro',l:'高品质'}], default: 'std' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9 横屏'}, {v:'9:16',l:'9:16 竖屏'}, {v:'1:1',l:'1:1 正方形'}], default: '16:9' }
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
      { name: 'image_url', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'video_url', label: '参考视频', type: 'image_upload', max: 1 },
      { name: 'keep_original_sound', label: '保留原声', type: 'select', options: [{v:'yes',l:'保留原声'}, {v:'no',l:'不保留原声'}], default: 'yes' },
      { name: 'character_orientation', label: '人物朝向', type: 'select', options: [{v:'video',l:'与视频一致'}, {v:'image',l:'与图片一致'}], default: 'video' },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准模式'}, {v:'pro',l:'专家模式'}], default: 'std' }
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
      { name: 'images', label: '参考图片', type: 'image_upload', max: 7 },
      { name: 'duration', label: '时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'10',l:'10秒'}], default: 5 }
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
      { name: 'image_url', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'video_url', label: '参考视频', type: 'image_upload', max: 1 },
      { name: 'keep_original_sound', label: '保留原声', type: 'select', options: [{v:'yes',l:'保留原声'}, {v:'no',l:'不保留原声'}], default: 'yes' },
      { name: 'character_orientation', label: '人物朝向', type: 'select', options: [{v:'video',l:'与视频一致'}, {v:'image',l:'与图片一致'}], default: 'video' },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准模式'}, {v:'pro',l:'专家模式'}], default: 'std' }
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
      { name: 'image_url', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'video_url', label: '参考视频', type: 'image_upload', max: 1 },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'wan-std',l:'标准模式'}, {v:'wan-pro',l:'专业模式'}], default: 'wan-std' }
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
      { name: 'images', label: '参考图片', type: 'image_upload', max: 7 },
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'360P',l:'360P'}, {v:'540P',l:'540P'}, {v:'720P',l:'720P'}, {v:'1080P',l:'1080P'}], default: '540P' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'8',l:'8秒'}, {v:'10',l:'10秒'}], default: 5 },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}], default: '16:9' }
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
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'360P',l:'360P'}, {v:'540P',l:'540P'}, {v:'720P',l:'720P'}, {v:'1080P',l:'1080P'}], default: '540P' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'8',l:'8秒'}, {v:'10',l:'10秒'}], default: 5 },
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'aspect_ratio', label: '宽高比', type: 'select', options: [{v:'16:9',l:'16:9'}, {v:'4:3',l:'4:3'}, {v:'1:1',l:'1:1'}, {v:'3:4',l:'3:4'}, {v:'9:16',l:'9:16'}], default: '16:9' }
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
      { name: 'img_url', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'audio_url', label: '音频文件', type: 'image_upload', max: 1 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 }
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
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'5',l:'5秒'}, {v:'10',l:'10秒'}], default: 5 },
      { name: 'images', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'sound', label: '声音模式', type: 'select', options: [{v:'on',l:'有声'}, {v:'off',l:'无声'}], default: 'on' },
      { name: 'aspect_ratio', label: '画面比例', type: 'select', options: [{v:'16:9',l:'横屏 16:9'}, {v:'9:16',l:'竖屏 9:16'}, {v:'1:1',l:'方形 1:1'}], default: '16:9' }
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
      { name: 'image', label: '参考图片', type: 'image_upload', max: 1 },
      { name: 'sound_file', label: '音频文件', type: 'image_upload', max: 1 },
      { name: 'mode', label: '生成模式', type: 'select', options: [{v:'std',l:'标准模式'}, {v:'pro',l:'专家模式'}], default: 'std' }
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
      { name: 'model_version', label: '模型版本', type: 'select', options: [{v:'2.3',l:'标准版'}, {v:'2.3-fast',l:'极速版'}], default: '2.3-fast' },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'6',l:'6秒'}, {v:'10',l:'10秒'}], default: 6 },
      { name: 'resolution', label: '分辨率', type: 'select', options: [{v:'768P',l:'768P'}, {v:'1080P',l:'1080P'}], default: '768P' },
      { name: 'enhance_prompt', label: '提示词优化', type: 'select', options: [{v:'Enabled',l:'开启优化'}, {v:'Disabled',l:'不优化'}], default: 'Disabled' }
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
      { name: 'reference_urls', label: '参考图片', type: 'image_upload', max: 5 },
      { name: 'reference_video', label: '参考视频', type: 'image_upload', max: 1 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 }
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
      { name: 'clips', label: '视频续写', type: 'image_upload', max: 1 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 }
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
      { name: 'images', label: '首尾帧', type: 'image_upload', max: 2 },
      { name: 'duration', label: '视频时长', type: 'select', options: [{v:'3',l:'3秒'}, {v:'6',l:'6秒'}, {v:'9',l:'9秒'}, {v:'12',l:'12秒'}, {v:'15',l:'15秒'}], default: 3 }
    ]
  }
