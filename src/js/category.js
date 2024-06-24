import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(
    "#dropdownMenu .dropdownButton"
  );

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdownList = button.nextElementSibling;
      const dropupIcon = button.querySelector(".dropupIcon");
      const dropdownIcon = button.querySelector(".dropdwonIcon");

      if (dropdownList && dropdownList.classList.contains("dropdownList")) {
        dropdownList.classList.toggle("!flex");
        dropupIcon.classList.toggle("hidden");
        dropdownIcon.classList.toggle("hidden");
      }
    });
  });

  // 專屬精選項目
  new Swiper(".swiper-featured", {
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
      nextEl: ".swiper-button-featured-next",
      prevEl: ".swiper-button-featured-prev",
    },
    scrollbar: {
      el: ".swiper-featured-scrollbar",
    },
  });

  // 篩選選單
  const body = document.querySelector("body");
  const advancedMenu = document.querySelector("#advancedMenu");
  const filterBtn = document.querySelector("#filterBtn");
  const closeAdvancedMenuButton = document.querySelector(
    "#closeAdvancedMenuButton"
  );
  const advanceDropdownButtons = document.querySelectorAll(
    ".advanceDropdownButton"
  );

  if (window.innerWidth < 1024) {
    filterBtn.addEventListener("click", () => {
      body.classList.toggle("overflow-hidden");
      advancedMenu.classList.toggle("!translate-x-0");
      advancedMenu.classList.toggle("menuMask");
    });

    closeAdvancedMenuButton.addEventListener("click", () => {
      body.classList.toggle("overflow-hidden");
      advancedMenu.classList.toggle("!translate-x-0");
      advancedMenu.classList.toggle("menuMask");
    });

    advanceDropdownButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const dropdownList = button.nextElementSibling;
        const minusIcon = button.querySelector(".minusIcon");
        const plusIcon = button.querySelector(".plusIcon");

        dropdownList.classList.toggle("hidden");
        minusIcon.classList.toggle("hidden");
        plusIcon.classList.toggle("hidden");
      });
    });
  }
});
