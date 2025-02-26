from flask import Flask, request, jsonify
import smtplib
import json
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#path to data files
PET_DATA_FILE = "pets_data.json"
USER_DATA_FILE = "users_data.json"
EMAIL_DATA_FILE = "email_data.json"

SENDER_EMAIL = "PetHeavenAnimalRescue@gmail.com"
SENDER_PASSWORD = "wyzy fbkd hxhz ubom"

def read_pet_data():
    if not os.path.exists(PET_DATA_FILE):
        return { "pets": [] }
    
    try:
        with open(PET_DATA_FILE, "r") as f:
            return json.load(f)
    except json.JSONDecodeError:
        return { "pets": [] }
    
def read_user_data():
    if not os.path.exists(USER_DATA_FILE):
        return { "users": [] }
    
    try:
        with open(USER_DATA_FILE, "r") as f:
            return json.load(f)
    except json.JSONDecodeError:
        return { "users": [] }
    
def write_pet_data(data):
    with open(PET_DATA_FILE, 'w') as file:
        json.dump(data, file, indent=2)

def write_user_data(data):
    with open(USER_DATA_FILE, 'w') as file:
        json.dump(data, file, indent=2)

def sendEmail(data, subject):
    try:
        with open(EMAIL_DATA_FILE, 'r') as file:
            credentials = json.load(file)
            recipient = credentials.get('recipient')
            print(recipient)

            message = MIMEMultipart()
            message["From"] = SENDER_EMAIL
            message["To"] = recipient
            message["Subject"] = subject
            message.attach(MIMEText(str(data), "plain"))

            try:
                server = smtplib.SMTP("smtp.gmail.com", 587)
                server.starttls()
                server.login(SENDER_EMAIL, SENDER_PASSWORD)
                server.send_message(message)
                server.quit()
                print("Email sent successfully")
            except Exception as e:
                print(f"Error sending email: {e}")

        
    except Exception as e:
        print(f"Error reading JSON file: {e}")



# endpoints
@app.route("/api/pets", methods=["GET"])
def getPets():
    data = read_pet_data();
    return jsonify(data)

@app.route("/api/pets/<int:pet_id>", methods=["GET"])
def getPet(pet_id):
    data = read_pet_data();
    pets = data.get("pets", []);
    for pet in pets:
        if pet.get("id") == pet_id:
            return jsonify(pet)
    return jsonify({"error" : "Pet not found."}), 404

@app.route("/api/addPet", methods=["POST"])
def addPet():
    data = read_pet_data();
    newPet = request.json

    petIds = [pet.get('id', 0) for pet in data.get('pets', [])]
    newId = max(petIds, default=0) + 1
    newPet['id'] = newId

    data["pets"].append(newPet)
    write_pet_data(data)

    return jsonify(newPet), 201

@app.route("/api/owners", methods=['POST'])
def add_owner():
    data = read_user_data()
    new_owner = request.json
    
    # Generate a new ID
    owner_ids = [owner.get('id', 0) for owner in data.get('owners', [])]
    new_id = max(owner_ids, default=0) + 1
    new_owner['id'] = new_id
    
    # Add to the list
    data['owners'].append(new_owner)
    write_user_data(data)
    
    return jsonify(new_owner), 201

@app.route("/api/adopt", methods=['POST'])
def adopt_pet():
    data = read_pet_data()
    pet_id = request.json.get('petId')
    
    for pet in data.get('pets', []):
        if pet.get('id') == pet_id:
            sendEmail(pet_id, "Adoption Request")
            return jsonify(pet), 200
    
    return jsonify({"error": "Pet not found"}), 404

@app.route("/api/release", methods=['POST'])
def submit_release():
    petData = read_pet_data()
    userData = read_user_data()
    form_data = request.json
    
    # Extract pet and owner information
    pet_info = {
        'name': form_data.get('petName'),
        'type': form_data.get('petType'),
        'breed': form_data.get('breed'),
        'age': form_data.get('age'),
        'gender': form_data.get('gender'),
        'color': form_data.get('color'),
        'microchipId': form_data.get('microchipId'),
        'medicalInfo': form_data.get('medicalInfo'),
        'status': 'available'
    }
    
    owner_info = {
        'firstName': form_data.get('ownerFirstName'),
        'lastName': form_data.get('ownerLastName'),
        'email': form_data.get('ownerEmail'),
        'phone': form_data.get('ownerPhone'),
        'reason': form_data.get('reason')
    }

    sendEmail(pet_info, "Pet Release Form submitted.")
    
    return jsonify({
        "success": True,
        "message": "Pet release form submitted successfully",
        "pet": pet_info,
        "owner": owner_info
    }), 201


if __name__ == '__main__':
    app.run(debug=True)
