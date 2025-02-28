import { products } from "@/data/products";
import { Product } from "@/types/product";

export const getProducts = (keys: (keyof typeof products)[]) => {
  return keys
    .map((key) => ({ ...products[key], href: `/products/${key}` }))
    .filter(Boolean);
};

export const getProduct = (key: keyof typeof products) => {
  return products[key] as Product;
};
