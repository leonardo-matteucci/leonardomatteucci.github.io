window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (!menuToggle) return;

  const isDesktop = window.matchMedia('(min-width: 601px)').matches;

  if (isDesktop) {
    menuToggle.checked = true;
  } else {
    document.addEventListener('click', (e) => {
      if (!menuToggle.checked) return;
      const header = document.querySelector('header');
      if (!header.contains(e.target)) {
        menuToggle.checked = false;
      }
    });
  }
});
