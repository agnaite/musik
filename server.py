import spotipy
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
sp = spotipy.Spotify()


@app.route('/')
def home():
    """Display home page"""

    return render_template('index.html')


@app.route('/search')
def get_tracks_by_band():
    """Search Spotify API for band name and return 20 songs"""

    band = request.args.get('band')
    results = sp.search(q=band, limit=20)

    return jsonify(results)


if __name__ == "__main__":

    app.run(debug=True)
