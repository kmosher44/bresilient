var gilroy = [-121.568275, 37.005783];
var gilroy2 = switchLatLng([37.013035, -121.531174]);
var chestnutStHub = switchLatLng([37.003319, -121.560893]);
var startLocation = chestnutStHub ;

var locations = [
  gilroy,
  gilroy2,
  chestnutStHub
];

class Map {
  constructor({map}) {
    this.map = map;
    this.defaultLoc = startLocation;
  }

  move(location) {
    this.map.flyTo({
      center: location,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }

  addMarker(loc) {
    new mapboxgl
      .Marker()
      .setLngLat(loc)
      .addTo(this.map);
  }
  
  addMarkers(locations) {
    for (var loc of locations) {
     this.addMarker(loc);   
    }
  }
  
}


(function main() {

  var $searchForm = document.querySelector('.search-form');
  var $searchInput = document.querySelector('#search');

  $searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $searchInput.value = '';
  });


  mapboxgl.accessToken = 'pk.eyJ1IjoiaGF5ZGVuMzIxIiwiYSI6ImNrNjM3Zjg4ZzA3MDAza284a2p6dmpjcWUifQ.MQ-kLHA7IuWQ3BMeYE-XAA';
  var mapboxObj = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-streets-v9', // stylesheet location
    center: startLocation, // starting position [lng, lat]
    zoom: 13 // starting zoom
  });

  var map = new Map({
    map: mapboxObj,
  });
  //jj
  map.addMarkers(locations);
})();


