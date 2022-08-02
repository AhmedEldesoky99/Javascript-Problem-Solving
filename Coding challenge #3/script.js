"use strict";


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ex 1
const TotalDeposits = accounts
  .flatMap(curr => curr.movements)
  .filter(curr => curr > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(TotalDeposits);

// ex2
const depositAbove1000 = accounts
  .flatMap(curr => curr.movements)
  .filter(curr => curr >= 1000).length;

const deposit2Above1000 = accounts
  .flatMap(curr => curr.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(depositAbove1000);
console.log(deposit2Above1000);

// ex 3
const depositAndWithdrawal = accounts
  .flatMap(curr => curr.movements)
  .reduce(
    (sum, curr) => {
      // curr > 0 ? (sum.deposits += curr) : (sum.withdrawal += Math.abs(curr));
      sum[curr > 0 ? 'deposits' : 'withdrawal'] += Math.abs(curr);
      return sum;
    },
    { deposits: 0, withdrawal: 0 }
  );

console.log(depositAndWithdrawal);

// ex 4

const ConvertTitle = string => {
  const Exceptions = ['a', 'an', 'or', 'with', 'on', 'in', 'but', 'of'];

  return string
    .toLowerCase()
    .split(' ')
    .map(curr =>
      Exceptions.includes(curr)
        ? curr
        : curr.replace(curr[0], curr[0].toUpperCase())
    )
    .join(' ');
};
console.log(ConvertTitle('he is a man'));
console.log(
  ConvertTitle('this is a long title with good cover but has a lot of paper')
);
