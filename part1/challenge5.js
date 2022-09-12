// Write a javaScript program to create a new string
// adding "New!" in front of a given string.
// If the given string begins with "New!" already
// then return the original string.


// My Solution
const checkString = (str) => {
    const newStr = "New!"
    if (str.slice(0, 4) === "New!") {
        return str
    } else {
        return `${newStr} ${str}`
    }
};

console.log(checkString("New! Game"));

// Other Solution

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Habits'));
console.log(addNew('Players'))