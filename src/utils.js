let hasPromptedThisSession = false;

export const getApiKey = (silent = false) => {
  let key = localStorage.getItem('NEXUS_API_KEY');
  // Fallback to env key if present for local dev
  if (!key && import.meta.env.VITE_DATA999_KEY) {
    key = import.meta.env.VITE_DATA999_KEY;
    localStorage.setItem('NEXUS_API_KEY', key);
  }

  if (!key && !silent && !hasPromptedThisSession) {
    hasPromptedThisSession = true;
    key = window.prompt("为保障您的余额安全，本站不再内置公开 API Key。\n请输入您自己的 Data999 API Key (sk-...) 以继续使用：");
    if (key && key.trim()) {
      localStorage.setItem('NEXUS_API_KEY', key.trim());
      hasPromptedThisSession = false; // reset on success
    } else {
      throw new Error("操作已取消：未配置 API Key");
    }
  } else if (!key) {
    throw new Error("操作已取消：未配置 API Key");
  }
  return key;
};
