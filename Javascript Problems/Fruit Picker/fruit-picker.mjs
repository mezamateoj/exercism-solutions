// https://exercism.org/tracks/javascript/exercises/fruit-picker

import { notify } from './notifier.mjs';
import { order } from './grocer.mjs';

/**
 * @return void
 */
function onSuccess() {
  return notify({ message: 'Success' });
}

/**
 * @return void
 */
function onError() {
  return notify({ message: 'Error' });
}


/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
function postOrder(variety, quantity) {
  const newOrder = { 'variety': variety, 'quantity': quantity };
  return orderFromGrocer(newOrder, onSuccess, onError);
}
