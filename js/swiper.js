const swiper = new Swiper('.mySwiper', {
  direction: "horizontal",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
