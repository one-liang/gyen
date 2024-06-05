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

  // 商品分頁
  const tabs = document.querySelectorAll(".tab-links a");
  const contents = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      let activeTab = this.getAttribute("href");

      tabs.forEach((tab) => tab.parentNode.classList.remove("bg-neutral-100"));
      contents.forEach((content) => content.classList.add("hidden"));

      this.parentNode.classList.add("bg-neutral-100");
      document.querySelector(activeTab).classList.remove("hidden");
    });
  });
});
