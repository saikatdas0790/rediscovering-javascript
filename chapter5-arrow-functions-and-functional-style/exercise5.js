const numbers = [1, 5, 2, 6, 8, 3, 4, 9, 7, 6];

let sum = 0;

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((n, sum) => sum + n, sum);

console.log(result);
