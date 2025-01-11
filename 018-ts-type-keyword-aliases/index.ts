type Person = {
  name: string;
  age: number;
  status: "active" | "inactive";
};

// Basic Object
const person: Person = {
  name: "Lwin",
  age: 28,
  status: "active",
};
console.log(person.name);
console.log(person.status);
