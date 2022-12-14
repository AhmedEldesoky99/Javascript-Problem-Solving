"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1) calc recommended Food
//recommendedFood = weight

dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2)
const sarahDogs = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDogs);
console.log(
  `Sarah dog is eating too ${
    sarahDogs.curFood > sarahDogs.recFood ? "much" : "litle"
  }`
);

// 3)
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood * 1.1)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4)
//Matilda and Alice and Bob's dogs eat too much!"
//Sarah and John and Michael's dogs eat too little!
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//5)
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6)
const checkEatExatly = (dog) =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

console.log(checkEatExatly(dogs));

// 7)
console.log(dogs.filter(checkEatExatly));
//8)
const DogCopySorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(DogCopySorted);
