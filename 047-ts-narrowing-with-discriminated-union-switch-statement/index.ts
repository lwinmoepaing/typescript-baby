type DefaultItemType = {
  itemName: string;
  itemPrice: number;
};

type DeliveryType = {
  id: string;
  name: string;
};

type ReceiveUser = {
  id: string;
  name: string;
  address: string;
};

type PendingOrder = {
  status: "pending";
} & DefaultItemType;

type OnGoingOrder = {
  status: "ongoing";
  delivery: DeliveryType;
} & DefaultItemType;

type CompleteOrder = {
  status: "completed";
  delivery: DeliveryType;
  receiver: ReceiveUser;
} & DefaultItemType;

type OrderUnion = PendingOrder | OnGoingOrder | CompleteOrder;

const checkOrder = (order: OrderUnion) => {
  switch (order.status) {
    case "pending":
      console.log(order.status);
      break;

    case "ongoing":
      console.log(order.delivery);
      break;

    case "completed":
      console.log(order.receiver);
      break;
  }
};

const pendingOrder: PendingOrder = {
  status: "pending",
  itemName: "Apple",
  itemPrice: 1000,
};

const onGoingOrder: OnGoingOrder = {
  status: "ongoing",
  itemName: "Orange",
  itemPrice: 800,
  delivery: {
    id: "100",
    name: "Lwin",
  },
};

const receiver: CompleteOrder = {
  status: "completed",
  itemName: "Orange",
  itemPrice: 800,
  delivery: {
    id: "100",
    name: "Lwin",
  },
  receiver: {
    id: "1",
    name: "Moe",
    address: "YGN",
  },
};

// Testing
checkOrder(receiver);
