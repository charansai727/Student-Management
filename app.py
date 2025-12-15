from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'charan@0727'
app.config['MYSQL_DB'] = 'student_db'

mysql = MySQL(app)

@app.route('/students', methods=['GET'])
def get_students():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM students")
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/students', methods=['POST'])
def add_student():
    student = request.json
    cursor = mysql.connection.cursor()
    cursor.execute(
        "INSERT INTO students (name, email, course) VALUES (%s, %s, %s)",
        (student['name'], student['email'], student['course'])
    )
    mysql.connection.commit()
    return jsonify({"message": "Student added successfully"})

if __name__ == '__main__':
    app.run(debug=True)
