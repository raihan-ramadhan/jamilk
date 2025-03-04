"use client";

import { Button } from "@/components/ui/button";
import JamilkLogo from "@/components/jamilk-logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { NavContentLinks } from "@/types/product";
import Link from "next/link";
import { accordionTriggerstyle } from "@/components/ui/accordion";
import { cn } from "@/utils/utils";
import CartTrigger from "../../Cart/CartTrigger";
import NavAccordionMenu from "@/components/Navbar/fragments/left/mobile/NavAccordionMenu";

import Cart from "../../Cart/Cart";

const NavMenuMobile = ({
  navContentLinks,
}: {
  navContentLinks: NavContentLinks;
}) => {
  const [openSheet, setOpenSheet] = useState<"main" | "sub" | null>(null);

  return (
    <>
      <Sheet
        open={openSheet === "main"}
        onOpenChange={(open) => !open && setOpenSheet(null)}
      >
        <SheetTrigger asChild>
          <Button
            onClick={() => setOpenSheet("main")}
            variant="secondary"
            className="shadow-none hover:scale-none hover:shadow-none focus:scale-none focus:shadow-none flex flex-col justify-between h-full group/navmenumobile py-3 px-3"
          >
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
            <span className="sr-only">toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex flex-col overflow-hidden p-0 pb-6 gap-0"
        >
          <SheetHeader className="justify-between w-full items-center p-6">
            <SheetClose>
              <X className="size-8" />
              <span className="sr-only">Close</span>
            </SheetClose>
            <SheetTitle>
              <JamilkLogo />
            </SheetTitle>
            <CartTrigger onClick={() => setOpenSheet("sub")} />
          </SheetHeader>
          <div className="flex flex-col flex-1 overflow-y-auto w-full p-6 pb-0 pt-0 gap-6">
            <div className="flex-1 space-y-2">
              <NavAccordionMenu navContentLinks={navContentLinks} />
              <Link
                href="/about-us"
                className={cn(
                  accordionTriggerstyle(),
                  "border border-border rounded-3xl px-3 group/sheet-ourstory"
                )}
              >
                <span className="after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-[width] after:duration-500 group-hover/sheet-ourstory:after:w-full group-focus/sheet-ourstory:after:w-full inline-block relative">
                  Out Story
                </span>
                <ChevronRight className="text-muted-foreground pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200 bg-primary size-7 text-primary-foreground rounded-full p-1" />
              </Link>
            </div>
            <SheetFooter className="flex flex-col sm:flex-col gap-3">
              <Button asChild>
                <Link href="/subscribe-save" className={"w-full"}>
                  subscribe and save
                </Link>
              </Button>
              <div className="w-full flex gap-3">
                <Button asChild>
                  <Link href="/store-locator" className={"w-full"}>
                    find in stores
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/rewards" className={"w-full"}>
                    rewards
                  </Link>
                </Button>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
      <Cart
        open={openSheet === "sub"}
        isHiddenTrigger={true}
        onOpenChange={(open) => !open && setOpenSheet(null)}
      />
    </>
  );
};

export default NavMenuMobile;
