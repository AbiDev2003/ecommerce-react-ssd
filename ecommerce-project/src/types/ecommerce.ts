export type CartItem = {
  productId: string;
  quantity: number;
  product: Product;
  deliveryOptionId: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  priceCents: number;
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

export type DeliveryOption = {
  id: string;
  deliveryDays: number;
  priceCents: number;
  estimatedDeliveryTimeMs: number;
};

export type PaymentSummary = {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
};
