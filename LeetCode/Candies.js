// Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
    // boolArray = [];
    // for (let i = 0; i < candies.length; i++) {
    //     if ((candies[i] + extraCandies) >= Math.max(...candies)) {
    //         boolArray.push(true)
    //     } else {
    //         boolArray.push(false)
    //     }

    // }
    // return boolArray

    // other solution: 
    const maxCandies = [...candies].sort((a, b) => +a - b).pop()

    let boolArray = [];
    for (let i = 0; i < candies.length; i++) {
        boolArray.push((candies[i] + extraCandies) >= maxCandies)
    }
    return boolArray;

};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))

