const Bob = {
  heidht: 1.89,
  weight: 93,
  bmi: function () {
    return this.weight / this.heidht ** 2;
  },
  checkIBM: function () {
    const bmi = this.bmi();
    if (bmi < 18.5) {
      return "You're skinny";
    } else if (bmi > 18.5 && bmi < 25) {
      return "You have normal wieght";
    } else {
      return "You're B.I.G";
    }
  },
};

const Sarah = {
  heidht: 1.75,
  weight: 65,
  bmi: function () {
    return this.weight / this.heidht ** 2;
  },
  checkIBM: function () {
    const bmi = this.bmi();
    if (bmi < 18.5) {
      return "You're skinny";
    } else if (bmi > 18.5 && bmi < 25) {
      return "You have normal wieght";
    } else {
      return "You're B.I.G";
    }
  },
};

console.log(Bob.checkIBM())
console.log(Sarah.checkIBM());
