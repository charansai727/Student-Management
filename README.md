# 🎓 Student Management System (Full Stack Project)

A simple **full-stack CRUD application** built using **React, Python (Flask), and MySQL**. This project demonstrates how a frontend React application communicates with a Python backend through REST APIs, with data stored and managed in a relational database.

This project is ideal for **students, freshers, and internship applicants** to showcase full-stack development skills.

---

## 🚀 Features

* Add new students
* View list of students
* Backend REST APIs using Flask
* MySQL database integration
* React-based user interface
* Cross-Origin support using Flask-CORS

---

## 🛠️ Technologies Used

### Frontend

* React
* Axios
* HTML, CSS, JavaScript

### Backend

* Python
* Flask
* Flask-MySQLdb
* Flask-CORS

### Database

* MySQL (Oracle SQL concepts like tables, keys, CRUD operations applied)

### Tools

* VS Code
* MySQL Workbench
* Node.js & npm

---

## 📂 Project Structure

```
student-management/
│
├── backend/
│   ├── venv/
│   ├── app.py
│   └── requirements.txt
│
└── frontend/
    └── student-ui/
        ├── src/
        ├── public/
        └── package.json
```

---

## ⚙️ Backend Setup (Flask)

### 1️⃣ Create Virtual Environment

```bash
cd backend
python -m venv venv
venv\Scripts\activate
```

### 2️⃣ Install Dependencies

```bash
pip install flask flask-mysqldb flask-cors
```

### 3️⃣ Run Backend Server

```bash
python app.py
```

Backend will run on:

```
http://127.0.0.1:5000
```

Test API:

```
http://127.0.0.1:5000/students
```

---

## ⚛️ Frontend Setup (React)

### 1️⃣ Install Dependencies

```bash
cd frontend/student-ui
npm install
```

### 2️⃣ Start React App

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🗄️ Database Setup (MySQL)

```sql
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(50)
);
```

---

## 🔗 API Endpoints

| Method | Endpoint  | Description        |
| ------ | --------- | ------------------ |
| GET    | /students | Fetch all students |
| POST   | /students | Add a new student  |

---

## 📸 Output

* React UI to add students
* Data persisted in MySQL
* Live update after insertion

---

## 🧠 Learning Outcomes

* Full-stack application development
* REST API design
* MySQL database integration with Python
* React state management
* Cross-origin communication

---

## 📄 Resume Description

> Developed a full-stack Student Management System using React, Python (Flask), and MySQL. Implemented RESTful APIs for CRUD operations and designed a responsive UI to manage student records efficiently.

---

## 🔮 Future Enhancements

* Update & Delete operations
* Search and filter students
* Authentication & authorization
* Deployment on cloud

---

## 👤 Author

**Charan Sai**
Final Year Engineering Student
Aspiring Software Engineer

---

⭐ If you like this project, don’t forget to star the repository!
