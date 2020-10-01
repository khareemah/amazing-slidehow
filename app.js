let currentlySelected = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pageNumber = document.querySelector(".pagination-number");
nextBtn.addEventListener("click", function() {
  slides[currentlySelected].classList.remove("active");
  currentlySelected++;
  pageNumber.textContent = currentlySelected + 1;
  if (currentlySelected === slides.length) {
    currentlySelected = 0;
    pageNumber.textContent = currentlySelected + 1;
  }
  slides[currentlySelected].classList.add("active");
});

prevBtn.addEventListener("click", function() {
  slides[currentlySelected].classList.remove("active");
  if (currentlySelected === 0) {
    currentlySelected = slides.length;
    pageNumber.textContent = slides.length;
  }
  pageNumber.textContent = currentlySelected;

  currentlySelected--;
  slides[currentlySelected].classList.add("active");
});
