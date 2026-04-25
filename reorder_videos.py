import re

with open(r'd:\gravity\ai_aggregator\src\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the video section
video_start = content.index('// --- AI 视频 (Video) ---')
audio_start = content.index('// --- AI 音频 (Audio) ---')

before = content[:video_start]
video_section = content[video_start:audio_start]
after = content[audio_start:]

# Split into individual model blocks
header = '// --- AI 视频 (Video) ---\r\n'
body = video_section[len(header):]

# Split by model block pattern
blocks = re.split(r'(?=  \{ \r?\n)', body)
blocks = [b for b in blocks if b.strip()]

def get_provider(block):
    if 'grok-video' in block: return 'grok'
    if 'veo3' in block: return 'veo'
    if 'kling-' in block or "kling-v" in block: return 'kling'
    if 'kwvideo' in block: return 'sd'
    if 'pixverse' in block: return 'pix'
    if 'vidu' in block: return 'vidu'
    if 'wan2' in block: return 'wan'
    if 'hailuo' in block: return 'hailuo'
    return 'other'

# Group by provider
groups = {}
for b in blocks:
    p = get_provider(b)
    groups.setdefault(p, []).append(b)

# Desired order: grok, veo, kling, sd, then rest
order = ['grok', 'veo', 'kling', 'sd', 'pix', 'vidu', 'wan', 'hailuo', 'other']
sorted_blocks = []
for o in order:
    if o in groups:
        sorted_blocks.extend(groups[o])

# Rebuild
new_video = header + ''.join(sorted_blocks)
new_content = before + new_video + after

with open(r'd:\gravity\ai_aggregator\src\data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

# Print new order
for i, b in enumerate(sorted_blocks):
    m = re.search(r"title: '([^']+)'", b)
    title = m.group(1) if m else '???'
    print(f'{i+1}. [{get_provider(b)}] {title}')

print('\nDone! Reordered video models.')
