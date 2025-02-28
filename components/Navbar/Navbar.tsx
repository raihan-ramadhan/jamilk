"use client";

import LeftNav from "./left/LeftNav";
import { NavigationMenuViewport, NavigationMenu } from "../ui/navigation-menu";
import { useState } from "react";
import JamilkLogo from "../jamilk-logo";
import Rightnav from "./right/Rightnav";

const Navbar = () => {
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  return (
    <div className="px-4 lg:[&:has([data-state=open])_header]:rounded-b-none">
      {/* [&:has([data-state=open])_header]:rounded-b-none = if there is a tag that have data-state=open in this div then give header a rounded-b-none */}
      <NavigationMenu className="max-w-none">
        <header className="rounded-3xl h-16 p-2 w-full flex justify-between bg-background shadow-sm">
          <LeftNav
            hoveredSubMenu={hoveredSubMenu}
            setHoveredSubMenu={setHoveredSubMenu}
          />
          <nav>
            <JamilkLogo className="text-5xl" />
          </nav>
          <div className="w-full flex justify-end">
            <Rightnav />
          </div>
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
