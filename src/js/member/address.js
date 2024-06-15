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

  // modal
  const openModalBtn = document.getElementById("openModal");
  const cancelModalBtn = document.getElementById("cancelModal");
  const finishModalBtn = document.getElementById("finishModal");
  const modal = document.getElementById("myModal");

  openModalBtn.addEventListener("click", () => {
    modal.classList.add("fade-in");
    modal.showModal();
  });

  cancelModalBtn.addEventListener("click", () => {
    modal.classList.replace("fade-in", "fade-out");
    modal.addEventListener(
      "animationend",
      () => {
        modal.classList.remove("fade-out");
        modal.close();
      },
      { once: true }
    );
  });

  finishModalBtn.addEventListener("click", () => {
    modal.classList.replace("fade-in", "fade-out");
    modal.addEventListener(
      "animationend",
      () => {
        modal.classList.remove("fade-out");
        modal.close();
      },
      { once: true }
    );
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      cancelModalBtn.click();
    }
  });
});
