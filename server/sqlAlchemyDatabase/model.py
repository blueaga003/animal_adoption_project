from flask_sqlalchemy import SQLAlchemy
import sys, json, re
sys.path.append("..")
from server import app

db = SQLAlchemy()

def connect_to_db(app):
    """Connect to database from Flask app."""

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_project'
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)

class User(db.Model):
    """User model."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    email = db.Column(db.String(100), nullable=False, unique=True,)
    username = db.Column(db.String(30), nullable=False, unique=True,)
    password = db.Column(db.String(30), nullable=False,)
    first_name = db.Column(db.String(25), nullable=False,)
    last_name = db.Column(db.String(25), nullable=False,)
    default_location = db.Column(db.String(30), nullable=False,)
    pet_preferences = db.relationship("PetPreferences")
    rating = db.relationship("Rating")
    comment = db.relationship("Comment")


    def __repr__(self):
        """Show info about user."""

        return "< user_id={}, first_name={}, last_name={}, username={}, password={}, email={}, default_location={} >".format(self.user_id, self.first_name, self.last_name, self.username, self.password, self.email, self.default_location)

class Location(db.Model):
    """Location model."""

    __tablename__ = "locations"

    location_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    location_name = db.Column(db.String(100), nullable=False,)
    address_1 = db.Column(db.String(50), nullable=True,)
    address_2 = db.Column(db.String(50), nullable=True,)
    address_3 = db.Column(db.String(50), nullable=True,)
    city = db.Column(db.String(30), nullable=False,)
    state = db.Column(db.String(2), nullable=False,)
    latitude = db.Column(db.Float, nullable=False,)
    longitude = db.Column(db.Float, nullable=False,)
    title = db.Column(db.String(20), nullable=False,)
    rating = db.relationship("Rating")
    comment = db.relationship("Comment")
    # TODO POSSIBLY ADD MORE DATA i.e. HOURS

    def __repr__(self):
        """Show into about location."""
# call funcition in place of title to combine the two areas
        return "< location_id={}, location_name={}, address_1={}, address_2={}, address_3={}, city={}, state={}, latitude={}, longitude={}, title >".format(self.location_id, self.location_name, self.address_1, self.address_2, self.address_3, self.city, self.state, self.latitude, self.longitude, self.title)

    def update_locations():
        """Adds new location data to database."""

        json_data = open("location_data.json")
        all_new_locations = json.load(json_data)
        new_locations = []
        i = 0
        for location in all_new_locations["businesses"]:
            new_entry = Location(location_name = location["name"], address_1 = location["location"]["address1"], address_2 = location["location"]["address2"], address_3 = location["location"]["address3"], city = location["location"]["city"], state = location["location"]["state"], latitude = location["coordinates"]["latitude"], longitude = location["coordinates"]["longitude"], title = location["categories"][0]["title"])
            new_locations.append(new_entry)
        db.session.add_all(new_locations)
        db.session.commit()
        json_data.close()

class Rating(db.Model):
    """Rating model."""

    __tablename__ = "ratings"

    rating_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.location_id"),)
    rating_value = db.Column(db.Integer, nullable=False,)

    def __repr__(self):
        """Show info about rating."""

        return "< rating_id={}, user_id={}, location_id={}, rating_value={}".format(self.rating_id, self.user_id. self.location_id, self.rating_value)

class PetPreference(db.Model):
    """Pet preferences model."""

    __tablename__ = "pet_preferences"
    preferance_key = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),) #Use relationship to autofill value, don't need backref but useful to learn about
    animal_species = db.Column(db.String(50), nullable=True,)
    animal_breed = db.Column(db.String(50), nullable=True,)
    animal_activity_level = db.Column(db.String(50), nullable=True,)
    animal_age = db.Column(db.String(45), nullable=True,)
    animal_grooming_needs = db.Column(db.String(45), nullable=True,)
   #TODO: Possible add more after viewing seed data

    def __repr__(self):
        """ Show info about user pet preferances."""

        return "< user_id={}, animal_species={}, animal_breed={}, animal_activity_level={}, animal_age={}, animal_grooming_needs={}".format(self.user_id, self.animal_species, self.animal_breed, self.animal_activity_level, self.animal_age, self.animal_grooming_needs)

class Comment(db.Model):
    """Comment model."""

    __tablename__ = "comments"

    comment_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.location_id"),)
    comment_body = db.Column(db.String(300), nullable=False,)
    visible_to_users = db.Column(db.Boolean, default=1, nullable=False,)

    def __repr__(self):
        """ Show info about comment."""

        return "< comment_id={}, user_id={}, location_id={}, comment_body={}, visibile_to_users={} >".format(self.comment_body, self.user_id, self.location_id, self.comment_body, self.visible_to_users)

class Pet(db.Model):
    """Pets model."""

    __tablename__ = "pets"
    animal_id = db.Column(db.Integer, primary_key=True, unique=True,)
    animal_name = db.Column(db.String(50), nullable=False,)
    animal_species = db.Column(db.String(50), nullable=False,)
    animal_breed = db.Column(db.String(50), nullable=False,)
    animal_activity_level = db.Column(db.String(50), default="Unknown",)
    animal_age = db.Column(db.String(45), nullable=False, default="Unknown",)
    animal_grooming_needs = db.Column(db.String(45), nullable=False, default="Unknown")
    animal_adoption_status = db.Column(db.String(1), nullable=False, default="Y")
    animal_url = db.Column(db.String(200),nullable=True,)

    def __repr__(self):
        """ Show info about pets."""

        return "< animal_id={}, animal_name={}, animal_species={}, animal_breed={}, animal_activity_level={}, animal_age={}, animal_grooming_needs={}".format(self.animal_id, self.animal_name, self.animal_species, self.animal_breed, self.animal_activity_level, self.animal_age, self.animal_grooming_needs, self.animal_adoption_status, self.animal_url)

    def update_pets():
        """Adds new pet data to database."""

        json_data = open("pet_data.json")
        all_new_pets = json.load(json_data)
        new_pets = []
        i = 0
        for pet in all_new_pets["pets"]:
            new_entry = Pet(animal_id = pet["animalID"], animal_name = pet["name"], animal_species = pet["species"], animal_breed = pet["primaryBreed"], animal_activity_level =  pet["activityLevel"], animal_age = pet["age"], animal_grooming_needs = pet["groomingNeeds"], animal_url = "NA")
            # Cleaning data
            # Does not include pet if the species is not listed
            if new_entry.animal_species == "":
                continue
            if new_entry.animal_breed == "":
                new_entry.animal_breed = "Unknown"
            # Does not include pet if the name has more than two spaces or certain symbols (data cleaning)
            if (new_entry.animal_name.count(" ")) > 1:
                continue
            #if re.search("*-(", new_entry.animal_name):
            #       continue
            if new_entry.animal_activity_level =="":
                new_entry.animal_activity_level = "Unknown"
            if new_entry.animal_age =="":
                new_entry.animal_age = "Unknown"
            if new_entry.animal_grooming_needs =="":
                new_entry.animal_grooming_needs = "Unknown"

            new_pets.append(new_entry)
            
        db.session.add_all(new_pets)
        db.session.commit()
        json_data.close()

connect_to_db(app)
print("Connected to database.")
if db.create_all():
    print("Database successfully created.")
