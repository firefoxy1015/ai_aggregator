import json

with open(r'C:\Users\Firefoxy\.gemini\antigravity\brain\a89a57cc-07c5-4ea6-a06d-049aa3579bdb\scratch\all_models.json', 'r', encoding='utf-8') as f:
    models = json.load(f)

video_models = [m for m in models if m.get('模型类型') == 'video']

js_content = "  // --- AI 视频 (Video) ---\n"
for idx, m in enumerate(video_models):
    desc = m.get('模型简介', '').replace('\r', '').replace('\n', ' ').replace("'", "\\'")
    tag = '热推' if m.get('成功率', 0) > 90 else ''
    icon_url = m.get('模型图标', '')
    
    js_content += f"""  {{ 
    id: {100 + idx}, title: '{m.get("展示名称")}', modelId: '{m.get("模型名称")}', category: 'video', desc: '{desc}', tag: '{tag}', hot: {str(m.get('成功率', 0) > 90).lower()}, icon: '{icon_url}', 
    channels: [
      {{ id: 'official', name: '💎 官方直连' }},
      {{ id: 'enterprise', name: '🏢 企业级高可用分组' }},
      {{ id: 'kj', name: '⚡ KJ直连' }}
    ],
    configurableParams: [
      {{ name: 'duration', label: '时长', type: 'select', options: [{{v:5,l:'5秒'}}, {{v:10,l:'10秒'}}], default: 5 }},
      {{ name: 'aspect_ratio', label: '比例', type: 'select', options: [{{v:'16:9',l:'16:9'}}, {{v:'9:16',l:'9:16'}}, {{v:'1:1',l:'1:1'}}], default: '16:9' }},
      {{ name: 'quality', label: '画质', type: 'select', options: [{{v:'standard',l:'标准'}}, {{v:'pro',l:'高品质(Pro)'}}, {{v:'turbo',l:'快速(Turbo)'}}], default: 'standard' }},
      {{ name: 'version', label: '版本', type: 'select', options: [{{v:'standard',l:'标准版'}}, {{v:'fast',l:'快速版'}}, {{v:'pro',l:'专业版'}}, {{v:'v2.0',l:'v2.0'}}, {{v:'v3.0',l:'v3.0'}}], default: 'standard' }}"""
      
    if '参考' in m.get('展示名称', ''):
        js_content += """,\n      { name: 'image_start', label: '必填：参考图', type: 'image_upload', max: 9 }"""
    elif '首尾帧' in m.get('展示名称', ''):
        js_content += """,\n      { name: 'image_start', label: '首帧图', type: 'image_upload', max: 1 },\n      { name: 'image_end', label: '尾帧图', type: 'image_upload', max: 1 }"""
    elif '图像' in m.get('展示名称', '') or '图' in m.get('展示名称', '') or '头像' in m.get('展示名称', '') or '数字人' in m.get('展示名称', ''):
        js_content += """,\n      { name: 'image_start', label: '参考图', type: 'image_upload', max: 1 }"""
        
    js_content += """\n    ]\n  }"""
    if idx < len(video_models) - 1:
        js_content += ",\n"
    else:
        js_content += "\n"

with open(r'd:\gravity\ai_aggregator\real_video_models.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
