import { Product } from "./product";

export type CartItem = {
  product: Product;
  total: number;
};

export type CartItems = CartItem[];
