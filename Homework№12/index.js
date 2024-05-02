//---push method practice---
const fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log(fruits + ": " + fruits.length);

//---pop/shift method practice---
const numbers = [0, 1, 2, 3, 4];
numbers.pop();
numbers.shift();
console.log(numbers);

//---find methods
const coloros = ["red", "green", "blue", "yellow"];
console.log(coloros.indexOf("green"));
console.log(coloros.includes("orange"));

//---unshift() and indexOf() methods
const names = ["John", "Jane", "Mike", "Jennifer"];
names.unshift("David");
console.log(names.indexOf("Mike"));
console.log(names);

//---task with include method
const numbers2 = [2, 4, 6, 8, 10];
numbers2.push(12);
console.log(numbers2.includes(5));
console.log(numbers2);

//---practice method sort
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Setember",
  "October",
  "November",
  "December",
];
months.sort();
console.log(
  months.filter((a) => {
    return a.length > 5;
  })
);

const newMoths = months.slice(6, 11);
console.log(newMoths);
let txtOfArray = newMoths.join("-");
console.log(txtOfArray);
