// Write a JavaScript program to find the number of even
// values up to given number

// My Solution
const checkNumberOfEvenValues = (int) => Math.floor(int/2)

console.log(checkNumberOfEvenValues(101), "My");
console.log(checkNumberOfEvenValues(12), "My");
console.log(checkNumberOfEvenValues(356), "My");

// Other Solution
const checkEven = (arr) => arr.filter((ar) => ar % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    let returnArrays = [];
    for (let i=1; i<=num; i+=1) {
        returnArrays.push(i)
    }
    return returnArrays
}

console.log(checkEven(createArrayOfNumbers(-101)));
console.log(checkEven(createArrayOfNumbers(12)));