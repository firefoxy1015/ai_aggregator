# 📋 Nexus AI 模型来源总览

> 所有模型的数据均通过 **Data999 API 代理** 调用，前端经 `ai-studio-swo7.onrender.com` 中转。  
> 图标资源托管在 `cos.lingkeai.vip`（凌客AI CDN）。

---

## 🏢 供应商统计

| 供应商 | 官网 | 模型数量 | 涵盖类别 |
|--------|------|----------|----------|
| **Anthropic** | https://anthropic.com | 5 | Chat |
| **OpenAI** | https://openai.com | 8 | Chat + Paint |
| **Google DeepMind** | https://deepmind.google | 7 | Chat + Paint + Video |
| **xAI (Elon Musk)** | https://x.ai | 4 | Chat + Paint + Video |
| **快手 / 可灵 (Kling)** | https://klingai.com | 12 | Paint + Video |
| **字节跳动 / 即梦 (Doubao)** | https://jimeng.jianying.com | 7 | Chat + Paint + Video |
| **阿里云 / 通义万相** | https://tongyi.aliyun.com | 10 | Chat + Paint + Video |
| **Vidu (生数科技)** | https://www.vidu.com | 3 | Video |
| **PixVerse** | https://pixverse.ai | 5 | Video |
| **MiniMax / 海螺** | https://www.minimax.chat | 3 | Chat + Video + Audio |
| **Midjourney** | https://midjourney.com | 1 | Paint |

---

## 💬 AI 对话 (Chat) — 18 个模型

所有对话模型走 `/api/chat` 端点，**不带** `source` 参数。

| ID | 前端标题 | `modelId` | 供应商 | 官方产品页 |
|----|----------|-----------|--------|------------|
| 1 | Claude 3.5 Sonnet | `claude-sonnet-4-6` | Anthropic | https://anthropic.com/claude |
| 2 | Claude 3.5 Opus | `claude-opus-4-7` | Anthropic | https://anthropic.com/claude |
| 3 | Claude 3 Opus (上代) | `claude-opus-4-6` | Anthropic | https://anthropic.com/claude |
| 4 | Claude 3.5 Haiku | `claude-haiku-4-5-20251001` | Anthropic | https://anthropic.com/claude |
| 5 | Claude 3.5 Sonnet (上代) | `claude-opus-4-5-20251101` | Anthropic | https://anthropic.com/claude |
| 6 | GPT-5.4 | `gpt-5.4` | OpenAI | https://openai.com/gpt-5 |
| 7 | GPT-5.4 深度推理 | `gpt-5.4-xhigh` | OpenAI | https://openai.com/gpt-5 |
| 8 | GPT-5.4 Mini | `gpt-5.4-mini` | OpenAI | https://openai.com/gpt-5 |
| 9 | GPT-5.4 Nano | `gpt-5.4-nano` | OpenAI | https://openai.com/gpt-5 |
| 10 | GPT-5.2 | `gpt-5.2-chat-latest` | OpenAI | https://openai.com/gpt-5 |
| 11 | Gemini 3.1 Pro | `gemini-3.1-pro-preview` | Google | https://ai.google.dev |
| 12 | Gemini 3 Pro | `gemini-3-pro-preview` | Google | https://ai.google.dev |
| 13 | Gemini 3.1 Flash Lite | `gemini-3.1-flash-lite-preview` | Google | https://ai.google.dev |
| 14 | Gemini 3 Flash | `gemini-3-flash-preview` | Google | https://ai.google.dev |
| 15 | Grok 1.5 / 4.2 | `grok-4.2` | xAI | https://x.ai/grok |
| 16 | 豆包 Seed 2.0 Pro | `doubao-seed-2-0-pro-260215` | 字节跳动 | https://www.doubao.com |
| 17 | 千问 3.6 Plus | `qwen3.6-plus` | 阿里云 | https://tongyi.aliyun.com |
| 18 | MiniMax M2.7 | `MiniMax-M2.7` | MiniMax | https://www.minimax.chat |

---

## 🎨 AI 绘画 (Paint) — 16 个模型

所有绘画模型走 `/api/generate` 端点，带 `source: 'data999'`。

| ID | 前端标题 | `modelId` | 供应商 | 图标来源 |
|----|----------|-----------|--------|----------|
| 19 | Grok 4.2 Image | `grok-4.2-image` | xAI | 内置 lucide |
| 42 | Grok 4.1 Image | `grok-4.1-image` | xAI | 内置 lucide |
| 20 | 可灵 Kling Image O1 | `kling-image-o1` | 快手 | 内置 lucide |
| 21 | 可灵 Kling v3 Omni | `kling-v3-omni` | 快手 | 内置 lucide |
| 43 | 可灵 Kling v3 | `kling-v3` | 快手 | 内置 lucide |
| 44 | 可灵 动态头像 | `kling-avatar-image2video` | 快手 | 内置 lucide |
| 22 | 即梦 Seedream 5.0 | `doubao-seedream-5-0-260128` | 字节跳动 | 内置 lucide |
| 45 | 即梦 Seedream 4.5 | `doubao-seedream-4-5-251128` | 字节跳动 | 内置 lucide |
| 23 | Nano Banana Pro | `gemini-3-pro-image-preview` | Google | 内置 lucide |
| 24 | Nano Banana 2 | `gemini-3.1-flash-image-preview` | Google | 内置 lucide |
| 25 | GPT Image 1.5 (DALL-E 3) | `gpt-image-1.5-all` | OpenAI | 内置 lucide |
| 26 | GPT Image 2.0 | `gpt-image-2-all` | OpenAI | 内置 lucide |
| 46 | GPT Image 2 官转 | `gpt-image-2-guan` | OpenAI | 内置 lucide |
| 47 | 千问 Image Max | `qwen-image` | 阿里云 | 内置 lucide |
| 27 | Midjourney v6 | `mj_imagine` | Midjourney | 内置 lucide |
| 28 | Wan 2.7 Image | `wan2.7-image` | 阿里云 | 内置 lucide |
| 48 | Wan 2.6 Image | `wan2.6-image` | 阿里云 | 内置 lucide |

---

## 🎬 AI 视频 (Video) — 29 个模型

所有视频模型走 `/api/generate` 端点，带 `source: 'data999'`。  
图标均来自凌客AI CDN (`cos.lingkeai.vip`)。

| ID | 前端标题 | `modelId` | 供应商 | 图标 URL |
|----|----------|-----------|--------|----------|
| 100 | grok-video-3-plus | `grok-video-3-plus` | xAI | `cos.lingkeai.vip/Grok_bai.svg` |
| 101 | Pix C1 参考生 | `pixverse-c1-cankaosheng` | PixVerse | `cos.lingkeai.vip/PixVerse.svg` |
| 102 | SD 2.0 参考生 | `kwvideo-v2-ref` | 字节跳动 (即梦) | `cos.lingkeai.vip/doubao.svg` |
| 103 | Pix C1 首尾帧 | `pixverse-c1-shouweizhen` | PixVerse | `cos.lingkeai.vip/PixVerse.svg` |
| 104 | Vidu Q3 参考生 | `viduq3-cankaosheng` | 生数科技 (Vidu) | `cos.lingkeai.vip/vidu-icon.svg` |
| 105 | veo3.1 | `veo3.1` | Google | `cos.lingkeai.vip/gemini.svg` |
| 106 | Vidu Q3 | `viduq3` | 生数科技 (Vidu) | `cos.lingkeai.vip/vidu-icon.svg` |
| 107 | veo3.1-lite | `veo3.1-lite` | Google | `cos.lingkeai.vip/gemini.svg` |
| 108 | Pix V6 首尾帧 | `pixverse-v6-shouweizhen` | PixVerse | `cos.lingkeai.vip/PixVerse.svg` |
| 109 | veo3.1-4K高清 | `veo3.1-4k` | Google | `cos.lingkeai.vip/gemini.svg` |
| 110 | SD 2.0 首尾帧 | `kwvideo-v2` | 字节跳动 (即梦) | `cos.lingkeai.vip/doubao.svg` |
| 111 | 万相 2.6 参考生 | `wan2.6-cankaosheng` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |
| 112 | SD 2.0 全能参考 | `kwvideo-v2-quannengcankao` | 字节跳动 (即梦) | `cos.lingkeai.vip/doubao.svg` |
| 113 | 可灵-Omni 首尾帧 | `kling-v3-omni-shouweizhen` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 114 | 可灵-V3-video | `kling-v3-video` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 115 | 可灵-Omni 视频参考 | `kling-v3-omni-videoref` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 116 | 可灵-动作控制 V3 | `kling-motion-control-v3` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 117 | Vidu Q2 参考生 | `viduq2-cankaosheng` | 生数科技 (Vidu) | `cos.lingkeai.vip/vidu-icon.svg` |
| 118 | 可灵-动作控制 | `kling-motion-control` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 119 | 万相-视频换人 | `wan2.2-animate-mix` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |
| 120 | Pix V5.6 参考生 | `pixverse-v5.6-r2v` | PixVerse | `cos.lingkeai.vip/PixVerse.svg` |
| 121 | Pix V5.6 首尾帧 | `pixverse-v5.6-shouweizhen` | PixVerse | `cos.lingkeai.vip/PixVerse.svg` |
| 122 | 万相 2.6 首帧 | `wan2.6-shouzheng` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |
| 123 | 可灵 2.6 Pro | `kling-v2-6` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 124 | 可灵-数字人 | `kling-avatar-image2video` | 快手 | `cos.lingkeai.vip/kling.svg` |
| 125 | 海螺 2.3 | `hailuo-2.3` | MiniMax | `cos.lingkeai.vip/minimax.svg` |
| 126 | 万相 2.7 参考生 | `wan2.7-cankaosheng` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |
| 127 | 万相 2.7 视频续写 | `wan2.7-xuxie` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |
| 128 | 万相 2.7 首尾帧 | `wan2.7-shouweizhen` | 阿里云 | `cos.lingkeai.vip/qwen.svg` |

---

## 🎵 AI 音频 (Audio) — 3 个模型

| ID | 前端标题 | `modelId` | 供应商 | 官方产品页 |
|----|----------|-----------|--------|------------|
| 38 | 海螺音乐 2.5+ | `music-2.5+` | MiniMax | https://www.minimax.chat |
| 39 | 海螺语音克隆 2.8 | `speech-2.8` | MiniMax | https://www.minimax.chat |
| 40 | 豆包 TTS 2.0 | `doubao-tts-2.0` | 字节跳动 | https://www.doubao.com |

---

## 🔗 API 路由规则

```
对话模型 (chat):    POST /api/chat     → 不带 source（代理自动路由）
绘画模型 (paint):   POST /api/generate  → source: 'data999'
视频模型 (video):   POST /api/generate  → source: 'data999'
音频模型 (audio):   POST /api/generate  → source: 'data999'
任务轮询:           GET  /api/status/:taskId
图片上传:           POST /api/upload
```

> [!NOTE]
> `claude-sonnet-4-6` 和 `doubao-seed-2-0-pro-260215` 是经实测确认可用的对话模型。  
> 其他对话模型（如 `gpt-5.4`, `qwen3.6-plus` 等）在代理层返回"暂不支持"，可能需要管理员启用。
