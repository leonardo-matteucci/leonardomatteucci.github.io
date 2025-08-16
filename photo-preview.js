window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-enlargeable]');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `<span class="image-modal-close" aria-label="Close">&times;</span><img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(modal);

      const remove = () => modal.remove();
      modal.addEventListener('click', e => {
        if (e.target === modal || e.target.classList.contains('image-modal-close')) {
          remove();
        }
      });
      document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
          remove();
          document.removeEventListener('keydown', handler);
        }
      });
    });
  });
});
