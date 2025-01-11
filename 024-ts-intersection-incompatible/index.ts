type BasedUser = {
  id: string;
};

type Person = {
  id: number;
  name: string;
};

type Admin = BasedUser & Person;

// const admin: Admin = {
//   id: "admin",
//   name: "Admin",
// };
// console.log(admin);

