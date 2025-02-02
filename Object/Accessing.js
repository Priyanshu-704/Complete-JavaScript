let information ={
  name:"Priyanshu",
  class : 12,
  address :"31/26/04, Jaipur",
}

//Access the object property with two ways
//first one is with "dot notation"
information.name = "Radhey";
console.log(information.name);
console.log(information.class);


//Second one is using "Bracket notation"
information['address'] = "Jodhpur";
console.log(information['address']);