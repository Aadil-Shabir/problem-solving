// Write a JavaScript program to get the extension of a filename.

const getFileExtensionName = (str) => str.slice(str.lastIndexOf("."))

console.log(getFileExtensionName("index.html"))