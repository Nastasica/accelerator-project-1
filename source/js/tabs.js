document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.querySelector('.tabs');

  const initTabs = () => {
    const controls = tabsContainer.querySelectorAll('.tabs__control');
    const elements = tabsContainer.querySelectorAll('.tabs__element');

    controls.forEach((control) => {
      control.addEventListener('click', () => {
        const period = control.getAttribute('data-period');

        // Деактивируем все контролы
        controls.forEach((c) => c.classList.remove('tabs__control--active'));

        // Активируем выбранный контрол
        control.classList.add('tabs__control--active');

        // Показываем только соответствующий элемент, остальные скрываем
        elements.forEach((element) => {
          if (element.getAttribute('data-period') === period) {
            element.classList.add('tabs__element--active');
          } else {
            element.classList.remove('tabs__element--active');
          }
        });
      });
    });

    // Показываем первый таб по умолчанию
    controls[0].click();
  };

  if (tabsContainer) {
    initTabs();
  }
});
