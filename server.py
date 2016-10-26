import spotipy
from flask import Flask, render_template, request, jsonify, session, redirect, flash

app = Flask(__name__)
sp = spotipy.Spotify()


@app.route('/')
def home():

    return render_template('index.html')


@app.route('/search')
def get_tracks_by_band():

    band = request.args.get('band')

    print band

    results = sp.search(q=band, limit=20)
    # for i, t in enumerate(results['tracks']['items']):
    #     print ' ', i, t['name']
    print results
    return jsonify(results)

    # return render_template('index.html',
    #                 songs=results)


if __name__ == "__main__":

    app.run(debug=True)
