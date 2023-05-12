// Leetcode Problem:   
// https://leetcode.com/problems/array-reduce-transformation/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9https://leetcode.com/problems/array-reduce-transformation/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let finalValue = init;
    for (const index in nums) {
        finalValue = fn(finalValue, nums[index]);
    }
    return finalValue;
};