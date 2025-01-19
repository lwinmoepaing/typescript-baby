const convertNumber = (value: string | number) => {
  if (typeof value === "string") {
    // Vaule type will be "string" in this scope
    console.log(value);
    console.log(value.toUpperCase());
  } else {
    // Vaule type will be "number" in this scope
    console.log(value);
    console.log(value.toLocaleString());
  }

  // Value Type will be "number" or "string" in this scope
  console.log("String or Number: ", value);
};

// Conditional Narrowing with "If" statement
const validatePassword = (password: string | null): boolean => {
  // This will show error because "password" could be null
  // return password.length > 5;

  if (password) {
    return password.length > 6;
  }

  return false;
};

type Event = {
  message: string;
};

const processEventMap = (eventMap: Map<string, Event>) => {
  // This example will get error
  // because event.has can not be unknown when it get inside if scope
  // if (eventMap.has("error")) {
  //   const message = eventMap.get("error").message;
  // }

  const errorEvent = eventMap.get("error");

  if (errorEvent) {
    const message = errorEvent.message;
  }
};

// Conditional Narrowing with "in" statement
type Response =
  | {
      data: {
        id: string;
      };
    }
  | { error: Error };

const handleResponse = (res: Response) => {
  if ("data" in res) {
    return res.data.id;
  }

  return res.error;
};

// Narrowing with "instance of"
const getUser = () => {
  try {
    // Some login to fetch user data...
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};

// Narrowing in Different Scope
type User = { id: string; name: string };
const users: Array<User> = [
  { id: "1", name: "Lwin" },
  { id: "2", name: "Moe" },
  { id: "3", name: "Paing" },
];

// This example will show error
// const findUserByName = (search: { name?: string }) => {
//   if (search.name) {
//     // We can still update search.name = "blah blah"
//     // or empty string here!!
//     return users.filter((user) => {
//       return user.name.includes(search.name);
//     });
//   }
//   return users;
// };

const findUserByName = (search: { name?: string }) => {
  const searchName = search.name;
  if (searchName) {
    return users.filter((user) => {
      return user.name.includes(searchName);
    });
  }
  return users;
};

findUserByName({});
findUserByName({ name: "Moe" });
