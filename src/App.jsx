import React from "react";
import StudentList from "./components/StudentList";
import StudentProfile from "./components/StudentProfile";
import { useState } from "react";


const App = () => {
  const [students] = useState([
    { name: "Student 1", age: 20, marks: 85 },
    { name: "Student 2", age: 22, marks: 90 },
    { name: "Student 3", age: 19, marks: 75 },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleView = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {selectedStudent ? (
          <div>
            <StudentProfile student={selectedStudent} />
            <button onClick={handleBack}>Back</button>
          </div>
        ) : (
          <StudentList students={students} onView={handleView} />
        )}
      </div>
    </section>
  );
};
export default App;
