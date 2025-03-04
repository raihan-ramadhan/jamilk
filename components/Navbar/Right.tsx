import React from "react";
import NavigationLinkButton from "./fragments/NavigationLinkButton";
import Cart from "./fragments/Cart/Cart";

const Right = () => {
  return (
    <div className="items-center gap-1 hidden @[270px]/header:flex">
      <NavigationLinkButton href="/subscribe-save" classname="hidden sm:block">
        subscribe & save
      </NavigationLinkButton>
      <Cart />
    </div>
  );
};

export default Right;
