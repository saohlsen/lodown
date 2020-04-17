'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Takes a parameter and return the value unchanged.
 * 
 * 
 * @param {value} value: can be any input value
 * 
 * @return {value}: will be the same value as my input value
 * 
 */

 function identity (value) {
    return value; 
}

module.exports.identity = identity;




/**
 * typeOf: it is designed to take a value and return its data type as a string  
 * 
 * @param {value} value: any input value
 * 
 * @return {string}: data type name as a string
 * 
 */



function typeOf(value) {
    if (typeof value === 'string') {
        return 'string';
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (typeof value === 'object' && Array.isArray(value) != true &&
    value != null && value != Date(value)) {
        return 'object';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'function') {
        return 'function';
    }
}

module.exports.typeOf = typeOf;




/**
 * first: It takes an input of an array and input number and returns new array
 * that holds the first number of elements of the original array, 
 * 
 * @param {Array} array: it holds an array of elements 
 * 
 * @param {Number} number: represents the number of elements we will need
 * 
 * @return {New Array} arr: returns array with number elements. 
 * If the number is less than 0, it returns an empty array. 
 * If the number is not a number or the input is null, then it will return
 * the first element of the array. If the number is greater than array, 
 * it will return the entire original array. 
 */


function first(array, number) {
    
    var arr = [];
    if(!Array.isArray(array) || number < 0){
        return arr;
    } else if(number === isNaN || number === undefined ){
        return array[0];
    } else if(number > array.length) {
        return array; 
    }
    
    else {

        for(let i = 0; i < number; i++){
            arr.push(array[i]);
            
        }
        return arr; 
    } 
    
}

module.exports.first = first;



/**
* last: It takes an input of an array and input number and returns
* the new array that holds the last number of elements of the original array.
*
* @param {Array} array: it holds an array of elements.
*
* @param {Number} number: represents the number elements we will need.
* 
* @return {New Array} arr: returns array with number elements. 
* If an array is not an array or number is less than 0, it will return [].
* If the number is not given or NaN, it will return a last element from an array. 
* If a number is greater than the length of an array, it will return 
* the entire original array. 
*/




function last(array, number){
    
      var arr = [];
    if(!Array.isArray(array) || number < 0){
        return arr;
    } else if(number === isNaN || number === undefined ){
        return array[array.length-1];
    } else if(number > array.length) {
        return array; 
    } else {
        for(let i = array.length-number; i <= array.length-1; i++){
            arr.push(array[i]);
            
        }
        return arr; 
    }
    
}

module.exports.last = last;


/**
* IndexOf: It takes an array and value and returns the first occurrence of
* value in the array.
* 
* @param {Array} array: holds elements of any data type. 
* 
* @param {Any Array Value} value: it is the value of any data type 
* that can be in an array.
* 
* @return {Array}: The first index of the element in the array 
* or -1 if not found. 
*/


function indexOf (array, value){
    if(Array.isArray){
        return array.indexOf(value);
    }
}

module.exports.indexOf = indexOf;



/**
* contains: It tests if a given array holds a given value.
* 
* @param {Array} array: holds value elements of any data type.
* 
* @param {Any Array Value} value: It is a value of any data type that is tested
* to see if the array holds that value.
* 
* @return {Boolean} true or false: If array holds the value, then returns true.
* If not, return false. 
*/

function contains(array, value) {
    return (array.includes(value) ? true : false);
}

module.exports.contains = contains;




/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;




/**
* unique: it takes an input  loops through an array, returns a new array 
* holding only unique items in the array. 

*@param {Array} array: It holds elements of any data type, through which loops
* are iterated to find unique value. 
* 
*@return {New Array} uniqueArray: holds all unique values that are added to, 
* form the original array. 
*/



function unique(array){
    let uniqueArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

module.exports.unique = unique;







/**
* filter: it creates a new array that holds all elements that passed the test
* and return boolean true value of an input function.

* @param { Array} array: it holds elements of any data type, and on which
* function is called on each element.
* 
* @param {Function} fun: it takes an action on each element from the array,
* it takes parameters of element, index and array. When the result of the 
* function action is true, the elements will be added to the new array. 
* 
* @return {New Array} arr: it holds all elements that passed the test of an
* input function, with result of a boolean value - true. 
*/


function filter(array, fun) {
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(fun(array[i], i, array)){
            arr.push(array[i]);
        }
    }
    return arr; 
}

module.exports.filter = filter;





/**
* reject:  it creates and returns a new array that holds all elements that 
* does not pass the test of an input function. 
* 
* @param {Array} array:it holds elements of any data type, and on which function
* is called on each element.
* 
* @param {Function} fun: it takes an action on each element from the array, 
* it takes parameters of element, index and array. When the result of 
* the function action is false, the elements will be added to the new array. 

*@return {New Array} arr: holds all elements that do not pass the test of
* the input function. 
*/

function reject(array, fun){

    let arr = [];
    for(let i = 0; i < array.length; i++){
        if (fun(array[i], i, array) === false){
            arr.push(array[i]);
        }
    }
    return arr;
}

module.exports.reject = reject;

/**
* partition: it takes an array and test function and splits an array into two 
* arrays: 1st that matches the truthy value and 2nd that matches the falsy value.
* 
* @param {Array} array: it holds elements of any data type, and on which 
* function is called on each element.

* @param {Function} func: it takes an action on each element from the array,
* it takes parameters of element, index and array. 
* Split an array into two: one for truthy values, second for falsey values
* which will be returned into one main array. 
* 
*@return {New Array} arr: holds two sub-arrays: truthy and falsy. 
*/


function partition(array, fun){
    let arr = [];
    let aTruthies = [];
    let aFalsies = [];
    
    for(let i = 0; i <= array.length-1; i++) {
        if(fun(array[i], i, array)){
            aTruthies.push(array[i]);
        } else if (!fun(array[i], i, array)) {
            aFalsies.push(array[i]);
        }
    }
    arr.push(aTruthies, aFalsies);
    return arr;
}

module.exports.partition = partition;



/**
* map: it takes collection and function and  creates a new array from collection
* (object or an array) after function acts on each element or key-value pair of
* the collection and returns a new array. 
* 
@param {Collection: Object or Array} collection: it holds elements or 
key-value pair on which function is called on. 

@param {Function} func: it acts on each element or key-value pair in the
collection. Function parameters are : (element, index, array) or
( object[key], key, object).

@return {array} outcome: new array is returned with the outcome of function 
test on each item of our original collection.
*/  


function map(collection, func) {
    let outcome = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i <= collection.length-1; i++) {
            outcome.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            outcome.push(func(collection[key], key, collection));
        }
    }
    return outcome;
}

module.exports.map = map;



/**
* pluck: it takes an array of objects and property (string) which is an 
* key and returns an array that holds the value of a property for each element
* of the array. 

* @param {Array} array: It holds elements that are objects on which puck
* function is called upon. 
* 
* @param {string} key: it points to an object key name. 
* 
* @return {Array} Returns value of a boolean: true or false. When it finds 
* an array element where the return value is false, it returns false and stops,
* it does not check the rest of the elements. 
*/


function pluck(array, key) {
    return map(array, function(e, i, collection){
        return e[key]});
}

module.exports.pluck = pluck;



/**
* every: it takes a collection and function that tests each item of collection,
* and returns boolean value which is the result of the function. 
* If the return value is true for every item in the collection, the returns 
* boolean with true value. 
* 
* @param {Collection: Array or Object} collection: an array or object on which 
* function is called on every item. 
* 
* @param {Function} func: function that tests each item of the collection. 
* 
* @return {Boolean} It returns true if the result of the function is true for
* every item of the collection,  but if even one result is equal to false then 
* it returns false and stops the test. 
*/




function every(collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i <= collection.length-1; i++) {
            if (func === undefined && collection[i]) {
                return true;
            } else if (func === undefined && !collection[i] || 
            !func(collection[i], i, collection)) {
                return false;
            }
        } return true;
        
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (func === undefined && collection[key] ||
            func(collection[key], key, collection)) {
                return true;
            } else if (func === undefined && !collection[key]) {
                return false;
            }
        }
        return true;
    }
} 


module.exports.every = every;






/**
* some: it takes a collection and function that tests each item of collection, 
* and returns boolean value which is the result of the function. 
* The return value is true when at least one item is truthy in the collection 
* if all are falsy, returns false.
* 
*@param {Collection: Array or Object} collection: an array or object on which 
* function is called on every item. 
* 
*@param {Function} func: function that tests each item of the collection. 
* 
*@return {Boolean} It returns true if the result of the function is true for at 
* least one tem of the collection,  and return false when all equal to false.
*/



function some(collection, func) {
    
    if(Array.isArray(collection)) {
        for(let i = 0; i <= collection.length-1; i++) {
            if(func === undefined && collection[i]) {
                return true;
            } else if (func === undefined && !collection[i]) {
            return false;
            } else if(func(collection[i], i, collection)) {
                return true; 
            }
        } return false;
        
    } else if  (typeof collection === 'object') {
                   for (let key in collection) {
                     if(func === undefined && collection[key]) {
                         return true;
                     }  else if (func === undefined && !collection[key]) {
                         return false;
                     } else if(func(collection[key], key, collection)) {
                         return true; 
                     }
                   }
                  return false;  
    }
                       
}

module.exports.some = some;



/**
* reduce: it takes three arguments: array, function and any data type  and  
* reduces to single value.
* 
* @param {Array} array: array on which functions call is performed. 
* 
* @param {Function} func: this function can take up to four parameters: 
* previous result, element, index, array and calls each element in the array. 
* 
* @param {any data type} seed: optional, if provided then it is a previous 
* result in the passed function, if not then the previous result will be 
* the first index value of an array. 
* 
* @return {any data type}  value of any data type that represents the final
* result on the last call.
*/


function reduce(array, func, seed) {
    
    
    each(array, function(element, i, array){
        if(seed === undefined) {
            seed = element;
        } else {
            seed = func(seed, element, i);
        }
    });

    return seed;
}

module.exports.reduce = reduce;




/**
* extend: it takes an object and an indefinite amount of other objects.
* 
* @param {Object} object: object that will be updated with new properties.
* 
* @param {Object} ...object: object from which properties will be duplicated.
* 
* @return {Object} obj: returns new object that holds all of the properties. 
*/

function extend(object, ...objects) { 
    var obj = Object.assign(object, ...objects);
    return obj;
}


module.exports.extend = extend;





































