document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('freeLessonForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    let isValid = true;

    if (!/^[A-Za-zА-Яа-яЁё\- ]+$/.test(nameInput.value)) {
      nameInput.setCustomValidity('Пожалуйста, введите только буквы и пробелы.');
      isValid = false;
    } else {
      nameInput.setCustomValidity('');
    }

    if (!/^\+?[\d ()-]+$/.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Пожалуйста, введите корректный номер телефона.');
      isValid = false;
    } else {
      phoneInput.setCustomValidity('');
    }

    if (isValid) {
      form.submit();
    }
  });
});
