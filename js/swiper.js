const swiper = new Swiper('.mySwiper', {
  direction: "horizontal",
  effect: "slide",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 3,
  centeredSlides: false,
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
