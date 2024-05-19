document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll("#navMenu button");
  const menuList = document.querySelector("#menuList");
  const menuListItems = document.querySelectorAll("#menuListItem a");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const burgerMenuButton = document.querySelector("#burgerMenuButton");
  const searchInput = document.querySelector(".searchInput");
  const searchMenuButton = document.querySelector("#searchMenuButton");
  const searchList = document.querySelector("#searchList");
  const searchIcon = document.querySelector(".searchIcon");
  const searchCloseIcon = document.querySelector(".searchCloseIcon");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const navValue = this.getAttribute("data-nav");

      // 顯示 menuList
      menuList.classList.add("!translate-y-0", "!opacity-100");

      // 為對應的 menuListItem 添加 class
      menuListItems.forEach((item) => {
        if (item.getAttribute("data-list") === navValue) {
          item.classList.add("!border-black");
        } else {
          item.classList.remove("!border-black");
        }
      });
    });
  });

  // 如果點擊的不是 header 或 menuList，則隱藏 menuList
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target) && !menuList.contains(event.target)) {
      menuList.classList.remove("!translate-y-0", "!opacity-100");
    }
  });

  // 按下 esc 鍵，則隱藏 menuList
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menuList.classList.remove("!translate-y-0", "!opacity-100");
    }
  });

  // 手機版
  burgerMenuButton.addEventListener("click", function () {
    // 視窗寬度小於 1024px，則切換 menuList 的顯示狀態
    if (window.innerWidth < 1024) {
      body.classList.toggle("overflow-hidden");
      menuList.classList.toggle("!translate-x-0");
    }
  });

  // 手機版
  searchMenuButton.addEventListener("click", function () {
    // 視窗寬度小於 1024px，則切換 searchList 的顯示狀態
    if (window.innerWidth < 1024) {
      searchList.classList.toggle("!translate-y-0");
    }
  });

  searchInput.addEventListener("input", function () {
    if (searchInput.value) {
      searchIcon.classList.add("hidden");
      searchCloseIcon.classList.remove("hidden");
    } else {
      searchIcon.classList.remove("hidden");
      searchCloseIcon.classList.add("hidden");
    }
  });
});
