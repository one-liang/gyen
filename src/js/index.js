import "./gotop";

const navMenu = document.querySelectorAll("#navMenu button");
const menuList = document.querySelector("#menuList");
const menuListItem = document.querySelector("#menuListItem");
console.log("navMenu", navMenu);
navMenu.forEach((nav) => {
  nav.addEventListener("click", (event) => {
    const navText = nav.textContent;

    // 切換 menuList 顯示狀態
    menuList.style.display =
      menuList.style.display === "none" ? "block" : "none";

    const links = menuListItem.querySelectorAll("a");

    // 為連結加 'border-black' class
    links.forEach((link) => {
      console.log(link.textContent);
      if (navText === link.textContent) {
        link.classList.add("!border-black");
      } else {
        link.classList.remove("!border-black");
      }
    });
  });
});
