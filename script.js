const html = document.documentElement;
const langBtn = document.querySelector('.language');

langBtn.addEventListener('click', () => {
  const next = html.dataset.lang === 'zh' ? 'en' : 'zh';
  html.dataset.lang = next;
  html.lang = next === 'zh' ? 'zh-Hans' : 'en';
  langBtn.setAttribute('aria-pressed', String(next === 'en'));
  langBtn.textContent = next === 'zh' ? '中文 / EN' : 'EN / 中文';
});

document.getElementById('year').textContent = new Date().getFullYear();