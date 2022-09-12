// Write a JavaScript program to find the number of even 
// digits in an array of integers


// My Solution
const checkEven = (arr) => arr.filter((ar) => ar % 2 === 0).length;

console.log(checkEven([1, 5, 9, 2, 4, 6]));