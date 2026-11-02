document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langBtn = document.querySelector('.language');
  
  // 初始化语言状态，默认中文
  if (!html.dataset.lang) {
    html.dataset.lang = 'zh';
    html.lang = 'zh-Hans';
  }

  // 切换语言逻辑
  const applyLang = (lang) => {
    html.dataset.lang = lang;
    html.lang = lang === 'zh' ? 'zh-Hans' : 'en';

    // 更新按钮上的文字提示
    langBtn.setAttribute('aria-pressed', String(lang === 'en'));
    langBtn.textContent = lang === 'zh' ? '中文 / EN' : 'EN / 中文';

    // 游戏外链跟随语言：跳到游戏页时直接以对应语言打开
    document.querySelectorAll('a[href*="turtle-race"]').forEach((a) => {
      const url = new URL(a.href);
      url.searchParams.set('lang', lang);
      a.href = url.toString();
    });
  };

  applyLang(html.dataset.lang === 'en' ? 'en' : 'zh');

  langBtn.addEventListener('click', () => {
    applyLang(html.dataset.lang === 'zh' ? 'en' : 'zh');
  });

  // 自动更新页脚年份
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});