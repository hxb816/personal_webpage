document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langBtn = document.querySelector('.language');
  
  // 初始化语言状态，默认中文
  if (!html.dataset.lang) {
    html.dataset.lang = 'zh';
    html.lang = 'zh-Hans';
  }

  // 切换语言逻辑
  langBtn.addEventListener('click', () => {
    const nextLang = html.dataset.lang === 'zh' ? 'en' : 'zh';
    html.dataset.lang = nextLang;
    html.lang = nextLang === 'zh' ? 'zh-Hans' : 'en';
    
    // 更新按钮上的文字提示
    langBtn.setAttribute('aria-pressed', String(nextLang === 'en'));
    langBtn.textContent = nextLang === 'zh' ? '中文 / EN' : 'EN / 中文';
  });

  // 自动更新页脚年份
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});