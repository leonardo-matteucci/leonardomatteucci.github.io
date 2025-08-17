window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (!menuToggle) return;

  let scrollPosition = 0;
  const updateScrollLock = () => {
    if (menuToggle.checked) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollPosition);
    }
  };

  menuToggle.addEventListener('change', updateScrollLock);

  document.addEventListener('click', (e) => {
    if (!menuToggle.checked) return;
    const header = document.querySelector('header');
    if (!header.contains(e.target)) {
      menuToggle.checked = false;
      updateScrollLock();
    }
  });
  updateScrollLock();
});
