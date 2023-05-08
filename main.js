"strict";
const display = document.querySelector("#my-image");
const imageLink = document.querySelector("#image");

const imagesSlider = document.querySelectorAll(".images");
const hold = document.querySelector(".image-holder");
const img = document.querySelector("#output");

const imageSliders = function () {
  const link = imageLink.value;
  if (!link) return;

  const result = `<div class="images"><img id="output" src="${link}"/> </div>`;
  hold.innerHTML += result;
  hold.style.background = "grey";
};
display.addEventListener("click", imageSliders);
