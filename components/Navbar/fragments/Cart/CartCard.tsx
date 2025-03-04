import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/cart";
import { Minus, Plus, RefreshCcw, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartCard = ({ product, total }: CartItem) => {
  const { alt, color, imgSrc, name, price, desc, url } = product;
  return (
    <div className="border-border border-b last:border-b-0 flex w-full py-2 gap-2 relative">
      <div
        className="rounded-lg size-28 flex justify-center items-center shrink-0"
        style={{ backgroundColor: color }}
      >
        <Image
          src={imgSrc}
          alt={alt}
          className="w-10 h-auto"
          width={40}
          height={89}
        />
      </div>
      <div className="flex-1 space-y-2">
        <Link href={url} className="text-xl w-full mr-6">
          {name}
        </Link>

        <p>{desc}</p>
        <p className="inline-flex items-center gap-1">
          <RefreshCcw className="size-4 shrink-0" />
          delivery every 6 month
        </p>
        <div className="flex justify-between items-center">
          <div className="border-black border-2 py-1 px-1 rounded-full overflow-hidden flex items-center gap-1">
            <Button
              className="hover:scale-100"
              variant={"icon"}
              size={"icon"}
              title="Minus"
            >
              <Minus />
              <span className="sr-only">Minus</span>
            </Button>
            <span>{total}</span>
            <Button
              className="hover:scale-100"
              variant={"icon"}
              size={"icon"}
              title="Plus"
            >
              <Plus />
              <span className="sr-only">Plus</span>
            </Button>
          </div>
          <span className="text-lg">${total * price}</span>
        </div>
      </div>
      <Button
        size={"icon"}
        className="shrink-0 absolute right-0 top-2.5"
        variant={"icon"}
        title="Remove"
        tabIndex={0}
      >
        <X />
        <span className="sr-only">remove cart item</span>
      </Button>
    </div>
  );
};

export default CartCard;
