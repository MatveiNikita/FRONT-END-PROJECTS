//---task №1
let person = new Object({
  name: "John",
  age: 30,
  city: "New-York",
});

function keyValue(obj) {
  let keys = Object.keys(obj);
  let i = 0;
  while (i < keys.length) {
    let key = keys[i];
    console.log(key + ": " + obj[key]);
    i++;
  }
}
keyValue(person);

//---task №2
function hasKey(obj, key) {
  keysOfObj = Object.keys(obj);
  for (let element of keysOfObj) {
    if (element === key) {
      return true;
    }
  }
  return false;
}
console.log(hasKey(person, "age"));

//--- task №3
function concatParam(obj) {
  let endResult = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      endResult.push(obj[key]);
    }
  }
  return endResult.toString();
}
console.log(concatParam(person));

//--- task №4
function countVowels(str) {
  return str.match(/[aeiouAEIOU]/gi).length;
}

const x = "Hello world, my name is Albert";
console.log(countVowels(x));

//--- №5
const students = {
  John: [8, 9, 10],
  Mary: [9, 9, 10],
  Alex: [6, 8, 7],
};

const averageScores = {};
for (const [student, scores] of Object.entries(students)) {
  const sum = scores.reduce((total, score) => total + score, 0);
  averageScores[student] = sum / scores.length;
}

console.log(averageScores);
//---task №6
function reversWord(str) {
  let tempVar = "";
  for (let index = str.length - 1; index != -1; index--) {
    tempVar += str[index];
  }
  return tempVar;
}
 console.log(reversWord('WOW!'));

 //---task №7
 function polindrom(str) {
  return str === str.split("").reverse().join("")
 }

 console.log(polindrom("level"));