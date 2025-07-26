window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  const anchors = document.querySelectorAll('a[href]');
  anchors.forEach(a => {
    const href = a.getAttribute('href');
    const target = a.getAttribute('target');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || target === '_blank') {
      return;
    }
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }
    a.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = a.href;
      }, 100);
    });
  });
});
