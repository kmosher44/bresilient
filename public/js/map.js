class Map {
  constructor({map}) {
    this.map = map;
    this.defaultLoc = startLocation;
  }

  getMap() {
    return this.map;
  }

  move(location) {
    this.map.flyTo({
      center: location,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }
  
  addPoly(data) {
    var id = JSON.stringify(data.markerLoc);
    this.map.addSource(id, {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': data.coordinates,
        }
      }
    });
    this.map.addLayer({
      'id': id,
      'type': 'fill',
      'source': id, // what does source mean?
      'layout': {},
      'paint': {
        'fill-color': '#088',
        'fill-opacity': data.loadIndex / 100,
      }
    });
    
  }

  addPolygons

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
