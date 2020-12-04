ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [59.9333, 30.3220],
    zoom: 15,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  var placemark = new ymaps.Placemark([59.9331, 30.3226], {
    hintContent: "ул. Большая Конюшенная, 19/8",
    balloonContent: "ул. Большая Конюшенная, 19/8"
  },
  {
    iconLayout: "default#image",
    iconImageHref: "img/map_marker.png",
    iconImageSize: [36, 36]
  });

  map.geoObjects.add(placemark);
}
