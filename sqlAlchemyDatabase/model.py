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

    #TODO:
    # API_Data Fields
    
    def __repr__(self):
        """Show into about location."""
        pass
        #TODO: Fill in REPR function
        return

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
    #TODO: 
    # API_DATA FIELDS

    def __repr__(self):
        """ Show info about user pet preferances."""
        # TODO: Fill in REPR function
        pass
        return

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
