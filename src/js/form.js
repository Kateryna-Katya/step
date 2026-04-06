const form = document.getElementById('contactForm');

if (form) {
  const btnText = form.querySelector('.btn-text');
  const loader = form.querySelector('.btn-loader');
  const message = form.querySelector('.form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    btnText.classList.add('hidden');
    loader.classList.remove('hidden');
    message.classList.add('hidden');

    setTimeout(() => {
      loader.classList.add('hidden');
      btnText.classList.remove('hidden');

      message.textContent = 'Заявка успішно відправлена 🚀';
      message.classList.remove('hidden');
      message.classList.add('success');

      form.reset();
    }, 2000);
  });
}

// ---- форма 2 ----
const form2 = document.querySelector('.contact-form.purple');

if (form2) {
  const btnText2 = form2.querySelector('.btn-text');
  const loader2 = form2.querySelector('.btn-loader');
  const message2 = form2.querySelector('.form-message');

  form2.addEventListener('submit', (e) => {
    e.preventDefault();

    btnText2.classList.add('hidden');
    loader2.classList.remove('hidden');
    message2.classList.add('hidden');

    setTimeout(() => {
      loader2.classList.add('hidden');
      btnText2.classList.remove('hidden');

      message2.textContent = 'Заявка відправлена 🚀';
      message2.classList.remove('hidden');
      message2.classList.add('success');

      form2.reset();
    }, 2000);
  });
}