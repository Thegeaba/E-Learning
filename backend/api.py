from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import re

from gridfs import GridFS
import os

import bcrypt
import jwt

import emoji

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    print("\N{rolling on the floor laughing}")
    print("Te Querro!!")
    print("\N{rolling on the floor laughing}")

    return "Hello, Flask! Te Querro! \N{rolling on the floor laughing}"

@app.route('/api/create_account', methods=['GET', 'POST'])
def create_acc():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['E-Learning']
    collection = db['Register']

    print("Te Querro baby! \N{rolling on the floor laughing}")
    
    data = request.json

    # Validare pentru numele utilizatorului
    if not re.match("^[a-zA-Z]+$", data['firstName']):
        print("Invalid first name format")
        return jsonify({"error": "Invalid first name format"}), 400

    if not re.match("^[a-zA-Z]+$", data['lastName']):
        print("Invalid last name format")
        return jsonify({"error": "Invalid last name format"}), 400

    if len(data['password']) < 8 or len(data['password']) > 16:
        print("Password must be between 8 and 16 characters long")
        return jsonify({"error": "Password must be between 8 and 16 characters long"}), 400

    if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", data['email']):
        print("Invalid email format")
        return jsonify({"error": "Invalid email format"}), 400

    existing_user = collection.find_one({'email': data['email']})
    if existing_user:
        print("Email already in use")
        return jsonify({"error": "Email already in use"}), 400

    collection.insert_one(data)
    print("Te Querro baby! \N{rolling on the floor laughing}")
    return jsonify({"message": "Account created successfully"}), 201


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['E-Learning']
    collection = db['Register']

    if request.method == 'POST':
        print("Te Querro baby! \N{rolling on the floor laughing}")
        data = request.json
        email = data.get('email')
        password = data.get('password')

        print(data)

        user = collection.find_one({'email': email})

        if user and user['password'] == password:
            print("Yassss")
            return jsonify({'message': 'Login successful'})

        return jsonify({'message': 'Invalid email or password'}), 401
    elif request.method == 'GET':
        return "This is a GET request for the login page."

@app.route('/api/addBook', methods=['POST'])
def add_book():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['E-Learning']
    collection = db['Documents']

    data = request.form.to_dict()
    print(data)

    title = data.get('docTitle')
    description = data.get('description')
    doc_type = data.get('docType')
    file = data.get('file')

    book = {
        'title': title,
        'description': description,
        'type': doc_type,
        'file_path': file
    }
    
    collection.insert_one(book)
    
    return jsonify({'message': 'Book added successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)