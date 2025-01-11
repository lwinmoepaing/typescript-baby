console.log(typeof "Hello world!"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof BigInt("145")); // bigint
console.log(typeof Symbol("@")); // symbol
console.log(typeof null); // null
console.log(typeof undefined); // undefinded

class Car {
  constructor(name) {
    this.name = name;
  }
}

const car = new Car("BMW");
console.log(typeof car); // Car Class

console.log(typeof new Map()); // object
console.log(typeof ["hello", "world"]); // object

console.log(typeof function () {}); // function
