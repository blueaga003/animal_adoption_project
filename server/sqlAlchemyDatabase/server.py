#!/usr/bin/python3
from flask import Flask, redirect, session, request, render_template, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from model import User, connect_to_db, db, Location, Rating, PetPreference, Comment, Pet
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
import json

#TODO: Import secret key and change to variable

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'secret'
jwt = JWTManager(app)
CORS(app, supports_credentials=True)
app.secret_key = 'AB'


# Endpoints
@app.route('/register', methods = ['GET', 'POST'])
def register():
    """User register."""
    if request.method == 'POST':
        data = request.get_json()
        user_email = data['email']
        user_exist_query = db.session.query(User).filter_by(email=user_email).first()
        if user_exist_query == None:
            new_user = []
            new_user = User(email=data['email'], password=data['password'], first_name=data['firstName'], last_name=data['lastName'], default_location='San Francisco')
            db.session.add(new_user)
            db.session.commit()
            access_token = create_access_token(identity = data['email'])
            refresh_token = create_refresh_token(identity = data['password'])
            new_user_preferences = PetPreference(user_id=new_user.user_id, species=data['species'],  activity_level=data['animalActivityLevels'], sex=data['gender']) #add age and other columns
       #     print(new_user_preferences)
            db.session.add(new_user_preferences)
            db.session.commit()
            return jsonify({'user':data['email'], 'access_token': access_token, 'refresh_token': refresh_token})
        else:
            user_info={'error': 'User already exists'}
            return jsonify(user_info)

@app.route('/login', methods = ['GET', 'POST'])
#@jwt_required
def login():
    """User login."""
    if request.method == 'POST':
        data = request.get_json()
        user_email = data['email']
        user_query = db.session.query(User).filter_by(email=user_email).first()
        access_token = create_access_token(identity = data['email'])
        refresh_token = create_refresh_token(identity = data['password'])
        if user_query == None or user_query.password != data['password']:
            return jsonify({'error':['Username or password is incorrect']})
        user_info = {'user':data['email']}
        return jsonify(user_info)

#put in session as logged in
        print("success login")
        return "hi"
    if request.method == 'GET':
       return "hey"
#Set session/cookie

@app.route('/petSearch', methods = ['GET', 'POST'])
@jwt_required
def petSearch():
    """Pet Search."""
    if request.method == 'POST':
        data = request.get_json()
        genders = data['gender']
        front_species = str(data['species'])
        active_levels = data['activityLevels']
        pet_query = db.session.query(Pet)
        if active_levels != []:
            pet_query = pet_query.filter(Pet.active_levels.in_(active_levels))
        if front_species != '':
             pet_query = pet_query.filter(Pet.species==front_species)
        if genders != []:
            pet_query = pet_query.filter(Pet.gender.in_(genders))
        final_pet_query = pet_query.all()
        if final_pet_query != []:
            selections = []
            pet_return_data = {}
            for pet in final_pet_query:
                selections.append((pet.toString()))
            return jsonify({"pets" : selections})
        else:
            return jsonify({'error':'No results'})
        return jsonify('hi')

if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    connect_to_db(app)
    app.run(host="0.0.0.0")
