// Interface As The Function

// Example 1: Print Function - Logs a string (Return Type: void)
interface PrintFn {
  (str: string): void;
}

const print: PrintFn = (log) => {
  console.log(log);
};

print("Hello World");

// Example 2: Sum Function - Adds two numbers (Return Type: number)
interface Sum {
  (a: number, b: number): number;
}

const add: Sum = (a, b) => a + b;
console.log(add(10, 20)); // 30

// Example 3: Fetch Data Function - Mimics an API call (Return Type: Promise<string>)
interface FetchData {
  (url: string): Promise<string>;
}

const fetchData: FetchData = async (url) => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data from ${url}`), 1000);
  });
};
fetchData("https://api.example.com/data").then(console.log);

// Example 4: String Formatter - Capitalizes a string
interface StringFormatter {
  (input: string): string;
}

const capitalize: StringFormatter = (input) => 
  input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
console.log(capitalize("hello world")); // Hello world