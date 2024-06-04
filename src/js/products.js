import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 商品輪播小圖
  const swiperProductsThumb = new Swiper(".swiper-products-thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-products-thumb-next",
      prevEl: ".swiper-button-products-thumb-prev",
    },
  });

  // 商品輪播
  const swiperProducts = new Swiper(".swiper-products", {
    thumbs: {
      swiper: swiperProductsThumb,
    },
    navigation: {
      nextEl: ".swiper-button-products-next",
      prevEl: ".swiper-button-products-prev",
    },
  });
});
