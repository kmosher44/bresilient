var oakland = [-122.2711, 37.8];
var gilroy = [-121.568275, 37.005783];
var chestnutStHub = switchLatLng([37.003319, -121.560893]);
var startLocation = chestnutStHub ;

class Map {
  constructor({map}) {
    this.map = map;
    this.defaultLoc = startLocation;
  }

  move(location) {
    this.map.flyTo({
      center: oakland,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }

  addMarker() {
    var marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat(this.defaultLoc)
      .addTo(this.map);
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
  map.addMarker();
})();


