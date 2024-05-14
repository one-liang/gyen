import "./gotop";

const navButtons = document.querySelectorAll("#navMenu button");
const menuList = document.querySelector("#menuList");
const menuListItems = document.querySelectorAll("#menuListItem a");
const header = document.querySelector("header");
const burgerMenu = document.querySelector("#burgerMenu");

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
burgerMenu.addEventListener("click", function () {
  // 視窗寬度小於 1024px，則切換 menuList 的顯示狀態
  if (window.innerWidth < 1024) {
    menuList.classList.toggle("!translate-x-0");
  }
});
