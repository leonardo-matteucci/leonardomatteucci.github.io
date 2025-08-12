document.addEventListener('DOMContentLoaded', () => {
  const yearSelect = document.getElementById('year-filter');
  const instSelect = document.getElementById('inst-filter');
  const cards = document.querySelectorAll('#works-grid .work-card');
  function filter() {
    const year = yearSelect.value;
    const inst = instSelect.value.toLowerCase();
    cards.forEach(card => {
      const matchYear = year === 'all' || card.dataset.year === year;
      const matchInst = inst === 'all' || card.dataset.inst.includes(inst);
      card.style.display = (matchYear && matchInst) ? '' : 'none';
    });
  }
  yearSelect.addEventListener('change', filter);
  instSelect.addEventListener('change', filter);
});
