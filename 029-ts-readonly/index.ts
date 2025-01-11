type Person = {
  readonly id: number;
  name: string;
};

const user: Person = {
  id: 1,
  name: "Lwin",
};

// Able to update name
user.name = "LMP";

// Showing error for readonly id
// user.id = 2;

type NumberArrays = readonly number[];

const nums: NumberArrays = [1, 2, 3];

// Showing error for readonly id
// nums.push(1);
// nums[0] = "1"
