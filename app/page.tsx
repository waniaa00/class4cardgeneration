import React from 'react';

type Student = {
  name: string;
  rollNumber: number;
  age: number;
  gender: string;
  day: string;
};

const students: Student[] = [
  {
    name: 'Bisha',
    rollNumber: 1234,
    age: 16,
    gender: 'Female',
    day: 'monday'
  },
  {
    name: 'Zymal',
    rollNumber: 1475,
    age: 18,
    gender: 'Female',
    day: 'friday'
  },
  {
    name: "Zuhayr",
    rollNumber: 4268,
    age: 19,
    gender: 'Male',
    day: 'saturday'
  },
  
];

const Students = () => {
  return (
    <div className='bg-slate-400'>
      <h1>Student List:</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {students.map((student, index) => (
          <div
            key={index}
            style={{
              border: '1px solid black',
              padding: '20px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              maxWidth: '400px',
              backgroundColor:'honeydew',
              color:"black"
              
            }}
          >
          
            <div>
              <h2>Name: {student.name}</h2>
              <p>Roll Number: {student.rollNumber}</p>
              <p>Age: {student.age}</p>
              <p>Gender: {student.gender}</p>
              <p>Day: {student.day}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;