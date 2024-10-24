import React from "react";

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{student.name}</h2>
      <p>Student Name:{student.name}</p>
      <p>Student Age:{student.age}</p>
      <p>Student Marks:{student.marks}</p>
    </div>
  );
};

export default StudentProfile;
