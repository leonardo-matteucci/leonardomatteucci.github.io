(function() {
  const previewGrid = document.querySelector('.home-events .event-preview-grid');
  if (!previewGrid) return;

  const fallbackCards = Array.from(previewGrid.querySelectorAll('.event-card'));

  function copyEventCard(card) {
    const clone = card.cloneNode(true);
    clone.classList.add('event-card');
    return clone;
  }

  function renderEvents(cards) {
    previewGrid.innerHTML = '';
    if (!cards.length) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'More events will be announced soon.';
      previewGrid.appendChild(emptyMessage);
      return;
    }
    const fragment = document.createDocumentFragment();
    cards.slice(0, 3).forEach(card => fragment.appendChild(copyEventCard(card)));
    previewGrid.appendChild(fragment);
  }

  async function loadEvents() {
    try {
      const response = await fetch('/events/');
      if (!response.ok) throw new Error('Failed to fetch events page');
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const cards = Array.from(doc.querySelectorAll('.event-card'));
      renderEvents(cards.length ? cards : fallbackCards);
    } catch (error) {
      console.error('Unable to load events preview:', error);
      renderEvents(fallbackCards);
    }
  }

  if ('fetch' in window && 'DOMParser' in window) {
    loadEvents();
  }
})();
