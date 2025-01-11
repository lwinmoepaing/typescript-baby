let anyValue;

anyValue = "Lwin";

anyValue = 1;

anyValue = [1, 2, 3];

// Constant Any
let anyAnnotation: any = 123;

anyAnnotation = "Something";

anyAnnotation.nothingMethod();

// Reality

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    // Any type
    console.log(json);
  });
