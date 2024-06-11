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

  const productSelects = document.querySelectorAll("[id^='productSelect']");
  productSelects.forEach((productSelect) => {
    productSelect.addEventListener("click", function () {
      productMix.classList.remove("hidden");

      if (window.innerWidth < 1024) {
        body.classList.add("overflow-y-hidden");
      }
    });
  });

  closeProductMix.addEventListener("click", function () {
    productMix.classList.add("hidden");

    if (window.innerWidth < 1024) {
      body.classList.remove("overflow-y-hidden");
    }
  });

  // 商品加至購物車
  const addToCartPC = document.querySelector("#addToCartPC");
  const addToCartMB = document.querySelector("#addToCartMB");
  const productCart = document.querySelector("#productCart");
  const closeCartMenuBtn = document.querySelector("#closeCartMenuBtn");

  closeCartMenuBtn.addEventListener("click", function () {
    productCart.classList.add("opacity-0", "pointer-events-none");
  });

  addToCartPC.addEventListener("click", function () {
    productCart.classList.remove("opacity-0", "pointer-events-none");

    setTimeout(() => {
      productCart.classList.add("opacity-0", "pointer-events-none");
    }, 2000);
  });

  addToCartMB.addEventListener("click", function () {
    productCart.classList.remove("opacity-0", "pointer-events-none");

    setTimeout(() => {
      productCart.classList.add("opacity-0", "pointer-events-none");
    }, 2000);
  });
});
