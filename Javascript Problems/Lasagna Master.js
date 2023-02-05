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

/**
 * The function will then determine the quantity of noodles and sauce needed to make your meal. 
 * The result should be returned as an object with keys noodles and sauce.
 * @param {Array} layers 
 * @returns  object with keys noodles and sauce
 */

// Compute the amounts of noodles and sauce needed
function quantities(layers) {
    let counts = {};
    let sauceCount = 0;
    let noodlesCount = 0;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'sauce') {
            sauceCount += 1;    
        } else if (layers[i] === 'noodles') {
            noodlesCount += 1;
        }
    }
    counts['noodles'] = noodlesCount * 50;
    counts['sauce'] = sauceCount * 0.2;
    return counts;
}


/**
 * 
 * @param {Array} friendList 
 * @param {Array} myList
 * change my lsit with my friends last ingredient. 
 */

function addSecretIngredient(friendList, myList) {
    myList.push(friendList[friendList.length - 1])
}


/**
 * 
 * @param {object} recipe 
 * @param {number} portions 
 * @returns new recipe with the correct number of ingredients by portion.
 */
function scaleRecipe(recipe, portions) {
    let newRecipe =  Object.fromEntries(Object.entries(recipe).map(([k, v]) => [k, v * (portions / 2)]));
    return newRecipe;
}

