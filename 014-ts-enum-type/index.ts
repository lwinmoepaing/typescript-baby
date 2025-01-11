enum Role {
  USER,
  SUPERVISOR,
  ADMIN,
  SUPERADMIN,
}

const userRole: Role = Role.USER;
console.log(userRole);

enum Permission {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

const readPermission = Permission.READ;
console.log(readPermission);
