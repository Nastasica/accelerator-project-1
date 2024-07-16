document.addEventListener('DOMContentLoaded', () => {
  // Инициализация
  const tabs = document.querySelectorAll('.faq__tab');
  const tabContents = document.querySelectorAll('.faq__tab-content');
  const accordionHeaders = document.querySelectorAll('.faq__accordion-header');

  function openTab(tabName) {
    // Скрыть все табы
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    // Убрать активный класс со всех табов
    tabs.forEach((tab) => {
      tab.classList.remove('faq__tab--active');
    });

    // Показать выбранный таб и добавить активный класс к выбранному табу
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('faq__tab--active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');
      openTab(tabName);
    });

    tab.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
      }
    });
  });

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      this.classList.toggle('active');
      const body = this.nextElementSibling;
      if (body.style.maxHeight) {
        body.style.maxHeight = null;
        body.classList.remove('show');
      } else {
        body.style.maxHeight = `${body.scrollHeight }px`;
        body.classList.add('show');
      }
    });

    header.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
      }
    });
  });

  // Показать первый таб и первый аккордеон по умолчанию
  openTab('center');
  const firstAccordionHeader = document.querySelector('#center .faq__accordion-header');
  if (firstAccordionHeader) {
    firstAccordionHeader.click();
  }
});
