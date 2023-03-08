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
    stack.forEach(element => count += element == card)
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
    // ternary operator ?
    const checkType = type ? 0 : 1;

    let count = 0;
    for (const cards of stack) {
        if (cards % 2 === checkType) {
            count ++;
        }
    }
    return count;
}
    
