// Write a JavaScript program to check two numbers and return true 
// if one of the number is 100 or if the sum of the two numbers 
// is 100.

// Solution 1
const myFunc = (x, y) => {
    if (x+y==100) {
        return true
    }
    if (x===100 || y===100) {
        return true
    }
    return false
}

console.log(myFunc(10, 100));

// Solution 2
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) ===100;

console.log(isEqualTo100(90, 10))