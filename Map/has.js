const students = [
  ['1', 'hanshRaj'],
  ['2', 'jethaLal'],
  ['3', 'tarakMehta'],
];
let myMap = new Map(students);
let hasMap = myMap.has('3');//here you have to provide the key value as argumeent
//has() method is used to check that the specified element is exist in the Map or not
console.log(hasMap);