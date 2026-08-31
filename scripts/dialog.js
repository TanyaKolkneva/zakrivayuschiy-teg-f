const dialog = document.querySelector(".dialog");
const buttonSave = document.querySelector(".button__save");
const buttonClose = document.querySelector(".dialog__button");

buttonSave.addEventListener("click", () => {
  dialog.showModal();
});

buttonClose.addEventListener("click", () => {
  dialog.close();
});
