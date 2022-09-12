// Write a JavaScript program to replace every character in a given
// string with the character following it in the alphabet

//Solution

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt() + 1))
    .join("");


console.log(moveCharsForward('abcd'));

// const ab = "Aadil Shabir";
// const a = String.fromCharCode(65)
// const cd = ab.split("").map((a) => String.fromCharCode(a.charCodeAt(0)))
// console.log(a);
// console.log(ab.split("a"));