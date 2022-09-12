// Feyman Technique
// 1. Choose a Topic
// 2. Explain it ti a 12 year old
// 3. Reflect, refine, simplify
// 4. Organize & Review

// Write a JavaScript Program to get the current date.
// Expected output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// My Solution
const getCurrentDate = () => {
  const newDate = new Date();
  const formattedDate = `${
    newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()
  }-${newDate.getDay()}-${newDate.getFullYear()}`;
  return formattedDate;
};

console.log(getCurrentDate());

// Another Solution
const formatDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`
};

console.log(formatDate());