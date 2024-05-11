//---1 task
const fruits = ["apple", "banana", "orange"];

fruits.forEach((element) => {
  console.log(element);
});

//---2 task
let count = 0;

const number = [1, 2, 3, 4, 5];
for (let index = 0; index < number.length; index++) {
  count += number[index];
}
console.log(count);

//---3 task
const names = ["John", "Jane", "Mikhael", "Poli", "Alex"];
const countOfLenght = [];

names.forEach((element) => {
  countOfLenght.push(element.length);
});

//---4 task
const departments = new Map([
  ["Back", ["Nichita", "Alex", "Robin"]],
  ["Front", ["Pedro", "Ivan", "Artur"]],
  ["HR", ["Nina", "Boris", "Oleg"]],
]);

const arrOfnames = [];

departments.forEach((value, key) => {
  arrOfnames.push(value.sort());
});

console.log(arrOfnames);

//---5 task
const person = {
  name: "John",
  lastName: "Doe",
  age: 30,
  profession: "developer",
};
function count1(obj) {
  return Object.getOwnPropertyNames(obj).length;
}
// task 6
let a = prompt("Input the number: ");
const arr = [];
for (let i = 1; i <= a; i++) {
  arr.push(i);
}
console.log(arr);

//--- task 7
const arrOfNumber = [1, 56, 78, 34, 13, 8];
let maxElement = arrOfNumber[0];

arrOfNumber.forEach((element) => {
  if (element > maxElement) {
    maxElement = element;
  }
});
console.log(maxElement);

//---task 8
const score = new Map([
  ["math", 8],
  ["literature", 9],
  ["history", 10],
]);

let avverageScore = 0;

score.forEach((value) => {
  avverageScore += value / score.size;
});

console.log(avverageScore)

//task 9
const dog = new Object({
  name: "Loop",
  age: 5,
  color: "Black",
  counOfPuppies: 5,
  puppies: []
})
const nameOfPuppies = []
for (let index = 1; index <= dog.counOfPuppies; index++) {
  nameOfPuppies.push(`Puppies${index}`)
}

dog.puppies = nameOfPuppies;

console.log(dog.puppies)