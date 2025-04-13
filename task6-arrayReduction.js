const numbers = [10, 20, 30, 56, 10];

function sumNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

const total = sumNumbers(numbers);
console.log(total);
