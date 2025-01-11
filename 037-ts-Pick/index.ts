type ProductBaseType = {
  id: string;
  name: string;
  price: number;
  edit: boolean;
  loading: boolean;
};

type Product = Pick<ProductBaseType, "id" | "name" | "price">;
