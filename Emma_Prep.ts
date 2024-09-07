let nameObj = {
  firstName: "Emma",
  lastName: "Wang",
};

for (let key in nameObj) {
  console.log(key, nameObj[key]);
}

function me() {
  let greeting =
    "Hello, my name is " + nameObj.firstName + " " + nameObj.lastName + ".";
}

let company = "Microsoft";

console.log(nameObj.hasOwnProperty("firstName"));


// Creating array from a string using the Object.assign() method
let yes = Object.assign([company], [company]);
let yes1 = Object.assign([], company);
console.log(yes);
console.log(yes1);

// the .from() takes the value and creates a new array from it 
console.log(Array.from(company));

// the .of() takes te value and put it in an array
console.log(Array.of(company));

const numb = [677,4,8978,2343,1,3,2]
const chfd = ['g','a','b','n']
console.log(numb.sort((a, b) => a - b));
console.log(chfd.sort());


let obj1 = {
    a: 1,
    b: 2,
    add: function(){
        return this.a + this.b;
    }
}


console.log(obj1.add());



let obj_1 = {
country: 'States',
state: 'Washington',
address:{
  number:2323,
  block: 2
}
}

let obj_2 = structuredClone(obj_1)
obj_2.address.block = 54

console.log(obj_2);
console.log(obj_1);



