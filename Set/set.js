//A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed. 
//using Array 
 let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
console.log(typeof s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);