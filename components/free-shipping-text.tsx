import { constantNumbers } from "@/utils/constants";
import { cn } from "@/utils/utils";

const FreeShippingText = ({ className }: { className?: string }) => {
  return (
    <p className={cn("text-center text-white duration-150", className)}>
      free shiping on all orders over $ {constantNumbers("FREE_SHIPPING")}
    </p>
  );
};

export default FreeShippingText;
