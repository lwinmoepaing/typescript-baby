// Variable annotation

let myName: string = "LMP";
console.log("myName = ", myName);

let age: number = 28;
console.log("age = ", age);

let isStudent: boolean;
isStudent = false;
console.log("isStudent = ", isStudent);

// Type inference

let address = "YGN";
console.log("address = ", address);

let x = 10;
let y = 20;

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(x, y));