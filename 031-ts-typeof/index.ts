// Basic Example:
// TypeScript infers `username` is a string.
let username = "John Doe"; 

// Using `typeof` to create a type based on `username`:
type UsernameType = typeof username;

// ✅ This works.
const newUserName: UsernameType = "John Snow";

// ❌ Error: Type 'number' is not assignable to type 'string'.
const invalidUsername: UsernameType = 123; 

// Real-world Example: Configurations
const appConfig = {
  appName: "MyCoolApp",
  version: "1.0.0",
  debugMode: true,
};

// Use `typeof` to create a type from the existing configuration object.
type AppConfigType = typeof appConfig;

// Now, `AppConfigType` is equivalent to:
// type AppConfigType = {
//   appName: string;
//   version: string;
//   debugMode: boolean;
// };