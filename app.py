from flask import Flask, request, send_from_directory, jsonify

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return '<html><head></head><body>Want to help your community B-Resilient?<br/><br/><a href="/public/index.html">Start</a></body></html>'


@app.route('/public/<path:path>')
def send_files(path):
    return send_from_directory('public', path)


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('public/js', path)


@app.route('/fetchPolygons', methods=['POST'])
def fetch_polygons():
    request_vars = request.get_json()
    bounds = request_vars['bounds']

    polygons = [
        {
            "type": "load",  # load, fire, generate
            "markerLoc": [-67.13734351262877, 45.137451890638886],  # Array [lng, lat]
            "isLowIncome": True,  # Boolean
            "loadIndex": 45,  # Integer, 0 - 100
            "loadDensity": "",  # String,
            "coordinates": [
                [
                    [-67.13734351262877, 45.137451890638886],
                    [-66.96466, 44.8097],
                    [-68.03252, 44.3252],
                ]
            ]
        }
    ]

    res = {'status': 'ok',
           'requested_bounds': bounds,
           'polygons': polygons}
    return jsonify(res)



@app.route('/fetchPins', methods=['POST'])
def fetch_pins():
    request_vars = request.get_json()

    pins =\
        [
            [-121.623069, 37.019780],
            [-121.560769, 37.007519],
            [-121.580479, 37.009911],
            [-121.575173, 36.998412]
        ]

    res = {'status': 'ok',
           'pins': pins}
    return jsonify(res)



if __name__ == "__main__":
    app.run()
