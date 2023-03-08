// https://exercism.org/tracks/javascript/exercises/elyses-looping-enchantments

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
function cardTypeCheck(stack, card) {
    let count = 0;
    stack.forEach((element) => {
        if (element === card) {
            count ++;
        }
    })
    return count;
  }
  
  /**
   * Determine how many cards are odd or even
  *
  * @param {number[]} stack
  * @param {boolean} type the type of value to check for - odd (false) or even (true)
  * @returns {number} number of cards that are either odd or even (depending on `type`)
  */
function determineOddEvenCards(stack, type) {
    let typeCardCount = 0;
    if (type === true) {
        for (const cards of stack) {
            if (cards % 2 == 0) {
                typeCardCount ++;
            }
        }
    }
    
    if (type === false) {
        for (const cards of stack) {
            if (Math.abs(cards % 2) == 1) {
                typeCardCount ++;
            }
        }
    }

    return typeCardCount;
}
    
