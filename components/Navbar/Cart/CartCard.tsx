import { CartItem } from "@/types/cart";

const CartCard = ({ product, total }: CartItem) => {
  const { alt, color, imgSrc, name, price, desc } = product;
  return (
    <div className="border-border border-b last:border-b-0 flex w-full">
      <div
        className="rounded-lg size-30 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <img src={imgSrc} alt={alt} className="w-10" />
      </div>
      <div>
        <div>
          <p className="text-3xl">{name}</p>
          <p>delivery eery 6 month</p>
        </div>
        <div className="flex justify-between">
          <div>
            <button>-</button>
            {total}
            <button>+</button>
          </div>
          <div>{total * price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
