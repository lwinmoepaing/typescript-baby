type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const products: Array<ProductType> = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    description: "Lorem",
  },
];

type ProductWithoutID = Omit<ProductType, "id">;

type PartialProduct = Partial<ProductWithoutID>;

const updateProductById = (id: string, data: PartialProduct) => {
  const index = products.findIndex((prod) => prod.id === id);
  if (index > 0) {
    products[index] = {
      ...products[index],
      ...data,
    };
  }
};

updateProductById("1", { price: 200 });

updateProductById("1", { name: "Edited Product Name" });

updateProductById("1", { description: "New Desc", price: 10 });
