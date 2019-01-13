#!/usr/bin/python3
from flask import Flask, redirect, session, request, render_template, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from model import User, connect_to_db, db, Location, Rating, PetPreference, Comment, Pet
from flask_cors import CORS
#TODO: Import secret key and change to variable

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.secret_key = 'AB'

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    """User signup."""
    if request.method == 'POST':
        data = request.get_json()
        user_email = data['email']
        user_exist_query = db.session.query(User).filter_by(email=user_email).all()

        if user_exist_query == []:
            new_user = []
            new_user = User(email=data['email'], password=data['password'], first_name=data['firstName'], last_name=data['lastName'], default_location='San Francisco')
#           if data['species'] == []:
#               data['species'] = 'AAA'
#           if data['gender'] == []:
#               data['gender'] = 'AAA'
#           if data['animalActivityLevels'] == []:
#               data['animalActivityLevels'] = 'AAA'
            #if data['age'] == []:
            #    data['age'] = 'AAA'
            db.session.add(new_user)
            db.session.commit()
            new_user_preferences = PetPreference(user_id=new_user.user_id, species=data['species'],  activity_level=data['animalActivityLevels'], sex=data['gender']) #add age and other columns
            print(new_user_preferences)
            db.session.add(new_user_preferences)
            db.session.commit()
            return 'Success'
        else:
            return 'User already exists'
                
#put in session as logged in
    print("success signup")
    return "hi"
    
@app.route('/login', methods = ['GET', 'POST'])
def login():
    """User login."""
    if request.method == 'POST':
        data = request.get_json()
        user_email = data['email']
        user_query = db.session.query(User).filter_by(email=user_email).all()
        user_info = {'user':user_query}
        return jsonify(user_info)
            

        #model.User.query.filterby(model.User
#put in session as logged in
        print("success login")
        return "hi"
    if request.method == 'GET':
       return "hey"
#Set session/cookie


if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    connect_to_db(app)
    app.run(host="0.0.0.0")
