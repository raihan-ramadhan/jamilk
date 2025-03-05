"use client";

import React, { useEffect, useState } from "react";
import FreeShippingText from "../free-shipping-text";
import Navbar from "../Navbar/Navbar";
import PromotionalText from "../PromotionalText";
import { cn } from "@/utils/utils";

const Header = ({
  freeShippingTextClassName,
}: {
  freeShippingTextClassName?: string;
}) => {
  const [isVisible, setIsVisible] = useState(() => window.scrollY <= 30);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-10">
      <PromotionalText />
      <div
        className={cn(
          "duration-150 py-2",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        )}
      >
        <FreeShippingText className={freeShippingTextClassName} />
      </div>
      <div
        className={cn(
          "duration-150",
          isVisible ? "translate-y-0" : "-translate-y-5"
        )}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
