window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (!menuToggle) return;

  const updateScrollLock = () => {
    document.body.style.overflow = menuToggle.checked ? 'hidden' : '';
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
