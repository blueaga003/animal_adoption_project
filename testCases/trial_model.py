from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
db = SQLAlchemy()

def connect_to_db(app):
    """Connet to database."""

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///trial_model'
    app.config['SQLALCHEMY_ECHO'] = False
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)

class User(db.Model):
    """User model."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    email = db.Column(db.String(100), nullable=False, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String(30), nullable=False,)
    first_name = db.Column(db.String(25), nullable=False,)
    last_name = db.Column(db.String(25), nullable=False,)
    default_location = db.Column(db.String(30), nullable=False,)
    pet_preferences = db.relationship("PetPreferences")

    def __repr__(self):
        """Show info about user."""

        return "< user_id={}, first_name={}, last_name={}, username={}, password={}, email={}, default_location={} >".format(self.user_id, self.first_name, self.last_name, self.username, self.password, self.email, self.default_location)

class PetPreferences(db.Model):
    """Pet Preferences."""

    __tablename__ = "pet_preferences"

    preferance_key = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),) #Use relationship to autofill value, don't need backref but useful to learn about
    animal_species = db.Column(db.String(25), nullable=True,)
    animal_breed = db.Column(db.String(50), nullable=True,)
    animal_activity_level = db.Column(db.String(25), nullable=True,)
    animal_age = db.Column(db.String(45), nullable=True,)
    animal_exercise_needs = db.Column(db.String(45), nullable=True,)
    animal_grooming_needs = db.Column(db.String(45), nullable=True,)

    def __repr__(self):
        """ Show info about user pet preferences."""
        # TODO: Fill in REPR function
        return "< user_id={}, animal_species={}".format(self.user_id, self.animal_species)

connect_to_db(app)
print("Connected to database.")
db.create_all()
