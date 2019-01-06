#!/usr/bin/python3
from flask import Flask, redirect, session, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
#from model import User, Location, Rating, PetPreference, Comment, Pet
import model
from flask_cors import CORS
#TODO: Import secret key and change to variable

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.secret_key = 'AB'

@app.route('/signup', methods = ['POST'])
def signup():
    """User login."""
#put in session as logged in
    print("success")
    return "hi"
    
#Set session/cookie


if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    app.run(host="0.0.0.0")
