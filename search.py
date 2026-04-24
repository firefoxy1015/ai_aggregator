import json

with open(r'C:\Users\Firefoxy\.gemini\antigravity\brain\a89a57cc-07c5-4ea6-a06d-049aa3579bdb\scratch\all_models.json', 'r', encoding='utf-8') as f:
    models = json.load(f)

with open(r'd:\gravity\ai_aggregator\out.json', 'w', encoding='utf-8') as f:
    res = {}
    for m in models:
        res[m['展示名称']] = m['模型标识']
    json.dump(res, f, ensure_ascii=False, indent=2)
