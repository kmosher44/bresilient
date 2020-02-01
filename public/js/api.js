class API {
  constructor() {
    this.baseUrl = 'http://localhost:5000/'
  }

  async postBounds(bounds) {
    var route = '';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {
      bounds
    });
  }
  
  async fetchPolygons(bounds) {
    var route = 'fetchPolygon';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {
      bounds: {}
    });
  }

  async fetchPins() {
    var route = 'fetchPins';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {});
    return data;
  }
}
