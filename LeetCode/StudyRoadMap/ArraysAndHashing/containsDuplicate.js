// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// brute force if complexity of O(n*2)
// brute force would have two for loops
const containsDuplicate = function (nums) {
    let n = []
    for (let i = 0; i < nums.length; i++) {
        if (n.includes(nums[i])) {
            return true
        } else {
            n.push(nums[i])
        }
    }
    return false

};

// sorting array has complexity of O(nlogn)

// hashSet complexity of O(n) but space(memory) increased to O(n) => memory of the Hash
const containsDuplicateHash = function (nums) {
    let hash = new Set()

    for (const n of nums) {
        console.log(n)
        if (hash.has(n)) {
            return true
        }
        hash.add(n)

    }
    return false

};


console.log(containsDuplicateHash([1, 2, 3, 1]))
console.log(containsDuplicateHash([1, 2, 3, 4]))
console.log(containsDuplicateHash([2, 14, 18, 22, 22]))