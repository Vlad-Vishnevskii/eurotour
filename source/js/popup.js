var buyButton = document.querySelector(".buy-button");
var popupBuy = document.querySelector(".popup-buy");
var buyCloseButton = popupBuy.querySelector(".popup-buy__close-button");

var popupShow = function (evt) {
  if (evt.target.classList.contains("buy-button")) {
    popupBuy.classList.add("popup_show");
  }
}

var popupClose = function () {
  popupBuy.classList.remove("popup_show");
}

buyCloseButton.addEventListener("click", popupClose);
document.addEventListener("click", popupShow);
