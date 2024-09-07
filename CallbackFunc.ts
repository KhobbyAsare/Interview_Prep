const isEven = (n:number) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc:Function, num:number) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 9);
// => The number 4 is an even number: True.
