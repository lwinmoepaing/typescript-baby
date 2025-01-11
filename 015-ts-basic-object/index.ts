// Inference
const personInfer = {
  name: "LMP",
  location: "CNX",
  status: "active",
};
console.log(personInfer.location);

// Basic Object
const person: {
  name: string;
  age: number;
  status: "active" | "inactive";
} = {
  name: "Lwin",
  age: 28,
  status: "active",
};
console.log(person.name);
console.log(person.status);
