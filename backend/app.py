from flask import Flask, request, jsonify
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

# Connect to PostgreSQL
conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD")
)

@app.route("/api/submit", methods=["POST"])
def submit():
    data = request.json
    
    # Validate required fields
    required_fields = ["first_name", "last_name", "email", "password", "contact", "gender"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO users (first_name, last_name, email, password, contact, gender) 
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (data["first_name"], data["last_name"], data["email"], data["password"], data["contact"], data["gender"]))
        
        conn.commit()
        cur.close()
        return jsonify({"message": "User created successfully!"}), 201
    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
