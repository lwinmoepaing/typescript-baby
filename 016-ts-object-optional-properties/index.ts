// Optional Properties "?:"
let person: {
  name: string;
  status?: "active" | "inactive";
} = {
  name: "LMP",
};

person.status = "inactive";

console.log(person);
