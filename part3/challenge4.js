// Write a JavaScript program to get the largest even number
// from an array of integers

// Solution
const maxEvenNum = (arr) => Math.max(...arr.filter((item) => item % 2 === 0))

console.log(maxEvenNum([2, 5, 6, 3, 8, 1, 23, 12, 19]))
console.log(Math.max(...[1, 5, 9, 6, 6, 23, 63, 89, 45, 59, 76]))