// Write a JavaScript program to concatenate two strings 
// except their first character

// My Solution
const joinStrings = (str1, str2) => str1.slice(1).concat(str2.slice(1));

console.log(joinStrings("Aadil", "Shabir"))