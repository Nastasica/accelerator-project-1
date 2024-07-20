import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

  new Swiper('.reviews__slider', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
    },
    on: {
      init: function() {
        const swiper = this;
        updateNavigationButtons(swiper);
      },
      slideChange: function() {
        const swiper = this;
        updateNavigationButtons(swiper);
      }
    }
  });

  function updateNavigationButtons(swiper) {
    const prevButton = swiper.navigation.prevEl;
    const nextButton = swiper.navigation.nextEl;

    if (swiper.isBeginning) {
      prevButton.classList.add('swiper-button-disabled');
    } else {
      prevButton.classList.remove('swiper-button-disabled');
    }

    if (swiper.isEnd) {
      nextButton.classList.add('swiper-button-disabled');
    } else {
      nextButton.classList.remove('swiper-button-disabled');
    }
  }
});
