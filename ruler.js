window.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.className = 'ruler-toggle';
  button.textContent = 'Ruler';
  document.body.appendChild(button);

  const overlay = document.createElement('div');
  overlay.className = 'baseline-ruler-overlay';
  document.body.appendChild(overlay);

  button.addEventListener('click', () => {
    document.body.classList.toggle('ruler-active');
  });
});
