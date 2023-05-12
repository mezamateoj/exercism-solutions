// Solution for https://leetcode.com/problems/counter-ii/description/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init; 
    
    return {
      increment() {
          counter ++
          return counter;
    },

      decrement() {
          counter--
    //   changeBy(-1);
          return counter;

    },

    reset() {
          counter = init;
          return counter;
    },
  };
};



// const counter = createCounter(5)
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4
