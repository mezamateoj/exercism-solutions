// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force
// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j]
//             }
//         }
//     }

// };

// const nums = [2, 11, 15, 7];
// const target = 9

// Using Hash Map
// map value: index
// Ex: arr:[3, 2, 3] => 3:0, 2:1, 3:1
const twoSum = function (nums, target) {
    let previous = new Map()

    for (const [index, element] of nums.entries()) {
        let diff = target - element
        if (previous.has(diff)) return [previous.get(diff), index]
        previous.set(element, index)
    }

};

const nums = [3, 2, 3]
const target = 6

console.log(twoSum(nums, target))