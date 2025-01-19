type User = {
  id: string;
  name: string;
  role: "admin" | "user";
  createdAt: Date | string;
};

const getUserName = (user: User) => {
  return user.name;
};

const normalUser: User = {
  id: "1",
  name: "John Doe",
  role: "user",
  createdAt: new Date(),
};

// Can't use toDateString method of Date type
// because createdAt could be 'string' type
normalUser.createdAt.toDateString();

const userLMP = {
  id: "1",
  name: "Lwin Moe Paing",
  role: "user",
  createdAt: new Date(),
} satisfies User;

getUserName(userLMP);

// createdAt type is sure 'Date' type with satisfies
userLMP.createdAt.toDateString();
