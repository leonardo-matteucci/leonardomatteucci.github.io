window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    document.addEventListener('click', (e) => {
      if (!menuToggle.checked) return;
      const header = document.querySelector('header');
      if (header && !header.contains(e.target)) {
        menuToggle.checked = false;
      }
    });
  }

  const headerContainer = document.querySelector('header .container');
  if (!headerContainer) return;

  const themeButton = document.createElement('button');
  themeButton.className = 'theme-toggle';
  themeButton.setAttribute('aria-label', 'Toggle theme');

  const setTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeButton.textContent = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeButton.textContent = '☀️';
    }
  };

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  } else {
    setTheme('dark');
  }

  themeButton.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  const menuIcon = headerContainer.querySelector('.menu-icon');
  headerContainer.insertBefore(themeButton, menuIcon);
});

