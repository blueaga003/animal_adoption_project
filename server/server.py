#!/usr/bin/python3
from flask import Flask, redirect, session, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
#from model import connect_to_db, User, Location, Rating, PetPreference, Comment, Pet 
#TODO: Import secret key and change to variable

app = Flask(__name__)
app.secret_key = 'AB'

@app.route('/signup', methods = ['GET'])
def login():
    """User login."""

    print("success")
    return "hi"
    
#Set session/cookie


if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    app.run(host="0.0.0.0")
