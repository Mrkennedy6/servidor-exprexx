// public/script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const messageDiv = document.createElement('div');
  form.parentNode.insertBefore(messageDiv, form.nextSibling);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const text = await response.text();
      messageDiv.innerHTML = text;
      form.reset();
    } catch (error) {
      messageDiv.innerHTML = `<p style="color:red;">Error al enviar el formulario.</p>`;
    }
  });
});
