window.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.className = 'ruler-toggle';
  button.textContent = 'Ruler';
  document.body.appendChild(button);

  const overlay = document.createElement('div');
  overlay.className = 'baseline-ruler-overlay';
  const line = document.createElement('div');
  line.className = 'baseline-ruler-line';
  overlay.appendChild(line);
  document.body.appendChild(overlay);

  const savedPos = localStorage.getItem('rulerPosition');
  if (savedPos !== null) {
    line.style.top = `${savedPos}px`;
  }

  if (localStorage.getItem('rulerActive') === '1') {
    document.body.classList.add('ruler-active');
  }

  let isDragging = false;

  const moveLine = (y) => {
    line.style.top = `${y}px`;
    localStorage.setItem('rulerPosition', y);
  };

  line.addEventListener('mousedown', (e) => {
    isDragging = true;
    moveLine(e.clientY);
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveLine(e.clientY);
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  line.addEventListener('touchstart', (e) => {
    isDragging = true;
    moveLine(e.touches[0].clientY);
    e.preventDefault();
  });

  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      moveLine(e.touches[0].clientY);
    }
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  button.addEventListener('click', () => {
    document.body.classList.toggle('ruler-active');
    const active = document.body.classList.contains('ruler-active');
    localStorage.setItem('rulerActive', active ? '1' : '0');
  });
});
