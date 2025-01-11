type ProductType = {
  id: string;
  name: string;
  price: number;
};

type AddProduct = Omit<ProductType, "id">;

const addProduct = (newProduct: AddProduct): ProductType => {
  const generatedId = Math.random() + "";

  return {
    id: generatedId,
    name: newProduct.name,
    price: newProduct.price,
  };
};

addProduct({ name: "Apple", price: 100 });