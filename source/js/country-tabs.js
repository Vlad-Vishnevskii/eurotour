const countryTabsList = document.querySelector(".country-tabs__list");
const tabsMenu = document.querySelector(".tabs-menu");
const countryTabsCollection = document.querySelectorAll(".country-tabs__item");

tabsMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  const target = evt.target;
  if (!target.classList.contains("country-tabs__item_active")) {
    for (let item of countryTabsCollection) {
      item.classList.remove("country-tabs__item_active")
    }
  }
  for (let item of countryTabsCollection) {
    if (item.dataset.country === target.textContent) {
      item.classList.add("country-tabs__item_active")
    }
  }
  const lastActiveItem = document.querySelector(".tabs-menu__link_active");
  if (!target.classList.contains("tabs-menu__link_active")) {
    lastActiveItem.classList.remove("tabs-menu__link_active");
    target.classList.add("tabs-menu__link_active");
  }
});


