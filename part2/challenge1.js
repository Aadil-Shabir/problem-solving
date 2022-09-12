// Write a JavaScript program to create a new 
// string from a given string taking the first three
// characters and the last three characters of a string and
// adding them together. the string length must be 3 or more,
// if not, the original string is returned.

// My Solution
const newString = (str) => {
    const firstThreeChars = str.slice(0, 3)
    const lastThreeChars = str.slice(str.length - 3, str.length)
    if (str.length >= 3) {
        return firstThreeChars + " " + lastThreeChars
    } else {
        return str;
    }
}

console.log(newString("Hel"));

// Other Solution
const makeNewString = (str) => {
    return (
        str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)
    )
    
}

console.log(makeNewString("abc"))
console.log(makeNewString("abcdef"))
console.log(makeNewString("John Wick"))
console.log(makeNewString("Mike Ross"))
console.log(makeNewString("ab"))