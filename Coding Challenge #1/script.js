'use strict'

function checkDogs(Julia, Kate) {
  //shallow copy
  let JuliaCorrectDogs = Julia.slice();
  // remove cats age
  JuliaCorrectDogs.splice(0, 1);
  JuliaCorrectDogs.splice(-2);
  //concat
  const dogs = JuliaCorrectDogs.concat(Kate);

  dogs.forEach((curr, i) => {
    const dogStatus = curr >= 3 ? 'adult' : 'puppy';
    console.log(
      `Dog 🐶 number ${i} is an ${dogStatus}, and is ${curr} years old`
    );
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


