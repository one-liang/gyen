import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 主輪播
  new Swiper(".swiper-main", {
    slidesPerView: 1,
    loop: true,
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

  // 全站分類熱銷推薦
  new Swiper(".swiper-recommend", {
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
      nextEl: ".swiper-button-recommend-next",
      prevEl: ".swiper-button-recommend-prev",
    },
    scrollbar: {
      el: ".swiper-recommend-scrollbar",
    },
  });

  // 次要輪播
  new Swiper(".swiper-secondary", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-secondary-pagination",
      type: "bullets",
      clickable: true,
    },
  });
});
