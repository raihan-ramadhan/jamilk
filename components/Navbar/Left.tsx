import { NavContentLinks } from "@/types/product";
import { getProducts } from "@/utils/products";
import NavMenuleftDesktop from "./fragments/left/desktop/NavMenuDesktop";
import NavMenuMobile from "./fragments/left/mobile/LeftMenuMobile";

const Left = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navContentLinks: NavContentLinks = {
    1: {
      text: "All Flavors",
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
      text: "variety Packs",
      href: "/products/variety-pack-smoothie",
      cards: getProducts(["prebiotic-fiber-bundle"]),
    },
    3: {
      text: "Best Sellers",
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
      text: "Prebiotic Fiber",
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
      text: "Immune Support",
      href: "/collections/immunity-support",
      cards: getProducts([
        "super-berry",
        "strawberry-banana",
        "super-tropical",
      ]),
    },
    6: {
      text: "Nut Butter",
      href: "/collections/nut-butters",
      cards: getProducts([
        "apple-cinnamon-almond-butter",
        "strawberry-peanut-butter",
      ]),
    },
  } as const;

  return (
    <div className="flex items-center gap-1">
      <div className="hidden lg:block">
        <NavMenuleftDesktop
          open={open}
          navContentLinks={navContentLinks}
          setOpen={setOpen}
        />
      </div>
      <div className="lg:hidden">
        <NavMenuMobile navContentLinks={navContentLinks} />
      </div>
    </div>
  );
};

export default Left;
