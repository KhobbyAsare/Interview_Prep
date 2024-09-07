let myArray1 = [1, 2, 3, 4, 5];
let mySet: Set<any> = new Set(myArray1);
console.log(mySet);


// .values()
let iterate = mySet.values();
for(let i of iterate){  
  console.log(i);

}

// .keys()
let iterate1 = mySet.keys();
for(let i of iterate1){  
  console.log(i);

}

// .add()

mySet.add(6);

mySet.add("hello");
mySet.add([2, 3, 5, 6]);
mySet.add(true);
mySet.add({
  name: "micheal smith",
});

console.log(mySet);

// .delete()

mySet.delete(3);
mySet.delete("hello");
mySet.delete({
  name: "micheal smith",
});

console.log(mySet);


// .clear()

mySet.clear();

console.log(mySet);

//  .has()

console.log(mySet.has("hello"));
console.log(mySet.has(5));

//  .size()

console.log(mySet.size);

let _numbers = [1,1,1,3,5,6,7,3,2,45,2]
let removeDuplicate = [...new Set(_numbers)];
console.log(removeDuplicate);
