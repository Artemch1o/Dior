const swiperTop = new Swiper(".top__swiper", {
  loop: true,
  effect: "coverflow",
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".accordeon__triger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon__item--active");
  });
});
