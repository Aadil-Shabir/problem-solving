// Write a JavaScript program to replace the first digit in a
// string (should contains at least digit) with $ character.

const replace1stDigit = (str) => {
    return str.replace(/\d/.exec(str)[0], "$")
}

function hasNumber(myString) {
    return /\d/.exec(myString)[0];
  }

// replace1stString("kl2");
console.log(hasNumber("kop5lop6"))
console.log(replace1stDigit("klop1klop2"))