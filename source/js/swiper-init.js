import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 4,
        allowTouchMove: false,
        autoplay: false,
      },
    },
  });

  // Отключаем возможность перетаскивания и автопереключения на десктопах
  if (window.innerWidth >= 1366) {
    swiper.allowTouchMove = false;
    swiper.autoplay.stop();
  }

  // Следим за изменением размера окна и обновляем настройки
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1366) {
      swiper.allowTouchMove = false;
      swiper.autoplay.stop();
    } else {
      swiper.allowTouchMove = true;
      swiper.autoplay.start();
    }
  });
});

