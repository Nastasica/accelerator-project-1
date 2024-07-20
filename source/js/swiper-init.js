import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
