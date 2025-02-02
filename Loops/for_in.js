//The for…in loop can also works to iterate over the properties of an array, but it is not recommended. for..in is mainly suitable for objects.
//works on an constant Array
const a = [1, 2, 3, 4, 5];

for (const i in a) {
  console.log(a[i]);
}

//Works on the object data type

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
