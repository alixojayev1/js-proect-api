function modal(){
    const modalOpenBtns = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-modal-close]");

  function openModel() {
    modal.classList.add("show", "fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }
  function closeModel() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", openModel);
  });

  modalCloseBtn.addEventListener("click", closeModel);

  const modalTimeId = setTimeout(openModel, 5000);
}

export default modal