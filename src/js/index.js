import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 主輪播
  new Swiper(".swiper-main", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-main-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-main-next",
      prevEl: ".swiper-button-main-prev",
    },
  });
});
