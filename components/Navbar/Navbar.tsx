"use client";

import LeftNav from "./left/LeftNav";
import { NavigationMenuViewport, NavigationMenu } from "../NavigationMenu";
import { useState } from "react";
import { getProducts, Product } from "@/utils/products";

type NavContentItem = {
  text: string;
  href: string;
  cards: (Product & { href: string })[];
};

export type NavContentLinks = {
  [key: string]: NavContentItem;
};

const Navbar = () => {
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const navContentLinksObjects: NavContentLinks = {
    1: {
      text: "all flavours",
      href: "/collections/shop-all",
      cards: getProducts([
        "blackberry-vanilla",
        "blueberry-beet",
        "cherry-acai",
        "mango-coconut",
        "strawberry-banana",
        "strawberry-pineapple",
        "super-berry",
        "sweet-potato-goji",
      ]),
    },
    2: {
      text: "variety packs",
      href: "/products/variety-pack-smoothie",
      cards: getProducts(["prebiotic-fiber-bundle"]),
    },
    3: {
      text: "best sellers",
      href: "/collections/best-sellers",
      cards: getProducts([
        "blackberry-vanilla",
        "blueberry-beet",
        "cherry-acai",
        "mango-coconut",
        "strawberry-banana",
        "strawberry-pineapple",
        "super-berry",
        "sweet-potato-goji",
        "prebiotic-fiber-bundle",
      ]),
    },
    4: {
      text: "prebiotic fiber",
      href: "/collections/prebiotic-fiber",
      cards: getProducts([
        "strawberry-pineapple",
        "blueberry-beet",
        "blackberry-vanilla",
        "mango-coconut",
        "cherry-acai",
        "sweet-potato-goji",
        "blackberry-vanilla",
      ]),
    },
    5: {
      text: "immune support",
      href: "/collections/immunity-support",
      cards: getProducts([
        "super-berry",
        "strawberry-banana",
        "super-tropical",
      ]),
    },
    6: {
      text: "nut butter",
      href: "/collections/nut-butters",
      cards: getProducts([
        "apple-cinnamon-almond-butter",
        "strawberry-peanut-butter",
      ]),
    },
  } as const;

  return (
    <div className="px-4 [&:has([data-state=open])_header]:rounded-b-none">
      {/* [&:has([data-state=open])_header]:rounded-b-none = if there is a tag that have data-state=open in this div then give header a rounded-b-none */}
      <NavigationMenu className="max-w-none">
        <header className="rounded-3xl h-16 p-2 w-full flex justify-between bg-background shadow-sm">
          <LeftNav
            hoveredSubMenu={hoveredSubMenu}
            setHoveredSubMenu={setHoveredSubMenu}
            navContentLinksObjects={navContentLinksObjects}
          />
          <nav>
            <h1 className="text-5xl font-semibold">Jamilk</h1>
          </nav>
          <div className="w-full flex justify-end">RIGHT</div>
        </header>
        <NavigationMenuViewport
          className={`bg-transparent border-none shadow-none rounded-none overflow-visible mt-0 ${
            hoveredSubMenu ? "w-full md:w-full" : "w-fit"
          }`}
          containerViewportClassName="justify-start w-full rounded-none"
        />
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
