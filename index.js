const classA = [
  {
    name: "Mayk",
    grade: 9.8,
  },
  {
    name: "Brenda",
    grade: 10,
  },
  {
    name: "Eder",
    grade: 2,
  },
  {
    name: "Mais um student",
    grade: 10,
  },
];

const classB = [
  {
    name: "Joao",
    grade: 10,
  },
  {
    name: "Leonardo",
    grade: 10,
  },
  {
    name: "Felipe",
    grade: 0,
  },
  {
    name: "Novo Aluno",
    grade: 5,
  },
];

function calculateAverage(students) {
  let sum = 0;
  
  for (let i = 0; i < students.length; i++) {
    // i = i +1
    sum = sum + students[i].grade;
  }

  const average = sum / students.length;

  return average;
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congratulations.`);
  } else {
    console.log(`${turma} average: ${average}. Is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`);
  }
}

function studentsReprovados(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

studentsReprovados(classA);
studentsReprovados(classB);
