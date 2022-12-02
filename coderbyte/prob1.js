// Bracket Combinition

// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero,
// and return the number of valid combinations that can be formed with num pairs of parentheses. For example,
// if the input is 3, then the possible combinations of 3 pairs of parenthesis,
// namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()).
// There are 5 total combinations when the input is 3, so your program should return 5.

function bracketCombinations(num) {
    // Catalan formula => (2n!)/ (n+1)! n!

    // Factorial of the sum
    let factorial = (n) => {
        let k = 1;
        for (let i = n; i >= 1; i--) {
            k *= i;
        }
        return k;
    };

    // Formula going down

    const result = factorial(2 * num) / (factorial(num + 1) * factorial(num));
    return result;
}

// Test
console.log(bracketCombinations(3));
