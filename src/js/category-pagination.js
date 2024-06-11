import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 1024) {
    const expandBtn = document.querySelector("#expandBtn");
    const collapseBtn = document.querySelector("#collapseBtn");
    const tagList = document.querySelector("#tagList");

    expandBtn.addEventListener("click", function () {
      tagList.classList.add("!max-h-fit");
      expandBtn.classList.add("!hidden");
      collapseBtn.classList.remove("!hidden");
    });

    collapseBtn.addEventListener("click", function () {
      tagList.classList.remove("!max-h-fit");
      expandBtn.classList.remove("!hidden");
      collapseBtn.classList.add("!hidden");
    });
  }
});
