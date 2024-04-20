let country = 'China';
let continent = 'Asia';
let population = 1_420_000_000;
let island = false;

let array = [country, continent, population, island];

for (let param of array) {
    console.log(param);
}

console.log(`${country} is located in ${continent}, ${population} people live here`);
