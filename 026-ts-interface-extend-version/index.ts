// Example: Extending a Single Interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  role: string; // New property added
}

const employee: Employee = {
  name: "Alice",
  age: 30,
  role: "Developer", // `role` comes from the `Employee` interface
};

// Example: Extending Multiple Interfaces
interface Contact {
  email: string;
  phone: string;
}

interface Manager extends Person, Contact {
  department: string;
}

const manager: Manager = {
  name: "Bob",
  age: 40,
  email: "bob@example.com",
  phone: "123-456-7890",
  department: "Engineering",
};

// Real-world Example: Reusing Common Structures
interface BaseResponse {
  status: number;
  message: string;
}

interface SuccessResponse extends BaseResponse {
  data: object;
}

interface ErrorResponse extends BaseResponse {
  errorCode: string;
}

const success: SuccessResponse = {
  status: 200,
  message: "Request succeeded",
  data: { id: 1, name: "John" },
};

const error: ErrorResponse = {
  status: 404,
  message: "Not Found",
  errorCode: "RESOURCE_NOT_FOUND",
};
