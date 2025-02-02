const students = [
  ['1', 'hanshRaj'],
  ['2', 'jethaLal'],
  ['3', 'tarakMehta'],
];
let myMap = new Map(students);

myMap.set('4','aatmaRam');//set() method is used to add values in the Map
console.log(myMap);//show the final Map after add the last value above