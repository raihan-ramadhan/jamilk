type ProductCategory = "prebiotic fiber" | "immune support" | "nut butter";

export type Product = {
  name: string;
  category: ProductCategory;
  alt: string;
  imgSrc: string;
  color: string;
  price: number;
  desc: string;
  url: string;
};

type NavContentItem = {
  text: string;
  href: string;
  cards: Product[];
};

export type NavContentLinks = {
  [key: string]: NavContentItem;
};
