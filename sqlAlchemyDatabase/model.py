"""Models and database functions for pets database."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """User model."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    email = db.Column(db.String(100), nullable=False,)
    username = db.Column(db.String(30), nullable=False,)
    password = db.Column(db.String(30), nullable=False,)
    first_name = db.Column(db.String(25), nullable=False,)
    last_name = db.Column(db.String(25), nullable=False,)
    default_location = db.Column(db.String(30), nullable=False,)

    def __repr__(self):
        """Show info about user."""

        return "< user_id={}, first_name={}, last_name={}, username={}, password={}, email={}, default_location={} >".format(self.user_id, self.first_name, self.last_name, self.username, self.password, self.email, self.default_location)

class Location(db.Model):
    """Location model."""

    __tablename__ = "locations"

        location_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
        location_name = db.Column(db.String(100), nullable=False,)
        address_1 = db.Column(dbString(50), nullable=False,)
        address_2 = db.Column(db.String(50), nullable=True,)
        address_3 = db.Column(db.String(50), nullable=True,)
        state = db.Column(db.String(2), nullable=False,)
        latitude = db.Column(db.Float, nullable=False,)
        longitude = db.Column(db.Float, nullable=False,)
        # TODO POSSIBLY ADD MORE DATA i.e. HOURS
        #TODO: Fill in REPR function

    def __repr__(self):
        """Show into about location."""

    return "< location_id={}, location_name={}, address_1={}, address_2={}, address_3={}, state={}, latitude={}, longitude={} >".format(self.location_id, self.location_name, self.address_1, self.address_2, self.address_3, self.state, self.latitude, self.longitude)

class Rating(db.Model):
    """Location rating model."""

    __tablename__ = "ratings"

    rating_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.location_id"),)
    rating_value = db.Column(db.Integer, nullable=False,)

    def __repr__(self):
        """Show info about rating."""

        return "< rating_id={}, user_id={}, location_id={}, rating_value={}".format(self.rating_id, self.user_id. self.location_id, self.rating_value)

class PetPreferances(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),)
    animal_species = db.Column(db.String(25), nullable=True,)
   # animal_breed = db.Column(db.String(50), nullable=True,)
   # animal_activity_level = dbColumn(db.String(25), nullable=True,)
   # animal_age = db.column(db.String(45), nullable=True,)
   # animal_exercise_needs = db.Column(db.String(45), nullable=True,)
   # animal_grooming_needs = db.Column(db.String(45), nullable=True,)
   #TODO: Possible add more after viewing seed data 
    

    def __repr__(self):
        """ Show info about user pet preferances."""
        # TODO: Fill in REPR function
        return "< user_id={}, animal_species={}".format(self.user_id, self.animal_species)

class Comment(db.model):
    """Comment model."""

    comment_id = db.Column(db.Integer, primary_key=True, autoincrement=True,)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.location_id"),)
    comment_body = db.Column(db.String(300), nullable=False,)
    visible_to_users = db.Column(db.Bit, default=1, nullable=False,)
    def __repr__(self):
        """ Show info about comment."""

        return "< comment_id={}, user_id={}, location_id={}, comment_body={}, visibile_to_users={} >".format(self.comment_body, self.user_id, self.location_id, self.comment_body, self.visible_to_users)
