// nav-bar
const mobileNavToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  nav.hasAttribute("data-visible")
    ? mobileNavToggle.setAttribute("aria-expanded", false)
    : mobileNavToggle.setAttribute("aria-expanded", true);

  nav.toggleAttribute("data-visible");
  document.body.toggleAttribute("data-inactive");
});

// testimonial
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
console.log(slides);
const navDots = document.querySelector(".carousel__nav");
const dots = Array.from(navDots.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  const amountToMove = targetSlide.style.left;
  track.style.transform = `translateX(-${amountToMove})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// move to that slide when indicator is clicked
navDots.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = navDots.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
