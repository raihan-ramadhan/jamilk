"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkButton,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/utils";
import { ChevronRight, Plus } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { useRef } from "react";
import Link from "next/link";
import NavCard from "./NavCardDesktop";
import BottomButtons from "./BottomBtns";
import { NavContentLinks } from "@/types/product";

const NavMenuDekstop = ({
  hoveredSubMenu,
  setHoveredSubMenu,
  navContentLinks,
}: {
  hoveredSubMenu: string | null;
  setHoveredSubMenu: React.Dispatch<React.SetStateAction<string | null>>;
  navContentLinks: NavContentLinks;
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
                {Object.entries(navContentLinks).map(
                  ([key, { href, text }]) => (
                    <NavigationMenuItem
                      key={key}
                      value={href}
                      onFocus={() => setHoveredSubMenu(key)}
                      onMouseEnter={() => setHoveredSubMenu(key)}
                    >
                      <NavigationMenuLink
                        className="w-full h-full text-2xl py-2 px-3 flex justify-between items-center outline outline-transparent hover:outline-border rounded-2xl bg-background hover:bg-secondary text-nowrap focus:bg-secondary focus:!outline-border focus:!outline-1 focus:!outline-offset-0 focus:!outline-solid"
                        asChild
                      >
                        <Link href={href}>
                          {text.toLowerCase()}
                          <div className="rounded-full bg-primary text-primary-foreground size-6 inline-flex justify-center items-center">
                            <ChevronRight className="size-5" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      {hoveredSubMenu && hoveredSubMenu === key ? (
                        <div
                          className="bg-popover pl-2 pr-5 py-3 @container absolute right-0 top-0 w-[calc(100%-300px)] h-full overflow-y-auto"
                          ref={div2Ref}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="h-full grid grid-cols-5 gap-3 @max-[600px]:grid-cols-4 @max-[450px]:grid-cols-3 @max-[375px]:grid-cols-2">
                            {navContentLinks[
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
              <BottomButtons />
            </NavigationMenuList>
          </NavigationMenuPrimitive.Sub>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuLinkButton href="/about-us">
        our story
      </NavigationMenuLinkButton>
    </NavigationMenuList>
  );
};

export default NavMenuDekstop;
