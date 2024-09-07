// using hasOwnProperty()

let myObject:{
    name:string,
    age:number
} = {
    name:'shem',
    age:20
}

console.log(myObject.hasOwnProperty("name"));



// OR...................
let carBrand = function(){
    this.color = 'yellow'
}

carBrand.prototype.brand = 'benz';

console.log(carBrand.hasOwnProperty('brand'));
console.log(carBrand.hasOwnProperty('color'));