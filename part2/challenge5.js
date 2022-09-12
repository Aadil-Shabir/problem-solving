// Write a JavaScript program to check a given string 
// constains 2 to 4 occurrences of a specified character.

// My Solution
const checkOccurrence = (a, b) => {
    let pattern = new RegExp(a, 'g')
    let result = b.match(pattern)
    if (result && result.length >= 2 && result.length <= 4) {
        return true
    } else {
        return false
    }
}


// console.log(checkOccurrence("A", "Aadil Aadil Aadil Aadil"))
// console.log(checkOccurrence("k", "Ambassador"))
// console.log(checkOccurrence("op", "cropop"))

// Other Solution
const countChars = (str, char) => str.split('').filter((ch) => ch === char).length

const count2to4 = (str, char) => countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(count2to4("oooop", "o"));
console.log(count2to4("ooop", "o"));
console.log(count2to4("op", "o"));
console.log(count2to4("oop", "o"));