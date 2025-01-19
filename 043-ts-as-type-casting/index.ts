// 1. Example: "as" Casting
const value: unknown = "hello";
const stringValue = value as string; // Assert 'value' as a string
console.log(stringValue.toUpperCase()); // HELLO

// 2. Example: Type Assertion with Fetch API
type User = {
  id: string;
  name: string;
};

const fetchUser = async (): Promise<User> => {
  const response = await fetch("https://example-backend.com/api/v1/user");

  // The response from `response.json()` is typed as `any`
  const parsedData = await response.json();

  // Assert that the parsed data conforms to the 'User' type
  const userData = parsedData as User;

  return userData;
};

// Usage Example
(async () => {
  const user = await fetchUser();
  console.log(`User: ${user.name}, ID: ${user.id}`);
})();
