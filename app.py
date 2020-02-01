from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return 'Bresilient World'


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


if __name__ == "__main__":
    app.run()


'''from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Bresilient World'

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')
'''
from flask import Flask, request, send_from_directory
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('bindex.html')