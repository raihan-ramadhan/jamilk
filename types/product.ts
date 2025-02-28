type ProductCategory = "prebiotic fiber" | "immune support" | "nut butter";

export type Product = {
  name: string;
  category: ProductCategory;
  alt: string;
  imgSrc: string;
  color: string;
  price: number;
  desc: string;
};

export type Card = Product & { href: string };

type NavContentItem = {
  text: string;
  href: string;
  cards: Card[];
};

export type NavContentLinks = {
  [key: string]: NavContentItem;
};
