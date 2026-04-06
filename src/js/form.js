const form = document.getElementById('contactForm');
const btnText = form.querySelector('.btn-text');
const loader = form.querySelector('.btn-loader');
const message = form.querySelector('.form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // показуємо лоадер
  btnText.classList.add('hidden');
  loader.classList.remove('hidden');
  message.classList.add('hidden');

  // імітація запиту (2 сек)
  setTimeout(() => {
    loader.classList.add('hidden');
    btnText.classList.remove('hidden');

    // fake success
    message.textContent = 'Заявка успішно відправлена 🚀';
    message.classList.remove('hidden');
    message.classList.add('success');

    form.reset();
  }, 2000);
});