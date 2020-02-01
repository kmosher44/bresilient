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
            "markerLoc": [-121.623069, 37.019780],  # Array [lng, lat]
            "isLowIncome": False,  # Boolean
            "loadIndex": 100,  # Integer, 0 - 100
            "loadDensity": "27 MW",  # String,
            "coordinates": [
                [
                    [
                        -121.55934804760764,
                        36.98474118666458
                    ],
                    [
                        -121.55024999462927,
                        36.98432981841435
                    ],
                    [
                        -121.53462880932638,
                        37.00283918738357
                    ],
                    [
                        -121.57428258740268,
                        37.032718878774986
                    ],
                    [
                        -121.55934804760764,
                        36.98474118666458
                    ]
                ]
            ]
        },
        {
            "type": "load",  # load, fire, generate
            "markerLoc": [-121.560769, 37.007519],  # Array [lng, lat]
            "isLowIncome": True,  # Boolean
            "loadIndex": 24,  # Integer, 0 - 100
            "loadDensity": "6.5 MW",  # String,
            "coordinates": [

                [
                    [
                        -121.56140798413122,
                        36.989677432157166
                    ],
                    [
                        -121.58664220654313,
                        36.97843329573736
                    ],
                    [
                        -121.6012334235844,
                        36.99571018607898
                    ],
                    [
                        -121.56758779370162,
                        37.01078997719476
                    ],
                    [
                        -121.56140798413122,
                        36.989677432157166
                    ]
                ]
            ]
        },
        {
            "type": "load",  # load, fire, generate
            "markerLoc": [-121.580479, 37.009911],  # Array [lng, lat]
            "isLowIncome": True,  # Boolean
            "loadIndex": 26,  # Integer, 0 - 100
            "loadDensity": "7.1 MW",  # String,
            "coordinates": [
                [
                    [
                        -121.60157674633817,
                        36.996258594525
                    ],
                    [
                        -121.6008901008303,
                        37.03532251537747
                    ],
                    [
                        -121.57496923291052,
                        37.032307770098924
                    ],
                    [
                        -121.5677594550785,
                        37.011201202323505
                    ],
                    [
                        -121.60157674633817,
                        36.996258594525
                    ]
                ]
            ]
        },
        {
            "type": "load",  # load, fire, generate
            "markerLoc": [-121.575173, 36.998412],  # Array [lng, lat]
            "isLowIncome": False,  # Boolean
            "loadIndex": 15,  # Integer, 0 - 100
            "loadDensity": "4.1 MW",  # String,
            "coordinates": [
                [
                    [
                        -121.60226339184604,
                        36.99653279726468
                    ],
                    [
                        -121.63848394238302,
                        37.0088708971745
                    ],
                    [
                        -121.62749761425829,
                        37.03354108945132
                    ],
                    [
                        -121.6008901008303,
                        37.035459546410024
                    ],
                    [
                        -121.60226339184604,
                        36.99653279726468
                    ]
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
