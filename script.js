const year = document.querySelector('#year');
const languageButton = document.querySelector('.language');

year.textContent = new Date().getFullYear();
languageButton.addEventListener('click', () => {
  document.body.classList.toggle('english');
  const isEnglish = document.body.classList.contains('english');
  document.documentElement.lang = isEnglish ? 'en' : 'zh-Hans';
  languageButton.textContent = isEnglish ? 'EN / 中文' : '中文 / EN';
});
