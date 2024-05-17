from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_wtf import FlaskForm
from datetime import datetime, timedelta
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, EqualTo, ValidationError
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_BINDS'] = {
    'userloginData' : 'sqlite:///userLoginDataBase.db',
    'enquiryDataBase': 'sqlite:///enquiryDataBase.db',
    'contactusDataBase': 'sqlite:///contactusDataBase.db',
    'serviceDataBase' : 'sqlite:///serviceDataBase.db'
}

db = SQLAlchemy(app)
migrate = Migrate(app, db)
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(100))
    __bind_key__ = 'userloginData'

    
class EnquiryDataset(db.Model):
    __bind_key__ = 'enquiryDataBase'
    id = db.Column(db.Integer, primary_key=True)
    enquiryName = db.Column(db.String(100))
    enquiryNumber = db.Column(db.String(20))
    enquiryEmail = db.Column(db.String(100))
    enquiryService = db.Column(db.String(100))
    enquiryDate = db.Column(db.DateTime, default=datetime.utcnow)
    
class ContactusDataBase(db.Model):
    __bind_key__ = 'contactusDataBase'
    id = db.Column(db.Integer, primary_key=True)
    contactName = db.Column(db.String(100))
    contactNumber = db.Column(db.String(100))
    contactMessage = db.Column(db.String(500))
    contactDate = db.Column(db.DateTime, default=datetime.utcnow)
    
class ServiceDataBase(db.Model):
    __bind_key__ = 'serviceDataBase'
    id = db.Column(db.Integer, primary_key=True)
    serviceenquiryName = db.Column(db.String(100))
    serviceenquiryNumber = db.Column(db.String(20))
    serviceenquiryEmail = db.Column(db.String(100))
    serviceenquiryPlan = db.Column(db.String(100))
    serviceenquiryService = db.Column(db.String(100))
    serviceDate = db.Column(db.DateTime, default=datetime.utcnow)
    
class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired(), Length(min=4, max=50)])
    password = PasswordField('Password', validators=[
        InputRequired(),
        Length(min=8, message="Password must be 8 characters long"),
        EqualTo('confirm', message='Passwords must match')
    ])
    confirm = PasswordField('Confirm Password')
    key = StringField('Key', validators=[InputRequired()])
    submit = SubmitField('Sign Up')
    
    def validate_password(self, password):
        special_chars = "!@#$%^&*()_+=-[]{}|';:,.<>?"
        if not any(char.isdigit() for char in password.data):
            raise ValidationError('Password must contain at least one digit')
        elif not any(char.isupper() for char in password.data):
            raise ValidationError('Password must contain at least one uppercase letter')
        elif not any(char in special_chars for char in password.data):
            raise ValidationError('Password must contain at least one special character')
        
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired(), Length(min=4, max=50)])
    password = PasswordField('Password', validators=[InputRequired()])
    submit = SubmitField('Login')

@app.route('/enquiryDataset', methods=['POST'])
def enquiryDataset():
    enquiryName = request.form.get('enquiryName')
    enquiryNumber = request.form.get('enquiryNumber')
    enquiryEmail = request.form.get('enquiryEmail')
    enquiryService = request.form.get('enquiryService')
    enquiryDate = datetime.utcnow()
    
    enquiryData = EnquiryDataset(enquiryName=enquiryName, enquiryNumber=enquiryNumber, enquiryEmail=enquiryEmail, enquiryService=enquiryService, enquiryDate=enquiryDate)
    db.session.add(enquiryData)
    db.session.commit()
    return jsonify({"message": "Enquiry Data stored successfully"})

@app.route('/contactDataset', methods=['POST'])
def contactDataset():
    contactName = request.form.get('contactName')
    contactNumber = request.form.get('contactNumber')
    contactMessage = request.form.get('contactMessage')
    contactDate = datetime.utcnow()
    
    contactData = ContactusDataBase(contactName=contactName, contactNumber=contactNumber, contactMessage=contactMessage, contactDate=contactDate)
    db.session.add(contactData)
    db.session.commit()
    return jsonify({"message": "Contact Data stored successfully"})

@app.route('/serviceDataset', methods=['POST'])
def serviceDataset():
    serviceenquiryName = request.form.get('serviceenquiryName')
    serviceenquiryNumber = request.form.get('serviceenquiryNumber')
    serviceenquiryEmail = request.form.get('serviceenquiryEmail')
    serviceenquiryPlan = request.form.get('serviceenquiryPlan')
    serviceenquiryService = request.form.get('serviceenquiryService')
    serviceDate = datetime.utcnow()
    
    serviceData = ServiceDataBase(serviceenquiryName=serviceenquiryName, serviceenquiryNumber=serviceenquiryNumber, serviceenquiryEmail=serviceenquiryEmail, serviceenquiryPlan=serviceenquiryPlan, serviceenquiryService=serviceenquiryService, serviceDate=serviceDate)
    db.session.add(serviceData)
    db.session.commit()
    return jsonify({"message": "Service Data stored successfully"})

@app.route('/register/efilinghub/aGamTechService11918', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        if form.key.data == "aGamTechService11918":
            hashed_password = generate_password_hash(form.password.data)
            new_user = User(username=form.username.data, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            flash('Account created successfully. Please log in.', 'success')
            return redirect(url_for('login'))
        else:
            flash('Invalid key. Please try again.', 'danger')
    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and check_password_hash(user.password, form.password.data):
            flash('Logged in successfully!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password. Please try again.', 'danger')
    return render_template('login.html', form=form)

@app.route('/')
def recent_enquiries():
    today = datetime.now().date()
    yesterday = today - timedelta(days=1)
    today_enquiries = EnquiryDataset.query.filter(EnquiryDataset.enquiryDate >= today).all()
    today_contacts = ContactusDataBase.query.filter(ContactusDataBase.contactDate >= today).all()
    # today_services = ServiceDataBase.query.filter(ServiceDataBase.serviceDate >= today).all()
    yesterday_enquiries = EnquiryDataset.query.filter(EnquiryDataset.enquiryDate >= yesterday, EnquiryDataset.enquiryDate < today).all()
    yesterday_contacts = ContactusDataBase.query.filter(ContactusDataBase.contactDate >= yesterday, ContactusDataBase.contactDate < today).all()
    # yesterday_services = ServiceDataBase.query.filter(ServiceDataBase.serviceDate >= yesterday, ServiceDataBase.serviceDate < today).all()
    return render_template('admin.html', today_enquiries=today_enquiries, yesterday_enquiries=yesterday_enquiries, today_contacts=today_contacts, yesterday_contacst=yesterday_contacts)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)