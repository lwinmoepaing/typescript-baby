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

type AssertAdminFn = (
  user: AdminUser | NormalUser
) => asserts user is AdminUser;

const checkIsAdmin: AssertAdminFn = (user) => {
  if (user.role !== "admin") throw new Error("Only access for Admin User");
};

const actionForAdmin = (user: AdminUser | NormalUser) => {
  try {
    checkIsAdmin(user);
    console.log(user.adminInfo);
  } catch {}
};
