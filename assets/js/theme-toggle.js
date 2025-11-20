(function(){
  const THEME_KEY = 'n85uk-theme';
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function applyTheme(theme){
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.setAttribute('aria-pressed', 'true');
      toggle.textContent = 'Light';
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed', 'false');
      toggle.textContent = 'Dark';
    }
  }

  function readPreference(){
    return localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  const initial = readPreference();
  applyTheme(initial);

  toggle.addEventListener('click', function(){
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
})();
