// Intersection over Interface

// - Interface Extends

interface InterUser {
  id: string;
  name: string;
}

interface InterUser2 {
  id: number;
  address: string;
}

// We can have error IUser for 'id' identical
interface IUser extends InterUser, InterUser2 {}

const iUser: IUser = {
  id: "",
  name: "",
  address: "",
};

// - Type Intersection

type TypeUser = {
  id: string;
  name: string;
};

type TypeUser2 = {
  id: number;
  address: string;
};

// We don't get warning here
type TUser = TypeUser & TypeUser2;

const tUser: TUser = {
  id: "", // <- we got error here
  name: "",
  address: "",
};

// We can't use 'interface' to define an union type directly.
// Error: interface AorB = A | B
// we can only use 'type' for union
// eg: type AorB = A | B
