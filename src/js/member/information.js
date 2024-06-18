import "../header";

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

  // phoneModal
  const sendModalBtn = document.getElementById("sendModal");
  const phoneModal = document.getElementById("phoneModal");

  // 打開 phoneModal 方式
  // phoneModal.showModal();

  sendModalBtn.addEventListener("click", () => {
    phoneModal.close();
  });

  // phoneModal
  const sendVerifyModalBtn = document.getElementById("sendVerifyModal");
  const verifyModal = document.getElementById("verifyModal");

  // 打開 verifyModal 方式
  // verifyModal.showModal();

  sendVerifyModalBtn.addEventListener("click", () => {
    verifyModal.close();
  });
});
