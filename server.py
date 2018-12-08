#!/usr/bin/python3
from flask import Flask, redirect, session, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
#from jinja2 import StrictUndefined

#TODO: Import secret key and change to variable

app = Flask(__name__)
#app.jinja_env.undefined = StrictUndefined
#app.jinja_env.auto_reload = True

app.secret_key = "AB"

@app.route('/homepage')
def view_homepage():
    """Views homepage of app."""
    return render_template('homepage.html')

#Set session/cookie

@app.route('/profile_sign_up')
def view_profile_sign_up():
    """Views profile set up page."""
    return render_template('profile_set_up.html')

@app.route('/search_pets')
def view_pet_search_page():
    """Views pet search page."""
    return render_template('pet_search.html')

@app.route('/search_location')
def view_location_search_page():
    """Views location search page."""
    return render_template('location_search.html')


if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    app.run(host="0.0.0.0")
