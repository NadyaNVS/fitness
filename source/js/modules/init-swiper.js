import Swiper from 'swiper/swiper-bundle';
const trainersSwiper = document.querySelector('.trainers__swiper');
const reviewsSwiper = document.querySelector('.reviews__swiper');


const initTrainersSwiper = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {

          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

const initReviewsSwiper = () => {
  if (reviewsSwiper) {
    (() =>
      new Swiper('.reviews__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 33,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    )();

  }
};

export {initTrainersSwiper, initReviewsSwiper};
