//
const data = {
  items: [],
};

type ItemType = (typeof data)["items"];

console.log(data);

// We can't assign below this because of 'never[]' type
// data.items.push("JavaScript");
// data.items.push("TypeScript");

// Never Happen ---- Bottomest Level
// getNever function will response never type
const getNever = () => {
  throw new Error("For Unknown");
};

const name: string = getNever();
const age: number = getNever();
