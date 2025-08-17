window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = 'Sending...';
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = 'Thanks for your message!';
        form.reset();
      } else {
        const result = await response.json();
        status.textContent = result.errors ? result.errors.map(err => err.message).join(', ') : 'Oops! There was a problem submitting your form';
      }
    } catch (error) {
      status.textContent = 'Oops! There was a problem submitting your form';
    }
  });
});
