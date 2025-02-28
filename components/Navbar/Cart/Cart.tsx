import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartTrigger from "./CartTrigger";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { getProduct } from "@/utils/products";
import CartCard from "./CartCard";
import { CartItems } from "@/types/cart";

const Cart = ({
  open,
  onOpenChange,
  isHiddenTrigger,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isHiddenTrigger?: boolean;
}) => {
  const cartItems: CartItems = [
    { product: getProduct("blackberry-vanilla"), total: 2 },
    { product: getProduct("strawberry-pineapple"), total: 2 },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {isHiddenTrigger ? null : (
        <SheetTrigger asChild>
          <CartTrigger />
        </SheetTrigger>
      )}
      <SheetContent>
        <SheetClose className="md:-left-[60px] top-4 left-0 text-foreground border-foreground absolute md:text-white md:border-white md:focus-visible:outline-white focus-visible:outline-primary bg-white/20">
          <X className="size-8" />
          <span className="sr-only">Close</span>
        </SheetClose>
        <SheetHeader className="flex flex-col">
          <SheetTitle className="sr-only">
            <span>cart</span>
          </SheetTitle>
          <p className="text-center w-full text-lg">
            you are $35 away from free shipping!
          </p>
          <Slider className="pt-2" isHiddenThumb value={[50]} />
        </SheetHeader>
        <div className="py-10 flex flex-col gap-10">
          {cartItems.map((cartitem, i) => (
            <CartCard key={i} {...cartitem} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
