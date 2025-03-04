import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/utils";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { Dialog, Portal } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { NavContentLinks } from "@/types/product";
import NavCardDesktop from "./NavCardDesktop";
import NavigationLinkButton from "../../NavigationLinkButton";

const NavMenuleftDesktop = ({
  navContentLinks,
  open,
  setOpen,
}: {
  navContentLinks: NavContentLinks;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnterNavigation = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current); // Clear any pending timeout
    }
    setOpen(true);
  };

  const handleMouseLeaveNavigation = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    const relatedTarget = event.relatedTarget as Node | null;

    if (
      relatedTarget instanceof Node &&
      (triggerRef?.current?.contains(relatedTarget) ||
        contentRef?.current?.contains(relatedTarget))
    ) {
      return;
    }
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      setHoveredSubMenu(null);
    }, 200);
  };

  const subMenuItemsContainerRef = useRef<HTMLDivElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const handleMouseLeaveSubMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;
    if (
      relatedTarget instanceof Node &&
      (subMenuItemsContainerRef?.current?.contains(relatedTarget) ||
        subMenuRef?.current?.contains(relatedTarget))
    ) {
      return;
    }
    setHoveredSubMenu(null);
  };

  const handleLeaveContent = () => {
    setTimeout(() => {
      if (
        contentRef.current &&
        contentRef.current.contains(document.activeElement)
      ) {
        return;
      }
      setOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-x-1">
      {/* TRIGGER */}
      <Button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        onMouseEnter={handleMouseEnterNavigation}
        onMouseLeave={handleMouseLeaveNavigation}
        style={{ pointerEvents: "auto" }}
        className={cn(
          "group relative inline-flex w-max items-center justify-center px-4 py-2 text-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 h-12 border border-border rounded-2xl cursor-pointer gap-1 hover:scale-100 focus:scale-100 before:content-[ ] before:absolute before:w-full before:inset-0 before:-bottom-3 before:!-z-[1] ",
          open
            ? "bg-primary text-primary-foreground"
            : "!bg-secondary text-secondary-foreground"
        )}
        onBlur={handleLeaveContent}
        onFocus={() => setOpen(true)}
      >
        Shop
        <Plus
          className={cn(
            "rotate-0 transition-transform duration-200 !size-6",
            open && "rotate-45"
          )}
        />
      </Button>
      {/* CONTENT */}
      <div
        ref={contentRef}
        style={{ pointerEvents: "auto" }}
        className={cn(
          "bg-popover absolute left-0 top-full flex flex-col duration-300 rounded-b-3xl overflow-hidden border-t border-border p-3 pr-0",
          open
            ? "animate-in fade-in opacity-100 visible"
            : "fade-out animate-out opacity-0 invisible delay-75",
          !!hoveredSubMenu && "right-0"
        )}
        onMouseLeave={handleMouseLeaveNavigation}
        onBlur={handleLeaveContent}
      >
        <div
          className="size-fit bg-popover"
          ref={subMenuItemsContainerRef}
          onMouseLeave={handleMouseLeaveSubMenu}
        >
          {Object.entries(navContentLinks).map(([key, { href, text }]) => (
            <div key={key} className={"pr-3"}>
              <Link
                onFocus={() => setHoveredSubMenu(key)}
                onMouseEnter={() => setHoveredSubMenu(key)}
                href={href}
                className={cn(
                  "h-full text-2xl py-2 px-3 inline-flex justify-between items-center rounded-2xl bg-background hover:bg-secondary text-nowrap focus:bg-secondary focus:border-border outline-none w-[300px] border border-transparent hover:border-border",
                  hoveredSubMenu === key && "border-border"
                )}
              >
                {text.toLowerCase()}
                <div className="rounded-full bg-primary text-primary-foreground size-6 inline-flex justify-center items-center">
                  <ChevronRight className="size-5" />
                </div>
              </Link>
              {hoveredSubMenu && hoveredSubMenu == key ? (
                <div
                  className="bg-popover px-5 py-3 @container absolute right-0 top-0 w-[calc(100%-324px)] h-full overflow-y-auto"
                  ref={subMenuRef}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  <ul
                    className={cn(
                      "h-full grid grid-cols-5 gap-3 @max-[600px]:grid-cols-4 @max-[450px]:grid-cols-3 @max-[375px]:grid-cols-2 "
                    )}
                  >
                    {hoveredSubMenu
                      ? navContentLinks[
                          hoveredSubMenu as keyof NavContentLinks
                        ].cards.map((props, i) => (
                          <NavCardDesktop key={hoveredSubMenu + i} {...props} />
                        ))
                      : null}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex pt-3 justify-between pr-3 gap-3 w-[312px]">
          <Button asChild>
            <Link href="/store-locator" className={"w-full"}>
              find in store
            </Link>
          </Button>
          <Button asChild>
            <Link href="/rewards" className={"w-full"}>
              reward
            </Link>
          </Button>
        </div>
      </div>
      {/* OVERLAY */}
      <Dialog open={open} onOpenChange={setOpen}>
        <Portal>
          <div
            onClick={() => setOpen(false)}
            className={cn(
              "duration-200 bg-black/30 fixed inset-0 size-full",
              open ? "animate-in fade-in" : "fade-out animate-out"
            )}
          />
        </Portal>
      </Dialog>
      <NavigationLinkButton href="/about-us">our story</NavigationLinkButton>
    </div>
  );
};

export default NavMenuleftDesktop;
