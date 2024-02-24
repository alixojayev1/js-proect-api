function slider(){
    const slides = document.querySelectorAll(".offer__slide"),
    slidesInner = document.querySelector(".offer__slider-inner"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total");

  let slideInd = 1;
  showIndex(slideInd);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showIndex(index) {
    if (index > slides.length) {
      slideInd = 1;
    }

    if (index < 1) {
      slideInd = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));

    slides[slideInd - 1].style.display = "block";

    if (slides.length < 10) {
      current.textContent = `0${slideInd}`;
    } else {
      current.textContent = slideInd;
    }
  }
  function moveSlides(index) {
    showIndex((slideInd += index));
  }

  prev.addEventListener("click", () => {
    moveSlides(-1);
  });
  next.addEventListener("click", () => {
    moveSlides(+1);
  });
}

export default slider