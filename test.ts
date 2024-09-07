console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

const promise = Promise.resolve("Promise resolved");

promise.then(() => console.log(3)).then(() => console.log(4));
