document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('freeLessonForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');

    let isValid = true;

    // Очистка предыдущих сообщений об ошибках
    nameInput.classList.remove('error');
    nameError.classList.remove('active');
    phoneInput.classList.remove('error');
    phoneError.classList.remove('active');

    // Валидация поля имени
    if (!/^[A-Za-zА-Яа-яЁё\- ]+$/.test(nameInput.value)) {
      nameInput.classList.add('error');
      nameError.classList.add('active');
      isValid = false;
    }

    // Валидация поля телефона
    if (!/^\+?[\d ()-]+$/.test(phoneInput.value)) {
      phoneInput.classList.add('error');
      phoneError.classList.add('active');
      isValid = false;
    }

    if (isValid) {
      form.submit();
    }
  });
});
