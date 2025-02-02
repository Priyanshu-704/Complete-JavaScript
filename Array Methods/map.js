//The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element. 
let myArray = [1, 2, 3, 4, 5];
let multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]
