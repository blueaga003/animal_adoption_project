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

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    """User login."""
   # print(request.headers['x-access-token'])
    data = request.json
    print(data)
#put in session as logged in
    print("success signup")
    return "hi"
    
@app.route('/login', methods = ['POST'])
def login():
    """User login."""
    print(request)
    print(request.json)
#put in session as logged in
    print("success login")
    return "hi"
#Set session/cookie


if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    app.run(host="0.0.0.0")
