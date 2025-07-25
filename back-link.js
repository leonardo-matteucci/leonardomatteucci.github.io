window.addEventListener('DOMContentLoaded', () => {
  const backLink = document.querySelector('.back-link');
  if (!backLink) return;
  const ref = document.referrer;
  if (!ref) return;
  try {
    const refUrl = new URL(ref);
    if (refUrl.origin === window.location.origin) {
      const path = refUrl.pathname;
      if (path.startsWith('/events/')) {
        backLink.setAttribute('href', '/events/');
      } else if (path.startsWith('/projects/')) {
        backLink.setAttribute('href', '/projects/');
      } else if (path.startsWith('/works/')) {
        backLink.setAttribute('href', '/works/');
      }
    }
  } catch (e) {
    console.error('Error parsing referrer', e);
  }
});
