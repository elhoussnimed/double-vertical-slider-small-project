const sliderContainer = document.querySelector(".slider");
const infoContainer = document.querySelector(".slider .info");
const imageContainer = document.querySelector(".slider .image");
const upBtn = document.querySelector(".slider .arrow-up");
const downBtn = document.querySelector(".slider .arrow-down");
const slidesLength = imageContainer.querySelectorAll("div").length;

let activeSlideIndex = 0;

infoContainer.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  imageContainer.style.transform = `translateY(-${
    activeSlideIndex * sliderHight
  }px)`;
  infoContainer.style.transform = `translateY(${
    activeSlideIndex * sliderHight
  }px)`;
};
