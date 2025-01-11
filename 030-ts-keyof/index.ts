type User = {
  id: string;
  name: string;
  age: number;
};

// The keys of User => "id" | "name" | "aage"
type UserKeys = keyof User;

// the Keys could be "name" | "age"
type Keys = keyof {
  name: string;
  age: number;
};
