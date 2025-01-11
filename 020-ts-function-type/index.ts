// Auto Recognized - Return Type
function sumFn(a: number, b: number) {
  return a + b;
}
console.log(sumFn(1, 2));

// Defined Return Type
function sumFnTwo(a: number, b: number): number {
  return a + b;
}
console.log(sumFnTwo(1, 2));

// Auto Recognized - Assigned Type
const addFn = (a: number, b: number) => {
  return a + b;
};
console.log(addFn(1, 2));

// Defined Return Type
type SumType = (a: number, b: number) => number;
const addFnTwo: SumType = (a: number, b: number) => {
  return a + b;
};

console.log(addFnTwo(1, 2));
