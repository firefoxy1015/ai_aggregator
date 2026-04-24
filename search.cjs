const fs = require('fs');
const models = JSON.parse(fs.readFileSync('C:\\Users\\Firefoxy\\.gemini\\antigravity\\brain\\a89a57cc-07c5-4ea6-a06d-049aa3579bdb\\scratch\\all_models.json', 'utf-8'));
models.forEach(m => {
  console.log(`${m['展示名称']} -> ${m['模型标识']}`);
});
