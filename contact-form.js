window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  function showMessage(msg, isSuccess = false) {
    status.textContent = msg;
    status.classList.toggle('ok', isSuccess);
    status.classList.toggle('error', !isSuccess);
    setTimeout(() => { status.textContent = ''; }, 4000); // clears after 2s
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    showMessage('Sending...');
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showMessage('Message sent.', true);
      } else {
        const result = await response.json();
        showMessage(result.errors
          ? result.errors.map(err => err.message).join(', ')
          : 'Send failed.');
      }
    } catch {
      showMessage('Network error.');
    }
  });
});

