// why did i translate lorem ipsum into english
// The pain itself is love, but the pain is enhanced, but I give it time to fall into this kind of pain, so as to do some great pain. In order for the minimum to come the consequences But if the pain in the film is condemned, the pleasure is the desire to escape from the pain of being clum onto the resultant. They are the exceptions the blinds yearn for, they don't see, they are the ones who abandon their responsibilities to the fault that is soothing the soul's hardships.

"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
