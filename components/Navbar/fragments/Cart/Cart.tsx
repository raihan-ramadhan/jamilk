import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartTrigger from "./CartTrigger";
import { Minus, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { getProduct } from "@/utils/products";
import CartCard from "./CartCard";
import { CartItems } from "@/types/cart";
import { Checkbox } from "@/components/ui/checkbox";
import { checkout } from "@/actions/cart";
import { constantNumbers, constantStrings } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import Image from "next/image";

const Cart = ({
  open,
  onOpenChange,
  isHiddenTrigger,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isHiddenTrigger?: boolean;
}) => {
  const freeShipping: number = constantNumbers("FREE_SHIPPING") as number;
  const cartItems = useMemo(
    () => [
      { product: getProduct("apple-cinnamon-almond-butter"), total: 2 },
      { product: getProduct("strawberry-peanut-butter"), total: 2 },
    ],
    []
  );

  const checkoutSum = (items: CartItems) => {
    return items.reduce(
      (acc, item) => acc + item.product.price * item.total,
      0
    );
  };

  const total = useMemo(() => checkoutSum(cartItems), [cartItems]);

  function getProgressPercentage(current: number, goal: number) {
    return Math.floor((current / goal) * 100);
  }

  const percentSlider = getProgressPercentage(total, freeShipping);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const { status } = await checkout(formData);

    if (status === constantStrings("STATUS_SUCCESS")) alert("success");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {isHiddenTrigger ? null : (
        <SheetTrigger asChild>
          <CartTrigger />
        </SheetTrigger>
      )}
      <SheetContent className="flex flex-col p-0 gap-0">
        <SheetHeader className="flex flex-col p-6">
          <SheetClose
            title="Close"
            className="sm:-left-[60px] sm:top-4 top-7 left-3 text-foreground absolute sm:text-white border-none sm:border sm:border-white sm:focus-visible:outline-white focus-visible:outline-primary bg-white/20 ml-2 sm:ml-0 size-6 sm:size-12"
          >
            <X className="size-6 sm:size-8" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <SheetTitle className="sr-only">
            <span>cart</span>
          </SheetTitle>
          <p className="text-center w-full leading-loose text-[15px] sm:text-lg">
            {total >= freeShipping
              ? "free shipping unlocked!"
              : `you are away $${(freeShipping - total).toFixed(
                  2
                )} from free shipping!`}
          </p>
          <Slider
            className="pt-2"
            isHiddenThumb
            value={[percentSlider > 100 ? 100 : percentSlider]}
          />
        </SheetHeader>
        <div className="flex flex-col space-y-3 flex-1 overflow-y-auto px-6">
          {cartItems.map((cartitem, i) => (
            <CartCard key={i} {...cartitem} />
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-primary/30 shrink-0 h-fit flex flex-col px-6 py-3 items-center w-full gap-3 rounded-b-4xl"
        >
          <label
            htmlFor="shipping-protection"
            className="flex w-full justify-between select-none"
          >
            <div className="flex relative items-center gap-2 text-sm cursor-pointer">
              <Checkbox id="shipping-protection" className="outline-white" />
              Shipping Protection{" "}
              <Image
                alt="pw-logo"
                src={"/pw-logo.svg"}
                className="h-2.5 w-auto"
                width={60}
                height={10}
              />
            </div>
            <span>$1.95</span>
          </label>
          <span className="select-none text-sm">
            *if your package is lost, stolen, or damaged, Route will refund or
            replace it
          </span>
          <Button
            type="submit"
            className="rounded-full w-full font-semibold outline-white"
          >
            checkout <Minus className="!size-5" /> ${total.toFixed(2)}
          </Button>
          <span className="font-semibold text-xs">
            free shipping on orders over ${freeShipping}
          </span>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
