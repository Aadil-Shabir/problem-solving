// write a JavaScript program to extract the first half 
// of a string of even length.

const evenLength = (str) => 
    str.length % 2 === 0 ? str.slice(0, str.length/2) : str

console.log(evenLength("Aadil Shabi"))

console.log("Aadil Shabir".length)