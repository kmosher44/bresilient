//config
var gZoom = 12;
var present = true;
//locations
var eastCoast = [-67.13734351262877, 45.137451890638886];
var gilroy = [-121.568275, 37.005783];
var gilroy2 = switchLatLng([37.013035, -121.531174]);
var chestnutStHub = switchLatLng([37.003319, -121.560893]);
var launchpad = switchLatLng([37.787787, -122.396555]);
var moveToLoc = chestnutStHub;
var startLocation = present ? launchpad : chestnutStHub;


(async function main() {
  var $searchForm = document.querySelector('.search-form');
  var $searchInput = document.querySelector('#search');
  var $table = document.querySelector('.table');
  var $genButton = document.querySelector('.btn-gen');


  $genButton.addEventListener('click', () => {
    $table.style.display = 'block';
  });


  mapboxgl.accessToken = 'pk.eyJ1IjoiaGF5ZGVuMzIxIiwiYSI6ImNrNjM3Zjg4ZzA3MDAza284a2p6dmpjcWUifQ.MQ-kLHA7IuWQ3BMeYE-XAA';
  var mapboxObj = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-streets-v9', // stylesheet location
    center: startLocation, // starting position [lng, lat]
    zoom: gZoom // starting zoom
  });

  var M = new Map({
    map: mapboxObj,
  });

  var api = new API();
  var map = M.getMap();

  // zip code submit handler
  $searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    $searchInput.value = '';
    M.move(moveToLoc);


    // add markers
    var {pins} = await api.fetchPins();
    var meteredPoints = pins;
    M.addMarkers(meteredPoints);

    // add hub icon
    var hubImg = 'images/icons/hub.png';
    M.addIcon(hubImg, startLocation, 'two', 1.25);

    // add polygons 
    const {polygons} = await api.fetchPolygons();

    for (var poly of polygons) {
      M.addPoly(poly)
    }

    // add draw controls
    var draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });

    map.addControl(draw);

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);

    function updateArea(e) {
      var data = draw.getAll();
      var features = data.features;
      localStorage.polygons = JSON.stringify(features);
    }

  });

})();


