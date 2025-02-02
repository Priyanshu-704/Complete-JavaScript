let person = new Object();
person.name = "Vipasha";
person.gender = "Female";
person.age = 21;
//using "delete" operator, you can delete any object property 
delete person.name;
console.log(person);