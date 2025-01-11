// Type Indexing
type StringObj = {
  [index: string]: string;
};

const user: StringObj = {
  name: "Walker",
  age: "20",
};

type Scores = {
  [key: string]: number;
};

const myScore: Scores = {
  myanmar: 65,
  english: 50,
  mathematic: 80,
};

type NoNo = {
  [index: number]: number;
};

const noObj: NoNo = {
  1: 100,
  "200.1": 20,
};
