const delay = (timeout: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Return String");
    }, timeout)
  );
};

// But when we call delay function
// Response type will be Promise<unknown>

delay(1000);

// so we can set response as type
// e.g
// delay = (timeout: number): Promise<string>

// or

// You can make
// new Promise<string>(resolveFunction)
