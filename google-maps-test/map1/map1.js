function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.397, lng: 15.644 },
    zoom: 8,
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://jreposa.github.io/kml/ProjectsbyCountry-blue.kml",
    map: map,
  });
}

window.initMap = initMap;
