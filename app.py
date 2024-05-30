# app.py
from flask import Flask,render_template


app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")

@app.route('/s1/api/signup')
def user_signup():
    return render_template("signup.html")


@app.route('/s1/api/admin')
def user_login():
    return render_template("admin.html")

@app.route('/s1/api/about')
def about():
    return render_template("about.html")

@app.route('/s1/api/contact')
def contact():
   return render_template("contact_us.html")



if __name__=="__main__":
    app.run(debug=True)