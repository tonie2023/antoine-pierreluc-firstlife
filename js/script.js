function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

const swiper = new Swiper(".swiper-screenshots", {
  direction: "horizontal",
  effect: "slide",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
