// Destructuring is a syntax feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable way to extract data from complex structures, making your code cleaner and easier to understand.
// Define an object
const person = {
  name: 'John Doe',
  age: 30,
  job: 'Software Developer',
  location: 'New York'
};

// Destructure the object
const { name, age, job } = person;

// Output the destructured variables
console.log(name); 
console.log(age);  
console.log(job); 