// How to use Memoize to cache JavaScript function results and speed up your code
// https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

// ometimes, a function can become expensive to call multiple times 
// (say, a function to calculate the factorial of a number).
// there’s a way we can optimize such functions and make them execute much faster: caching.

function factorial(n) {
    
    // if (n === 0) {
    //     return 1
    // }
 
    return n === 0 || n < 0 ? 1 : n * factorial(n - 1)
    
}

console.log(factorial(50))