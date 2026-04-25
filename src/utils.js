let hasPromptedThisSession = false;

export const getApiKey = (silent = false) => {
  let key = localStorage.getItem('NEXUS_API_KEY');

  if (!key && !silent && !hasPromptedThisSession) {
    hasPromptedThisSession = true;
    let input = window.prompt("网站已开启访问保护。\n请输入通关密语 (或直接输入您的专属 API Key)：");
    if (input && input.trim()) {
      input = input.trim();
      if (input === 'firefoxy') {
         const b64 = 'FQJfVlENSE9WChZSUVcdHFZeRwQFXEtBXg8XUVReG08CD0MGBVxOTgBcS1RUXEBIX1wR';
         const decoded_chars = atob(b64);
         let decrypted = '';
         for (let i = 0; i < decoded_chars.length; i++) {
             decrypted += String.fromCharCode(decoded_chars.charCodeAt(i) ^ input.charCodeAt(i % input.length));
         }
         key = decrypted;
      } else {
         key = input;
      }
      localStorage.setItem('NEXUS_API_KEY', key);
      hasPromptedThisSession = false; // reset on success
    } else {
      throw new Error("操作已取消：未配置 API Key 或密语");
    }
  } else if (!key) {
    throw new Error("操作已取消：未配置 API Key 或密语");
  }
  return key;
};
