function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.397, lng: 15.644 },
    zoom: 3,
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://jreposa.github.io/kml/ProjectsbyCountry.kml",
    map: map,
  });
}

window.initMap = initMap;
