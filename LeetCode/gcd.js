// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// https://www.freecodecamp.org/news/euclidian-gcd-algorithm-greatest-common-divisor/
const gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
}

const gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }

    let max = gcd(str1.length, str2.length)
    return str1.slice(0, max)
    
};

// better solution
// const gcdOfStrings = function(str1, str2) {
//     if (str1 + str2 !== str2 + str1) {
//         return ''
//     }
//     const gcd = (a, b) => (!b ? a : gcd(b, a % b))

//     let max = gcd(str1.length, str2.length)
//     return str1.substring(0, max)
    
// };



let str1 = "ABCABC";
let str2 = "ABC";

console.log(gcdOfStrings(str1, str2)) // ABC