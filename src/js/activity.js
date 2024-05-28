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
});
