import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  const detailCloseBtn = document.querySelector("#detailCloseBtn");
  const detailOpenBtn = document.querySelector("#detailOpenBtn");
  const detailMenu = document.querySelector("#detailMenu");

  detailCloseBtn.addEventListener("click", function () {
    detailMenu.classList.add("hidden");
  });

  detailOpenBtn.addEventListener("click", function () {
    detailMenu.classList.remove("hidden");
  });
});
