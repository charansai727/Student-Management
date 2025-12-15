import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  const addStudent = async () => {
    await axios.post("http://localhost:5000/students", {
      name,
      email,
      course
    });
    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Course" onChange={e => setCourse(e.target.value)} />
      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((s) => (
          <li key={s[0]}>{s[1]} - {s[3]}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
