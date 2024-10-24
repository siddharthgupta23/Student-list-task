import React from "react";

const StudentList = ({ students, onView }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Student List</h2>
      <ul className="space-y-2">
        {students.map((student, index) => (
          <div key={index}>
            <div>{student.name}</div>
            <button onClick={() => onView(student)}>View</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
