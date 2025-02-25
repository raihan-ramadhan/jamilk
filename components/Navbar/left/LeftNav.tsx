"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkButton,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/NavigationMenu";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronRight, Plus } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/Button";
import NavCard from "./NavCard";
import { NavContentLinks } from "../Navbar";

const Leftnav = ({
  setHoveredSubMenu,
  hoveredSubMenu,
  navContentLinksObjects,
}: {
  setHoveredSubMenu: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredSubMenu: string | null;
  navContentLinksObjects: NavContentLinks;
}) => {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;

    if (
      relatedTarget instanceof Node &&
      (div1Ref?.current?.contains(relatedTarget) ||
        div2Ref?.current?.contains(relatedTarget))
    ) {
      return;
    }
    setHoveredSubMenu(null);
  };

  return (
    <div className="h-full [&>*:first-child]:h-full w-full flex justify-start">
      <NavigationMenuList className="h-full gap-2">
        <NavigationMenuItem className="h-full">
          <NavigationMenuTrigger
            className="h-full"
            onFocus={(e) => {
              if (e.relatedTarget) {
                e.preventDefault();
                e.stopPropagation();
                e.target.click();
              }
            }}
          >
            shop{" "}
            <Plus className="group-data-[state=open]:rotate-45 group-data-[state=closed]:rotate-0 transition-transform duration-200" />
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={cn(
              "relative [&>*>*]:!static flex bg-popover rounded-b-3xl shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] border-border border-solid border-t p-0 overflow-hidden !w-fit !md:w-fit",
              hoveredSubMenu ? "!w-full md:!w-full" : ""
            )}
          >
            <NavigationMenuPrimitive.Sub>
              <NavigationMenuList className="flex-col py-3 space-x-0">
                <div
                  ref={div1Ref}
                  className="flex-col px-3 w-[300px]"
                  onMouseLeave={handleMouseLeave}
                  onBlur={() => setHoveredSubMenu(null)}
                  tabIndex={-1}
                >
                  {Object.entries(navContentLinksObjects).map(
                    ([key, { href, text }]) => (
                      <NavigationMenuItem
                        key={key}
                        value={href}
                        onFocus={() => setHoveredSubMenu(key)}
                        onMouseEnter={() => setHoveredSubMenu(key)}
                      >
                        <NavigationMenuLink
                          asChild
                          className="w-full h-full text-2xl py-2 px-3 flex justify-between items-center outline outline-transparent hover:outline-border focus:outline-border rounded-2xl bg-background hover:bg-secondary text-nowrap"
                        >
                          <Link href={href}>
                            {text}
                            <div className="rounded-full bg-primary text-primary-foreground size-6 inline-flex justify-center items-center">
                              <ChevronRight className="size-5" />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        {hoveredSubMenu && hoveredSubMenu === key ? (
                          <div
                            className="bg-popover pl-2 pr-5 py-3 @container absolute right-0 top-0 w-[calc(100%-300px)] h-full overflow-y-scroll"
                            ref={div2Ref}
                            onMouseLeave={handleMouseLeave}
                          >
                            <ul className="h-full grid grid-cols-5 gap-3 @max-[600px]:grid-cols-4 @max-[450px]:grid-cols-3 @max-[375px]:grid-cols-2">
                              {navContentLinksObjects[
                                hoveredSubMenu as keyof NavContentLinks
                              ].cards.map((props, i) => (
                                <NavCard key={i} {...props} />
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </NavigationMenuItem>
                    )
                  )}
                </div>
                <div className="flex pt-3 justify-between w-full px-3 gap-3">
                  <NavigationMenuItem className="w-full">
                    <Button type="button" asChild className="text-xl w-full">
                      <Link href={"/store-locator"}>find in store</Link>
                    </Button>{" "}
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Button type="button" asChild className="text-xl w-full">
                      <Link href={"/rewards"}>reward</Link>
                    </Button>
                  </NavigationMenuItem>
                </div>
              </NavigationMenuList>
            </NavigationMenuPrimitive.Sub>
            {/* OVERLAY */}
            <div className="fixed -z-20 inset-0 bg-black/30 w-full h-full pointer-events-none" />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuLinkButton href="/docs">
          our story
        </NavigationMenuLinkButton>
      </NavigationMenuList>
    </div>
  );
};

export default Leftnav;
