// https://exercism.org/tracks/javascript/exercises/elyses-transformative-enchantments


/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
function seeingDouble(deck) {
    return deck.map((value) => value * 2)
  }

  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
function threeOfEachThree(deck) {
    return deck.reduce((acc, value) => {
      if (value === 3) {
        acc.push(value, value, value);
      } else {
        acc.push(value);
      }
      return acc;
    }, []);
}

  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
function middleTwo(deck) {
    return deck.slice(4, 6);
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
function sandwichTrick(deck) {
    deck.splice((deck.length / 2 - 1), 0, deck.pop(), deck.shift());
    return deck;
  }

  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
function twoIsSpecial(deck) {
    return deck.filter((value) => value === 2);
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
function perfectlyOrdered(deck) {
    return deck.sort((a, b) => a - b);
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
function reorder(deck) {
    return deck.reverse();
  }
  