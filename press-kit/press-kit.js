window.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-bio');
  const bioText = document.getElementById('press-bio-text');
  if (copyBtn && bioText) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(bioText.textContent.trim());
    });
  }
});
