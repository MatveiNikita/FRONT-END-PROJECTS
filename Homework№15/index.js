//--- task 1
const studentGrades = [
  { name: "Anna", note: 9 },
  { name: "Denis", note: 7 },
  { name: "Cristian", note: 8 },
  { name: "Daniel", note: 6 },
  { name: "Elena", note: 10 },
];

const sumAverageOfNotes =
  studentGrades.reduce((sum, student) => sum + student.note, 0) /
  studentGrades.length;

//--- task 2
const products = [
  { name: "Tshirt", price: 50, isAvailable: true },
  { name: "Pants", price: 80, isAvailable: false },
  { name: "Jacket", price: 120, isAvailable: true },
  { name: "Shirt", price: 60, isAvailable: true },
  { name: "Skirt", price: 40, isAvailable: false },
];

const availableProductsName = products
  .filter((product) => product.isAvailable)
  .map((product) => product.name);

console.log(availableProductsName);

//---task 3
const numbers = [10, 5, 8, 15, 3, 20];
let maxValue = numbers.reduce((current, nextValue) => {
  return Math.max(current, nextValue);
});

console.log(maxValue);

//---task 4
studentsAndScores = [
  { John: [8, 7, 9] },
  { Mary: [9, 9, 10] },
  { Alex: [6, 8, 7] },
];

const studentsAndAverageScore = studentsAndScores.reduce((current, student) => {
  const [name, scores] = Object.entries(student)[0];
  const averageScore =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;
  current[name] = averageScore.toFixed(1);
  return current;
}, {});

console.log(studentsAndAverageScore);
