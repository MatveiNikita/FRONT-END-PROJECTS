let number = 19;
console.log(number % 2 == 0 ? "true" : "false");

let isLoggedIn = false;
console.log(isLoggedIn == true ? "Welcome" : "Get out!!!");

let price = 14.9;
let quantity = 20;
let availability = true;
console.log(
  availability == false
    ? price * quantity
    : "Sorry this product is not availability"
);

let currentDate = new Date();
console.log(
  currentDate.getFullYear() % 4 === 0 &&
    (currentDate.getFullYear() % 400 === 0 ||
      currentDate.getFullYear() % 100 !== 0)
    ? "true"
    : "false"
);

//-------------------------------------------------------------\\

let countryCode = prompt("Select country code: MD, USA, AO, BJ, IQ");

switch (countryCode) {
  case "MD":
    console.log("Moldova");
    break;
  case "USA":
    console.log("United States of America");
    break;
  case "AO":
    console.log("Angola");
    break;
  case "BJ":
    console.log("Benin");
    break;
  case "IQ":
    console.log("Iraq");
    break;
}

let score = 98;
let grade;

switch (true) {
  case score >= 97:
    grade = "A+";
    break;
  case score >= 93:
    grade = "A";
    break;
  case score >= 90:
    grade = "A-";
    break;
  case score >= 87:
    grade = "B+";
    break;
  case score >= 83:
    grade = "B";
    break;
  case score >= 80:
    grade = "B-";
    break;
  case score >= 77:
    grade = "C+";
    break;
  case score >= 73:
    grade = "C";
    break;
  case score >= 70:
    grade = "C-";
    break;
  case score >= 67:
    grade = "D+";
    break;
  case score >= 63:
    grade = "D";
    break;
  case score >= 60:
    grade = "D-";
    break;
  default:
    grade = "F";
}
console.log(grade);

//-------------------------------------------------------------\\

let TellFortune = function (
  countOfChildrens,
  nameOfPartner,
  geographicalLocation,
  post
) {
  console.log(
    `You will be ${post} in ${geographicalLocation}, and will get married to ${nameOfPartner} with ${countOfChildrens} kids`
  );
};

TellFortune(3, "Anna", "Morocco", "SEO");

let CalculatedDogAge = function (yearOfyourDog, rateOfYear = 7) {
  return `Your doggy has ${yearOfyourDog * rateOfYear} year`;
};
console.log(CalculatedDogAge(18, 6));
console.log(CalculatedDogAge(13));

let CalculationSupply = (currentYear, quantityOfFood, maxOfYear = 100) => {
  console.log(
    `You need ${
      (maxOfYear - currentYear) * quantityOfFood
    } of food that to live until ${maxOfYear}`
  );
};

CalculationSupply(8, 0.5, 89);
