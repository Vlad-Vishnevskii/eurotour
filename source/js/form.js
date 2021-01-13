var questionsForm = document.querySelector(".questions__form");
var popupSuccess = document.querySelector(".popup-success");
var successClose = document.querySelector(".popup-success__close-button");
var buyForm = document.querySelector(".popup-buy__form");
var popupBuy = document.querySelector(".popup-buy");
var buyCloseButton = popupBuy.querySelector(".popup-buy__close-button");

var popupShow = function () {
  popupBuy.classList.remove("popup_show");
  popupSuccess.classList.add("popup_show");
  successClose.addEventListener("click", popupClose);
}

var popupClose = function () {
  popupSuccess.classList.remove("popup_show");
  successClose.removeEventListener("click", popupClose);
}

var popupByuClose = function () {
  popupBuy.classList.remove("popup_show");
}

const onSubmit = function (evt) {
  evt.preventDefault();
  popupShow();
}


questionsForm.addEventListener("submit", onSubmit);
buyForm.addEventListener("submit", onSubmit);

