// this is your main.js script

let allowedToDrive = () => {
  if ((age = 30)) {
    console.log("You are old enough to drive");
  } else {
    console.log("You are left with 3 years to drive");
  }
};

let studentsGrade = (nota) => {
  if (nota <= 100 && nota >= 80) {
    return "A";
  } else if (nota >= 70 && nota <= 89) {
    return "B";
  } else if (nota >= 60 && nota <= 69) {
    return "C";
  } else if (nota >= 50 && nota <= 59) {
    return "D";
  } else if (nota >= 0 && nota <= 49) {
    return "F";
  }
};

console.log(studentsGrade(24));
