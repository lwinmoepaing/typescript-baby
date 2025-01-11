function print(message: string) {
  console.log(message);
}

const helloMessage = print("Hello");

// helloMessage is void type

function getName(callback: (name: string) => void) {
  const defaultName = "Default Name";
  callback(defaultName);
}

getName((name) => {
  console.log(name);
});
