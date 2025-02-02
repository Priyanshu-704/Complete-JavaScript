const students = [
  ['1', 'hanshRaj'],
  ['2', 'jethaLal'],
  ['3', 'tarakMehta'],
];
let myMap = new Map(students);
 console.log(myMap);
console.log(typeof myMap)// return object









myMap.delete('2');//deletes both the key as well as a value from the map
console.log(myMap);


myMap.clear(); // remove all the elements from the Map object.
console.log(myMap);