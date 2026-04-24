import requests
import json

url = "https://ai-studio-swo7.onrender.com/api/proxy"
payload = {"endpoint": "/moxing/moxingxiangqing", "payload": {"model": "kling-v2-5-turbo"}}
res = requests.post(url, json=payload)
data = res.json()

print(json.dumps(data, ensure_ascii=False, indent=2))
