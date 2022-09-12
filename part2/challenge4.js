// Given two values, write a JavaScript program to find out
// which one is nearest to 100.

// My Solution
const nearest100 = (num1, num2) => {
    const num1Diff = 100 - num1;
    const num2Diff = 100 - num2;
    if (Math.abs(num1Diff) < Math.abs(num2Diff)) {
        return num1
    } else {
        return num2
    }
} 

console.log(nearest100(104, 99))

// Other Solutions

const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

console.log(closestTo100(12, 56))
console.log(closestTo100(51, 49))
console.log(closestTo100(1, 99))
console.log(closestTo100(50, 50))