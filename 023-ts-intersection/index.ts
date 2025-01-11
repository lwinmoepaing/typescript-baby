type People = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type Admin = People & Role;

const admin: Admin = {
  name: "LMP",
  age: 20,
  role: "admin",
};

console.log(admin);
