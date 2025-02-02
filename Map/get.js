const students = [
  ['1', 'hanshRaj'],
  ['2', 'jethaLal'],
  ['3', 'tarakMehta'],
];
let myMap = new Map(students);

let getMap = myMap.get('2');//get() method is used to get the values from Map set
console.log(getMap);