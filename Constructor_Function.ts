// JavaScript Object Constructors

/**
Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.
 */

function _Person(first: string, last: string, age: number, eye: string) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

  this.getFullName = ()=>{
    return `${this.firstName} ${this.lastName}`
  }
}

const myFather = new _Person("John", "Doe", 50, "blue");
const myMother = new _Person("Sally", "Rally", 48, "green");
const mySister = new _Person("Anna", "Rally", 18, "green");

const mySelf = new _Person("Johnny", "Rally", 22, "green");

console.log(mySelf.getFullName());


myFather.nationality = "English";
console.log(myFather);

// Constructor Function Methods

function Person_(first: string, last: string, age: number, eyecolor: string) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let new_Person = new Person_("Sally", "Rally", 48, "green");

console.log(new_Person.fullName());

new_Person.changeName = function (name: string) {
  this.lastName = name;
};

// Built-in JavaScript Constructors..............

/**
 new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object




Did You Know?
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().
 */

let _fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];

console.log(_fruits.join(" "));
let get_type = typeof _fruits.join(" ");
console.log(get_type);
