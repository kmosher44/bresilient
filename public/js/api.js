class API {
  constructor() {
    this.baseUrl = 'http://localhost:5000/'
  }
  
  async fetchPolygons() {
    var route = 'fetchPolygons';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {
      foo: 'bar'
    });
  }

  async fetchPins() {
    var route = 'fetchPins';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {});
    return data;
  }
}
