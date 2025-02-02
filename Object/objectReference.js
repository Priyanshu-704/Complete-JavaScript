let x = {
  num: 2,
};

// Assign the reference of object 'x' to variable 'y'
// Now both 'x' and 'y' point to the same object in memory
let y = x;

console.log(`x= ${x.num} and y = ${y.num}`); 

// This change will affect the object that both 'x' and 'y' reference
x.num = 5;


console.log(`x= ${x.num} and y = ${y.num}`); 
// - Both 'x' and 'y' are references to the same object.
// - Changing the property of the object through one reference (x) affects the other reference (y).