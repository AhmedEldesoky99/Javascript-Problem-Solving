"use strict";

//challenge 2
function calcAverageHumanAge(dogsAges) {
  const dogHumanAge = dogsAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const adults = dogHumanAge.filter((dogAge) => dogAge >= 18);
  // console.log(adults);

  const sum = adults.reduce((acc, dogAge) => acc + dogAge, 0);
  // console.log(sum);
  const avg = sum / adults.length;

  console.log(avg);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//another solution
const calcAverageHumanAge2 = (dogsAges) =>
  dogsAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge >= 18)
    .reduce((acc, adult, i, arr) => acc + adult / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
