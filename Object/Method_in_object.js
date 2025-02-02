let sandwich = {
  cheese:"",
  bread:"",
  condiment:"",
  makeSandwich: function (cheese,bread,condiment) {
  sandwich.cheese = "cheese";
  sandwich.bread = "bread";
  sandwich.condiment = "condiment";
  let mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + ", " + sandwich.condiment;
  return mySandwich;
  }
  }
  console.log(sandwich);