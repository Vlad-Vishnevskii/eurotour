const navButton = document.querySelector(".main-nav__button");
const mobileMenu = document.querySelector(".menu-list");
const closeButton = document.querySelector(".main-nav__button-close");

const noJsRemove = function () {
  navButton.classList.remove("main-nav__button_no-js");
  mobileMenu.classList.remove("menu-list_no-js");
  closeButton.classList.remove("main-nav__button-close_no-js");
};

const openMenu = function () {
  mobileMenu.classList.add("menu-list_open");
  navButton.classList.add("visually-hidden");
  closeButton.addEventListener ("click", closeMenu);
  navButton.removeEventListener ("click", openMenu);
}

const closeMenu = function () {
  mobileMenu.classList.remove("menu-list_open");
  navButton.classList.remove("visually-hidden");
  navButton.addEventListener ("click", openMenu);
  closeButton.removeEventListener ("click", closeMenu);
}

noJsRemove();
navButton.addEventListener ("click", openMenu);



