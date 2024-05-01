function calculateIBM(height, weight) {
  return weight / height ** 2;
}

function checkBMI(bmi) {
  if (bmi < 18.5) {
    return "You're skinny";
  } else if (bmi < 25) {
    return "You have normal weight";
  } else {
    return "You're B.I.G";
  }
}

const people = [
  { name: "Bob", height: 1.89, weight: 93 },
  { name: "Sarah", height: 1.75, weight: 65 },
];

people.forEach((person) => {
  console.log(
    `${person.name}: ${checkBMI(calculateIBM(person.height, person.weight))}`
  );
});
