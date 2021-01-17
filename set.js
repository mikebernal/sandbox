const students = [
  {
      id: 200601335,
      name: 'Mike Bernal',
      course: 'Software Engineering'
  },
  {
      id: 200601336,
      name: 'Mina',
      course: 'Cyber Security'
  },
  {
      id: 200601337,
      name: 'Reese Fenlon',
      course: 'Information Technology'
  },
  {
      id: 200601338,
      name: 'James Johnstone',
      course: 'Computer Science'
  },
  {
      id: 200601339,
      name: 'Lloyd Cabigon',
      course: 'Software Engineering'
  },
  {
      id: 200601340,
      name: 'Aleph Hershal',
      course: 'Cyber Security'
  },
  {
      id: 200601341,
      name: 'Johaness Trinidad',
      course: 'Information Technology'
  },
  {
      id: 200601342,
      name: 'Avitus Shim',
      course: 'Computer Science'
  }
];


const courses = [...new Set(
  students.map((student) => (
      student.course
  ))
)];

console.log(courses);
