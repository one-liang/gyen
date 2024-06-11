import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  let swiperInstance;

  function initializeSwiper() {
    if (window.innerWidth >= 1024) {
      if (!swiperInstance) {
        // 猜你會喜歡
        swiperInstance = new Swiper(".swiper-alsoLike", {
          freeMode: false,
          slidesPerView: 4,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-alsoLike-next",
            prevEl: ".swiper-button-alsoLike-prev",
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  }

  window.addEventListener("resize", initializeSwiper);
});
