function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.397, lng: 15.644 },
    zoom: 8,
    gestureHandling: "cooperative",
    
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://www.google.com/maps/d/u/0/kml?mid=1UDFRVVQ8smtzdAHBfJAZjHgHirN-bAc&lid=RkXn7iG-bvc",
    map: map,
  });
}

window.initMap = initMap;
