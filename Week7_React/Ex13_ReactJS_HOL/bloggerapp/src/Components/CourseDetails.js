import React from 'react';

function CourseDetails() {
  const courses = [
    { name: 'Angular', date: '2/24/2005' },
    { name: 'React', date: '11/22/2001' },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course, idx) => (
        <div key={idx}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
