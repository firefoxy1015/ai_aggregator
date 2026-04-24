import json

with open(r'd:\gravity\ai_aggregator\real_video_models.js', 'r', encoding='utf-8') as f:
    video_js = f.read().strip()

with open(r'd:\gravity\ai_aggregator\src\data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

# find the sections
start_idx = data_js.find("--- AI 视频 (Video) ---")
end_idx = data_js.find("--- AI 音频 (Audio) ---")

if start_idx != -1 and end_idx != -1:
    # go back to the '// ' before the marker
    start_idx = data_js.rfind("//", 0, start_idx)
    end_idx = data_js.rfind("//", 0, end_idx)
    
    new_data_js = data_js[:start_idx] + video_js + ",\n\n  " + data_js[end_idx:]
    with open(r'd:\gravity\ai_aggregator\src\data.js', 'w', encoding='utf-8') as f:
        f.write(new_data_js)
    print("Patched successfully!")
else:
    print(f"Markers not found! start_idx={start_idx}, end_idx={end_idx}")
