import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const CartTrigger = (props: React.ComponentProps<typeof Button>) => {
  return (
    <Button {...props}>
      <ShoppingBag className="!size-5" />0
    </Button>
  );
};

export default CartTrigger;
