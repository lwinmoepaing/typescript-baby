const a: unknown = "string";

// Unlikey "any" type
// We can't access object like a.someMethod();
// or a.someProperties
console.log(a);

// Mostly we can get unknown error
const throwError = () => {
  throw new Error("Just throwing error message");
};

try {
  throwError();
} catch (error) {
  // error is unknown in catch

  if (error instanceof Error) {
    console.log(error.message);
  }
}
