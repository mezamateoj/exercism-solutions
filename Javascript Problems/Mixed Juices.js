// https://exercism.org/tracks/javascript/exercises/mixed-juices


/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
    switch (name) {
      case 'Pure Strawberry Joy':
        return 0.5;
        break;
      case 'Energizer': 
      case 'Green Garden':
        return 1.5;
        break;
      case 'Tropical Island':
        return 3;
        break;
      case 'All or nothing':
        return 5;
        break;
      default:
        return 2.5;     
    }
}
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
function limesToCut(wedgesNeeded, limes) {
  const valuesLimes = {'small': 6, 'medium': 8, 'large': 10};
  let cuts = 0;
  let count = 0;

  while (cuts < wedgesNeeded) {
    if (limes[count]) {
      cuts += valuesLimes[limes[count]];
      count += 1;
      } else {
        return count;
      }
    }
  return count;
}
//console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));

  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  } while (timeLeft > 0 && timeToMixJuice(orders[0]) <= timeLeft);
  return orders;
}

//console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));
  