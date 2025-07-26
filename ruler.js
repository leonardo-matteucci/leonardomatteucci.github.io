window.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.className = 'ruler-toggle';
  button.textContent = 'Ruler';
  document.body.appendChild(button);

  const overlay = document.createElement('div');
  overlay.className = 'baseline-ruler-overlay';
  const line = document.createElement('div');
  line.className = 'baseline-ruler-line';
  const vline = document.createElement('div');
  vline.className = 'vertical-ruler-line';
  overlay.appendChild(line);
  overlay.appendChild(vline);
  document.body.appendChild(overlay);

  const savedPos = localStorage.getItem('rulerPosition');
  if (savedPos !== null) {
    line.style.top = `${savedPos}px`;
  }

  const savedPosX = localStorage.getItem('rulerPositionX');
  if (savedPosX !== null) {
    vline.style.left = `${savedPosX}px`;
  }

  if (localStorage.getItem('rulerActive') === '1') {
    document.body.classList.add('ruler-active');
  }

  let isDragging = false;
  let isDraggingX = false;

  const moveLine = (y) => {
    line.style.top = `${y}px`;
    localStorage.setItem('rulerPosition', y);
  };

  const moveVLine = (x) => {
    vline.style.left = `${x}px`;
    localStorage.setItem('rulerPositionX', x);
  };

  line.addEventListener('mousedown', (e) => {
    isDragging = true;
    moveLine(e.clientY);
    e.preventDefault();
  });

  vline.addEventListener('mousedown', (e) => {
    isDraggingX = true;
    moveVLine(e.clientX);
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveLine(e.clientY);
    }
    if (isDraggingX) {
      moveVLine(e.clientX);
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    isDraggingX = false;
  });

  line.addEventListener('touchstart', (e) => {
    isDragging = true;
    moveLine(e.touches[0].clientY);
    e.preventDefault();
  });

  vline.addEventListener('touchstart', (e) => {
    isDraggingX = true;
    moveVLine(e.touches[0].clientX);
    e.preventDefault();
  });

  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      moveLine(e.touches[0].clientY);
    }
    if (isDraggingX) {
      moveVLine(e.touches[0].clientX);
    }
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
    isDraggingX = false;
  });

  button.addEventListener('click', () => {
    document.body.classList.toggle('ruler-active');
    const active = document.body.classList.contains('ruler-active');
    localStorage.setItem('rulerActive', active ? '1' : '0');
  });
});
