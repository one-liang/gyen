import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 商品輪播小圖
  const swiperProductsThumb = new Swiper(".swiper-products-thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
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

  // 商品組合
  const productMix = document.querySelector("#productMix");
  const closeProductMix = document.querySelector("#closeProductMix");
  const body = document.querySelector("body");

  for (let val = 1; val <= 6; val++) {
    const productSelect = document.querySelector(`#productSelect${val}`);
    productSelect.addEventListener("click", function () {
      productMix.classList.remove("hidden");
      body.classList.add("overflow-y-hidden");
    });
  }

  closeProductMix.addEventListener("click", function () {
    productMix.classList.add("hidden");
    body.classList.remove("overflow-y-hidden");
  });
});
