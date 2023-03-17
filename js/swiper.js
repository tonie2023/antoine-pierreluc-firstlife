const swiper = new Swiper(".swiper-filters", {
  direction: "horizontal",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
});

const swiperr = new Swiper(".swiper-");
