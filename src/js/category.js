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
});
