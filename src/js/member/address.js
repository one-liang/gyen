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

  // addressModal
  const openModalBtn = document.getElementById("openModal");
  const cancelModalBtn = document.getElementById("cancelModal");
  const finishModalBtn = document.getElementById("finishModal");
  const addressModal = document.getElementById("addressModal");

  openModalBtn.addEventListener("click", () => {
    addressModal.classList.add("fade-in");
    addressModal.showModal();
  });

  cancelModalBtn.addEventListener("click", () => {
    addressModal.classList.replace("fade-in", "fade-out");
    addressModal.addEventListener(
      "animationend",
      () => {
        addressModal.classList.remove("fade-out");
        addressModal.close();
      },
      { once: true }
    );
  });

  finishModalBtn.addEventListener("click", () => {
    addressModal.classList.replace("fade-in", "fade-out");
    addressModal.addEventListener(
      "animationend",
      () => {
        addressModal.classList.remove("fade-out");
        addressModal.close();
      },
      { once: true }
    );
  });

  addressModal.addEventListener("click", (event) => {
    if (event.target === addressModal) {
      cancelModalBtn.click();
    }
  });
});
