import sys
from trial_model import connect_to_db, app, db, User, PetPreferences

def example_data():
    """Mock data for testing."""

    u1 = User(email='a@gmail.com', username='blue', password='b', first_name='Angie', last_name='How', default_location='Sunnyvale')
    db.session.add(u1)
    p1 = PetPreferences(user_id=1, animal_species='dog', animal_breed='lab', animal_activity_level='a lot', animal_age=7, animal_exercise_needs='a lot!', animal_grooming_needs=None )
    db.session.add(p1)
    db.session.commit()

connect_to_db(app)
print("Connected to database.")

example_data()
