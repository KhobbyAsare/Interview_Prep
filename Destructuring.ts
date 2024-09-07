const fruits_2 = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2, ...rest] = fruits_2;
console.log(fruit1, fruit2, rest);

// Create an Object
const person_2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName:name_, lastName} = person_2;
console.log(name_, lastName);

let { lastName: new_name } = person_2;
console.log(new_name);


// Swapping JavaScript Variables

let firstName_1 = "John";
let lastName_1 = "Doe";

// Destructing
[firstName_1, lastName_1] = [lastName, name_];
console.log(lastName_1, firstName_1);


