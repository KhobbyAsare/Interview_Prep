/**
 * 
In JavaScript all functions are object methods.

If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

The example below creates an object with 3 properties, firstName, lastName, fullName.
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// This will return "John Doe":
console.log(person.fullName());


/**
 * In the example above, this refers to the person object.

this.firstName means the firstName property of this.

Same as:

this.firstName means the firstName property of person.
 */

/**
 * The JavaScript call() Method................
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.

This example calls the fullName method of person, using it on person1:
 */


const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person2 = {
  firstName: "John",
  lastName: "Doe",
};
const person3 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person1.fullName.call(person2));
console.log(person1.fullName.call(person3));

/** 
 * 
 * The call() Method with Arguments
The call() method can accept arguments:
*/

const person4 = {
  fullName: function (city:string, country:string) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person5 = {
    firstName: "John",
    lastName: "Doe",
};

console.log(person4.fullName.call(person5, "Oslo", "Norway"));

function Car1(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car1.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1");