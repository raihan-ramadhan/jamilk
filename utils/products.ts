type ProductCategory = "prebiotic fiber" | "immune support" | "nut butter";

export type Product = {
  name: string;
  category: ProductCategory;
  alt: string;
  url: string;
  color: string;
};

type Products = Record<string, Product>;

const products: Products = {
  "blackberry-vanilla": {
    name: "blackberry vanilla",
    category: "prebiotic fiber",
    alt: "Blackberry Vanilla, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#3e3668",
  },
  "blueberry-beet": {
    name: "blueberry beet",
    category: "prebiotic fiber",
    alt: "Blueberry Beet, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#3a60b7",
  },
  "cherry-acai": {
    name: "cherry acai",
    category: "prebiotic fiber",
    alt: "Cherry Acai, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#962f6c",
  },
  "mango-coconut": {
    name: "mango coconut",
    category: "prebiotic fiber",
    alt: "Mango Coconut, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#f1b500",
  },
  "strawberry-banana": {
    name: "strawberry banana",
    category: "immune support",
    alt: "Strawberry Banana, Superfood Smoothie + Immune Support",
    url: "/objects/jamilk.png",
    color: "#e14a79",
  },
  "strawberry-pineapple": {
    name: "strawberry pineapple",
    category: "prebiotic fiber",
    alt: "Strawberry Pineapple, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#e9404f",
  },
  "super-berry": {
    name: "super berry",
    category: "immune support",
    alt: "Super Berry, Superfood Smoothie + Immune Support",
    url: "/objects/jamilk.png",
    color: "#3a92d5",
  },
  "sweet-potato-goji": {
    name: "sweet potato goji",
    category: "prebiotic fiber",
    alt: "Sweet Potato Goji, Superfood Smoothie + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#ff8025",
  },
  "prebiotic-fiber-bundle": {
    name: "prebiotic fiber bundle",
    category: "prebiotic fiber",
    alt: "Variety Pack, Superfood Smoothies + Prebiotic Fiber",
    url: "/objects/jamilk.png",
    color: "#73b938",
  },
  "super-tropical": {
    name: "super tropical",
    category: "immune support",
    alt: "Super Tropical, Superfood Smoothie + Immune Support",
    url: "/objects/jamilk.png",
    color: "#f19d00",
  },
  "apple-cinnamon-almond-butter": {
    name: "apple cinnamon, almond butter",
    category: "nut butter",
    alt: "Apple Cinnamon, Almond Butter, Superfood Smoothie + Nut Butter",
    url: "/objects/jamilk.png",
    color: "#ae3911",
  },
  "strawberry-peanut-butter": {
    name: "nut butter",
    category: "nut butter",
    alt: "Strawberry Peanut Butter, Superfood Smoothie + Nut Butter",
    url: "/objects/jamilk.png",
    color: "#f25d46",
  },
} as const;

export const getProducts = (keys: (keyof typeof products)[]) => {
  return keys
    .map((key) => ({ ...products[key], href: `/products/${key}` }))
    .filter(Boolean);
};
