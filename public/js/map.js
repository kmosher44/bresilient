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

  addIcon(imgSrc, loc, name, size=0.25) {
    var map = this.map;
    map.loadImage(
      imgSrc,
      function (error, image) {
        if (error) throw error;
        map.addImage(name, image);
        map.addSource('point', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': loc
                }
              }
            ]
          }
        });
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'point',
          'layout': {
            'icon-image': name,
            'icon-size': size,
          }
        });
      }
    );
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
