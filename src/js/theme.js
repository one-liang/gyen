import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 猜你會喜歡
  new Swiper(".swiper-alsoLike", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        freeMode: false,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-alsoLike-next",
      prevEl: ".swiper-button-alsoLike-prev",
    },
  });
});
