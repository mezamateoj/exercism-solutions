// https://exercism.org/tracks/javascript/exercises/lasagna-master


 /** 
 * }
 * @param {number | undefined} timer
*/

// Determine whether the lasagna is done
function cookingStatus(timer) {
    if (timer > 0) {
        return 'Not done, please wait.';
    } else if (timer === 0) {
        return 'Lasagna is done.';
    }
    return 'You forgot to set the timer.';
}

// Estimate the preparation time
function preparationTime(layers, avg_time = 2) {
    return layers.length * avg_time;
}

// Compute the amounts of noodles and sauce needed
function quantities(layers) {
    let counter = {'sauce': undefined, 'noodles': undefined};
    for (element of layers) {
        if (element === 'sauce' || element === 'noodles') {
            if (counter[element] === 'sauce') {
                counter[element] += 50;     
            } else if (counter[element] === 'noodles') {
                counter[element] += 0.2;
            } 
        }    
    }
    return counter;
    // return counter;
//     let counts = {};
//     for (const ingredient of layers) {
//          if (ingredient === 'sauce' || ingredient === 'noodles') {
//             counts[ingredient] = counts[ingredient] ? counts[ingredient] + 1 : 1;
//         }
//     return counts;
//     }
// }
}
console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
