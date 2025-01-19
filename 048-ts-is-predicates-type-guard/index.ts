const checkNumber = (value: string | number): value is number => {
  return typeof value === "number";
};

const printLucky = (value: string | number) => {
  if (checkNumber(value)) {
    console.log("Your Lucky number is", value);
  } else {
    console.log(`Ohh! You are lucky, ${value}`);
  }
};

type BasedUser = { id: string; name: string };

type NormalUser = BasedUser & {
  role: "user";
  userInfo: string;
};

type AdminUser = BasedUser & {
  role: "admin";
  adminInfo: string;
  adminData: string;
};

const checkAdmin = (user: AdminUser | NormalUser): user is AdminUser =>
  user.role === "admin";

const orderProduct = (user: AdminUser | NormalUser) => {
  // check admin user
  if (checkAdmin(user)) {
    console.log(user.adminInfo);
    console.log(user.adminData);
  } else {
    console.log(user.userInfo);
  }
};

const getAllAdminUsers = (users: (AdminUser | NormalUser)[]): AdminUser[] => {
  const allAdminUsers = users.filter(checkAdmin);
  return allAdminUsers;
};
