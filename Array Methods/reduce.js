//The reduce method is used to reduce an array to a single value.
//The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator.
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15
