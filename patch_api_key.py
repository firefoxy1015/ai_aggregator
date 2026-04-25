import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Import getApiKey
    if 'import { getApiKey }' not in content:
        lines = content.split('\n')
        last_import = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import = i
        lines.insert(last_import + 1, "import { getApiKey } from './utils';")
        content = '\n'.join(lines)

    # Replace usages
    content = content.replace("${import.meta.env.VITE_DATA999_KEY}", "${getApiKey()}")
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/Workspace.jsx')
update_file('src/Gallery.jsx')
print('Patched API Keys')
