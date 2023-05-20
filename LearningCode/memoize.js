// How to use Memoize to cache JavaScript function results and speed up your code
// https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

// Sometimes, a function can become expensive to call multiple times 
// (say, a function to calculate the factorial of a number).
// there’s a way we can optimize such functions and make them execute much faster: caching.

function factorial(n) { 
    return n === 0 || n < 0 ? 1 : n * factorial(n - 1)
}

// a simple function to add something
const add = (n) => (n + 10);
// add(9);
// a simple example of a memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9)); // calculated
// console.log(newAdd(9)); // cached


// simple pure function
const times10 = (n) => (n * 10);
console.log(times10(5));
// a simple memoize function that takes in a function
// and returns a memoized function
// const memoize = (fn) => {
//     let cache = {};
//     return (...args) => {
//         let n = args[0];
//         if (n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         }
//         else {
//             console.log('Calculating result');
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

let memoize = function(fn) {
    let result = memo[n]
    if (typeof result !== 'number') {
        result = fn(n)
        memo[n] = result
    }
    return result
}

// creating a memoized function for the 'add' pure function
const memoizeTimes10 = memoize(times10);
console.log(memoize(3)); // calculated
console.log(memoize(3));  // cached
console.log(memoize(4));  // calculated
console.log(memoize(4));  // cached
       