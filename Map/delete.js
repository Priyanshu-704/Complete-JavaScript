const students = [
  ['1', 'hanshRaj'],
  ['2', 'jethaLal'],
  ['3', 'tarakMehta'],
];
let myMap = new Map(students);

myMap.delete('2');//deletes both the key as well as a value from the map
console.log(myMap);