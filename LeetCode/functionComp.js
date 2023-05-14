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
        return newValue;

    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)) // 65

