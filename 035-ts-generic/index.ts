function identity<T>(value: T): T {
  return value;
}

// Example usage:
const num = identity<number>(42); // T is number
const str = identity<string>("Hello"); // T is string

console.log(num); // Output: 42
console.log(str); // Output: Hello

// Example: Generic Interfaces
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "TypeScript" };

console.log(numberBox.content); // Output: 100
console.log(stringBox.content); // Output: TypeScript

// Example: Api Response

interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: string; name: string }> = {
  status: 200,
  data: { id: "123", name: "Alice" },
};
