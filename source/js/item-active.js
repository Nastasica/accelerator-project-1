document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.abonements__button');

  buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.closest('.abonements__item').classList.add('abonements__item--active');
    });

    button.addEventListener('mouseout', () => {
      button.closest('.abonements__item').classList.remove('abonements__item--active');
    });

    button.addEventListener('focus', () => {
      button.closest('.abonements__item').classList.add('abonements__item--active');
    });

    button.addEventListener('blur', () => {
      button.closest('.abonements__item').classList.remove('abonements__item--active');
    });

    button.addEventListener('mousedown', () => {
      button.closest('.abonements__item').classList.add('abonements__item--active');
    });

    button.addEventListener('mouseup', () => {
      button.closest('.abonements__item').classList.remove('abonements__item--active');
    });
  });
});
