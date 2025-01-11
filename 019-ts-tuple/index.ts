// Tuple
// Example Color Tutple [Red, Green, Blue]
type ColorTuple = [number, number, number];

const red: ColorTuple = [255, 0, 0];
console.log(red);

// Listing for custom Tuple
// Sometime we are using as Matrix !!
const colorList: ColorTuple[] = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(colorList);

// Key Value Tuple Array
// Want to get tuple-list from this object {"name": "LMP", "location": "CNX"}
// Response: [ ["name", "LMP"], ["location": "CNX"] ]

type PersonTuple = [string, string]; // [key, value]
const person = { name: "LMP", location: "CNX" };

let personTupleList: PersonTuple[] = [];

Object.keys(person).map((key) => {
  // We'll learn later "typeof" & "keyof" & "as"
  type keys = keyof typeof person;
  const personKey = key as keys;

  personTupleList.push([personKey, person[personKey]]);
});

console.log(personTupleList);
