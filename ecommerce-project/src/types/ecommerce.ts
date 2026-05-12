export type Product = {
  id: string;
  name: string;
  image: string;
};

export type OrderProduct = {
  productId: string;
  estimatedDeliveryTimeMs: number;
  quantity: number;
  product: Product;
};

export type Order = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderProduct[];
};
