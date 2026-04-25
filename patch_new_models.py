import re

with open(r'd:\gravity\ai_aggregator\src\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# === 1. Add new chat models after the existing Grok chat entry (line with grok-4.2) ===
grok_chat_line = "  { id: 15, title: 'Grok 1.5 / 4.2', modelId: 'grok-4.2', category: 'chat', desc: 'xAI研发的无审查模型，实时联网数据。', tag: '无审查', hot: true, icon: 'Twitter', configurableParams: chatParams },"

new_chat_models = """  { id: 15, title: 'Grok 4.2', modelId: 'grok-4-2', category: 'chat', desc: 'xAI最新旗舰，超强推理与实时联网。', tag: '无审查', hot: true, icon: 'Twitter', configurableParams: chatParams },
  { id: 201, title: 'Grok 4', modelId: 'grok-4', category: 'chat', desc: 'xAI强力大模型，无审查实时联网。', hot: false, icon: 'Twitter', configurableParams: chatParams },
  { id: 202, title: 'Grok 4.1 Auto', modelId: 'grok-4-1-auto', category: 'chat', desc: 'xAI智能路由模型，自动选择最佳推理策略。', hot: false, icon: 'Twitter', configurableParams: chatParams },
  { id: 203, title: 'DeepSeek R1', modelId: 'deepseek-r1', category: 'chat', desc: '深度求索推理模型，超强逻辑思考。', tag: '深度思考', hot: true, icon: 'BrainCircuit', configurableParams: chatParams },
  { id: 204, title: 'DeepSeek V3.2', modelId: 'deepseek-v3.2', category: 'chat', desc: '深度求索最新旗舰，全能高效。', hot: false, icon: 'Globe', configurableParams: chatParams },
  { id: 205, title: 'GLM-5', modelId: 'glm-5', category: 'chat', desc: '智谱最新旗舰模型。', hot: false, icon: 'Globe', configurableParams: chatParams },
  { id: 206, title: 'Kimi K2.5', modelId: 'kimi-k2.5', category: 'chat', desc: '月之暗面长上下文旗舰。', hot: false, icon: 'Globe', configurableParams: chatParams },"""

content = content.replace(grok_chat_line, new_chat_models)

# === 2. Add Grok 4.1 Image to paint section (after existing grok images) ===
# The grok-4.1-image already exists as id:42, and grok-4.2-image as id:19 - these use our proxy
# The deepwl versions use different model IDs (grok-4-1-image, grok-4-2-image)
# We already have them, they just use different IDs. Skip adding duplicates.

# === 3. Add Sora 2 to video section ===
# sora-2 needs multipart, skip for now

# === 4. Update Workspace.jsx ALT_MODELS - will do separately ===

with open(r'd:\gravity\ai_aggregator\src\data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Added new chat models.")

# Verify
count = content.count("category: 'chat'")
print(f"Total chat models: {count}")
