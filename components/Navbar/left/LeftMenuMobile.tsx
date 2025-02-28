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
import { X } from "lucide-react";
import { useState } from "react";
import CartTrigger from "../Cart/CartTrigger";

import Cart from "../Cart/Cart";
import NavLinkButton from "../NavLinkButton";
import AccordionNavMenu from "./AccordionNavMenu";
import { NavContentLinks } from "@/types/product";

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
            className="shadow-none hover:bg-background hover:scale-none hover:shadow-none flex flex-col justify-between h-full group/navmenumobile py-3"
          >
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
            <span className="inline-block h-[1.5px] transition-[width] w-[50px] group-hover/navmenumobile:w-[40px] content-[ ] bg-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex flex-col overflow-hidden p-0 gap-0"
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
          <div className="flex flex-col flex-1 overflow-y-auto w-full p-6 pt-0 gap-6">
            <div className="flex-1">
              <AccordionNavMenu navContentLinks={navContentLinks} />
              {/* <Button variant={"secondary"} asChild>
              <Link href="/about-us">Out Story </Link>
            </Button> */}
            </div>
            <SheetFooter className="flex flex-col sm:flex-col gap-3">
              <NavLinkButton href="/subscribe-save" className="w-full">
                subscribe and save
              </NavLinkButton>
              <div className="w-full flex gap-3">
                <NavLinkButton href="/store-locator" className="w-full">
                  find in stores
                </NavLinkButton>
                <NavLinkButton href="/rewards" className="w-full">
                  rewards
                </NavLinkButton>
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
