// before arrow
let myfunction = function(){
  console.log("Hello, I am a function");
}
myfunction();

//An arrow function is a shorter syntax for writing functions in JavaScript. Introduced in ES6, arrow functions allow for a more concise and readable code, especially in cases of small functions.
//Arrow functions are written with the => symbol, which makes them compact.


// Arrow function declaration
//this is the way to declare where i have not passed any parameter
let msg = () => {
  console.log("hello my name is priyanshu");
}
msg();


//Arrow Function with Multiple Parameters:
const add = (a, b) => a + b;
console.log(`${add(3, 5)}`); // Output: 8



//Arrow Function with One Parameter:
const double = x => x * 2;
console.log(double(4)); // Output: 8


//Arrow Function with Multiple Statements:
const sumAndMultiply = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
console.log(sumAndMultiply(3, 5)); 
// Output: { sum: 8, product: 15 }
