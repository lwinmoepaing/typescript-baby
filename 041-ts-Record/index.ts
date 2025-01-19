type UserType = {
  [index: string]: string;
};

const user: UserType = {
  name: "LMP",
};

type PlayerType = Record<string, string>;

const player: PlayerType = {
  name: "Player One",
};

type Item = {
  name: string;
  price: number;
};

type OrderList = Record<string, Item>;

const orderList: OrderList = {
  order1: { name: "Apple", price: 200 },
  order2: { name: "Apple", price: 200 },
};
 