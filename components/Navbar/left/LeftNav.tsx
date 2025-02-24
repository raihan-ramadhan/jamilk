"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/NavigationMenu";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronRight, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/Button";

const Leftnav = () => {
  const navContentLinksObjects = [
    {
      text: "all flavours",
      href: "/collections/shop-all",
    },
    {
      text: "variety packs",
      href: "/products/variety-pack-smoothie",
    },
    { text: "best sellers", href: "/collections/best-sellers" },
    { text: "prebiotic fiber", href: "/collections/prebiotic-fiber" },
    { text: "immune support", href: "/collections/immunity-support" },
    { text: "nut butter", href: "/collections/nut-butters" },
  ] as const;
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    // Get the related target (where the cursor is going next)
    const relatedTarget = event.relatedTarget as Node;

    // If the related target is inside either div1 or div2, do nothing
    if (
      div1Ref?.current?.contains(relatedTarget) ||
      div2Ref?.current?.contains(relatedTarget)
    ) {
      return;
    }

    // If the cursor has left both divs, log the message
    setHoveredSubMenu(null);
  };

  return (
    <div className="h-full [&>*:first-child]:h-full w-full flex justify-start">
      <NavigationMenuList className="h-full">
        <NavigationMenuItem className="h-full">
          <NavigationMenuTrigger className="h-full">
            shop{" "}
            <Plus
              className="group-data-[state=open]:rotate-45 group-data-[state=closed]:rotate-0 transition-transform duration-200"
              aria-hidden="true"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={cn(
              "relative flex bg-popover rounded-b-3xl shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] border-border border-t-0 border-solid p-0 overflow-hidden",
              hoveredSubMenu ? "w-full" : "w-fit"
            )}
          >
            <NavigationMenuPrimitive.Sub>
              <NavigationMenuList className="flex-col py-3">
                <div
                  className="flex-col px-3"
                  ref={div1Ref}
                  onMouseLeave={handleMouseLeave}
                  onBlur={() => setHoveredSubMenu(null)}
                  tabIndex={-1}
                >
                  {navContentLinksObjects.map(({ href, text }, i) => (
                    <NavigationMenuItem
                      key={i}
                      value={href}
                      onFocus={() => setHoveredSubMenu(text)}
                      onMouseEnter={() => setHoveredSubMenu(text)}
                      className="bg-background hover:bg-secondary outline outline-transparent hover:outline-border outline-1 rounded-2xl overflow-hidden text-nowrap w-full"
                    >
                      <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink className="w-full h-full text-2xl py-2 px-3 flex justify-between items-center gap-5">
                          {text}
                          <div className="rounded-full bg-primary text-primary-foreground size-6 flex justify-center items-center">
                            <ChevronRight className="size-5" />
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </div>
                <div className="flex">
                  <NavigationMenuItem>
                    <Button type="button" asChild>
                      <Link href={"/store-locator"}>find in store</Link>
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button asChild>
                      <Link href={"/rewards"}>reward</Link>
                    </Button>
                  </NavigationMenuItem>
                </div>
              </NavigationMenuList>
            </NavigationMenuPrimitive.Sub>
            {hoveredSubMenu ? (
              <div
                className="w-full bg-green-200 pl-5"
                ref={div2Ref}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredSubMenu}
              </div>
            ) : null}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </div>
  );
};

export default Leftnav;
