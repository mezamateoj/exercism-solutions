// Birdwatch answers

/*
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
return birdsPerDay.reduce((a, b) => a + b)
}

/*
* Calculates the total number of birds seen in a specific week.
*
* @param {number[]} birdsPerDay
* @param {number} week
* @returns {number} birds counted in the given week
*/
function birdsInWeek(birdsPerDay, week) {
  let start = (week - 1) * 7;
  let end = (week * 7);
  return totalBirdCount(birdsPerDay.slice(start, end));
}

/*
* Fixes the counting mistake by increasing the bird count
* by one for every second day.
*
* @param {number[]} birdsPerDay
* @returns {number[]} corrected bird count data
*/
function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length -1; i += 2) {
      birdsPerDay[i] = birdsPerDay + 1;
  }
    return birdsPerDay;  
}
