import {
  NavigationMenuItem,
  NavigationMenuLinkButton,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Cart from "../Cart/Cart";

const Rightnav = () => {
  return (
    <NavigationMenuList className="h-full gap-2">
      <NavigationMenuLinkButton
        href="/subscribe-save"
        classname="hidden sm:block"
      >
        subscribe & save
      </NavigationMenuLinkButton>
      <NavigationMenuItem>
        <Cart />
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};
export default Rightnav;
