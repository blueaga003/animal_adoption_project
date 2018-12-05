from flask import Flask, redirect, session, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

#TODO: Import secret key and change to variable
app = Flask(__name__)
app.secret_key = "AB"
if __name__ == "__main__":
    app.debug = True
    DebugToolbarExtension(app)
    app.run(host="0.0.0.0")
