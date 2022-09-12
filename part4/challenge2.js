// Write a JavaScript program to compare two objects
// to determine if the first one contains the same
// properties as the second one (which may also have
// additional properties)

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

// My Solution
const compareObjs = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] != obj2Keys[i]) {
      return "False";
    }
  }
  return "True";
};

console.log(compareObjs(objA, objB));


// Other Solution 
const objectsEqual = (a, b) => Object.keys(a).every(key => b[key]);

console.log(objectsEqual(objA, objB));
