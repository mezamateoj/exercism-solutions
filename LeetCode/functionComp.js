// LeetCode Solution:
// https://leetcode.com/problems/function-composition/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	let newValue = 0;
    return function(x) {
        functions.slice().reverse().forEach((fn) => {
            newValue = fn(x);
            x = newValue;
        });
        if (newValue === 0) {
            return x;
        }
        return newValue;
    }
};


// other solution
// var compose = function(functions) {
//     return x => functions.reduceRight((acc, fn) => fn(acc), x);
// };


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
