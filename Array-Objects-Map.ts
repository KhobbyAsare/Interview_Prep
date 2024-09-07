// CREATING MAPS FROM ARRAY AND OBJECTS

let user = new Map();
console.log(user);

// using .set to add a value to the map
user.set("name", "john");
user.set("age", 30);

console.log(user);

// creating Map using array
let user1 = new Map([
  ["name", "kel"],
  ["age", "20"],
  ["country", "Ghana"],
]);

console.log(user1);

// Convert an object to a Map

let customer = {
  id: 101,
  name: "John Doe",
  gender: "Male",
  city: "London",
};

let customerArray = Object.entries(customer);

console.log(customerArray);

let customerMap = new Map(customerArray);

console.log(customerMap);

// Converting a map into an array

let newCustomerArray = [...customerMap];
console.log(newCustomerArray);

let customerKeys = [...customerMap.keys()];
console.log(customerKeys);

let customerValues = [...customerMap.values()];
console.log(customerValues);

let customerEntries = [...customerMap.entries()];
console.log(customerEntries);

// Lopping over maps

for (let customer of customerMap) {
  console.log(customer);
}

// Destructuring
for (let [key, value] of customerMap) {
  console.log(key);
  console.log(value);
}

console.log(customerMap.size);

let a1 = {};
let b = {};

let myMap = new Map([
  [a1, "a"],
  [b, "b"],
]);

console.log(myMap);

// .get()

console.log(customerMap.get('id'));
console.log(customerMap.get('name'));

