// Example: Basic `interface`
interface User {
  id: string; // Required property
  name: string; // Required property
  age?: number; // Optional property (denoted by `?`)
}

const user: User = {
  id: "123",
  name: "John",
  // `age` is optional, so this is still valid:
};

// Invalid object:
// ❌ Error: Property 'name' is missing.
const invalidUser: User = {
  id: "123",
}; 

// Example: Adding Methods to an Interface
interface UserWithMethods {
  id: string;
  name: string;
  greet(): string; // Method definition
}

const userWithMethods: UserWithMethods = {
  id: "456",
  name: "Alice",
  greet() {
    return `Hello, my name is ${this.name}!`;
  },
};