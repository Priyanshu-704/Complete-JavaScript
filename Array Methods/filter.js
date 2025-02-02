//The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array. 
var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
