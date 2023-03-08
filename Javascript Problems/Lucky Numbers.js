// https://exercism.org/tracks/javascript/exercises/lucky-numbers


/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
    let num1 = Number(String(array1).replace(/,/g, ''));
    let num2 = Number(String(array2).replace(/,/g, ''));

    return num1 + num2; 
}


  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
function luckyNumber(value) {
    let valueArray = String(value).split('');
    let reverseValue = valueArray.reverse().join('')
    return value === Number(reverseValue);
  }


  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
function errorMessage(input) {
  if (!input) {
    return 'Required field';
  } else if (isNaN(input) === true || Number(input) === 0) {
    return 'Must be a number besides 0';
  }
  return "";
}
