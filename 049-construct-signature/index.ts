class Car {
  constructor(public name: string) {}
}

type WithCarConstructor<T> = {
  new (name: string): T;
};

function getCar<T>(classProps: WithCarConstructor<T>, name: string) {
  return new classProps(name);
}

const car = getCar(Car, "BMW");
console.log(car);
