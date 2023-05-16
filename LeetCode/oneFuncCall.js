// day 8 leetcode
// https://leetcode.com/problems/allow-one-function-call/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo
// Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            return fn.apply(this, arguments);
        }
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
 