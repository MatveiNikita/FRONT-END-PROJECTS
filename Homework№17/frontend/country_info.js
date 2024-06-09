document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/api/countries/1")
    .then((response) => response.json())
    .then((country) => {
      console.log(country);
      const nameOfCountry = document.getElementById("nameOfCountry");
      if (nameOfCountry) nameOfCountry.textContent = country.name;
      const population = document.getElementById("populationOfCountry");
      if (population) population.textContent = country.population;
      const countryCode = document.getElementById("CountryCode");
      if (countryCode) countryCode.textContent = country.currency;

      const imageOfObject = country.sourceOfThePicture;
      console.log(imageOfObject);
      const image = document.getElementById("countryImage");
      if (imageOfObject) image.src = imageOfObject;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
