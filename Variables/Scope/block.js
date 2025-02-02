let age = 23;// this is a global variable, can be used anywhere in code
if(age<18){
  let value = "minor";// block level variable that can't be used out of the "if block".
  console.log(`${value} of age ${age}`);
}
// console.log(value);
//will give an reference error: "value is not defined"
else{
  let value = "major";
  console.log(`${value} of age ${age}`);
  //backticks are used to define the string and $ symbol is used to concatenate in the strings
}