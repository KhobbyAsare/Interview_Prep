let obj2 = {};

// 2
let _obj1: { [key: string]: string } = {};

_obj1.newProperty = "New Value";

console.log(_obj1.newProperty);

// 3
let obj3 = new Object() as { [key: string]: string };

obj3.newProperty = "New Value";

console.log(obj3.newProperty);

// 4
let car: { [key: string]: any } = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log("Car started");
  },
};

car.name = "Benz";

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(JSON.stringify(car));

car.start();
console.log(car.name);

// Create an Object..............

// 1 . Using the new Keyword
const person = new Object() as { [key: string]: string | number };

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//2. Create an Object
const person1 = {} as { [key: string]: string | number };

// Add Properties
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

// 3. Create an Object
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
} as { [key: string]: any };

// // 4. using setPrototypeOf

// const Person = {
//   talk(){
//     return 'Coding'
//   }
// }

// const me = {}

// Object.setPrototypeOf(me, Person)

// me.talk()

// Delete a Property

delete person3.age;
// Or....
// delete person["age"];

console.log(person3);

// Set a Property to an Object...............
person3.newAge = function (new_age: number) {
  this.age = new_age;
};

person3.newAge(30);
console.log(person3.age);
