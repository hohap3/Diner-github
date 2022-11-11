// Scroll to top button

var backToTopBtn = document.querySelector(".backToTopBtn");

window.addEventListener("scroll", () => {
  var scrollValue = document.documentElement.scrollTop;

  if (scrollValue >= 800) backToTopBtn.style.display = "block";
  else backToTopBtn.style.display = "none";
});

backToTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
