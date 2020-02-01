from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return 'Bresilient World'
    #return app.send_static_file('/public/index.html')


@app.route('/public/<path:path>')
def send_files(path):
    return send_from_directory('public', path)


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('public/js', path)


if __name__ == "__main__":
    app.run()
