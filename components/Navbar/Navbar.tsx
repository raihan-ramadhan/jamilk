"use client";

import { useState } from "react";
import { cn } from "@/utils/utils";
import JamilkLogo from "../jamilk-logo";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <header
        className={cn(
          "mx-2 sm:mx-4 rounded-3xl h-16 p-2 bg-background shadow-sm relative z-50 flex justify-between @container/header items-center",
          open && "rounded-b-none"
        )}
      >
        <Left open={open} setOpen={setOpen} />
        <JamilkLogo className="text-[40px] tracking-[-2px] px-0 sm:px-3 sm:tracking-[-4px] sm:text-5xl" />
        <Right />
      </header>
    </nav>
  );
};

export default Navbar;
