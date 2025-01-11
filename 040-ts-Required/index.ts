// Example:
// Start with a type where all properties are optional:
type PartialSquare = {
  width?: number;
  height?: number;
};

// Use the `Required`
type Square = Required<PartialSquare>;

const square: Square = {
  width: 100,
  height: 100,
};

// Imagine a configuration with optional:
type Config = {
  apiKey?: string;
  debugMode?: boolean;
};

// You want to enforce 
// that all properties are provided at runtime:
type FullConfig = Required<Config>;

// ✅ This works.
const validConfig: FullConfig = {
  apiKey: "12345",
  debugMode: true,
};

// ❌ Error: Property 'debugMode' is missing in 
// type '{ apiKey: string; }' but required in type 'FullConfig'.
const invalidConfig: FullConfig = {
  apiKey: "12345",
};
