var navMain = document.querySelector(".main-nav");
var navButtonOpen = document.querySelector(".main-nav__burger-button");
var navButtonClose = document.querySelector(".main-nav__close-button");

navMain.classList.remove("main-nav_nojs");

navButtonOpen.addEventListener("click", function() {
  navMain.classList.remove("main-nav_closed");
});

navButtonClose.addEventListener("click", function() {
  navMain.classList.add("main-nav_closed");
});
