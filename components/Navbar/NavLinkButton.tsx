import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenuItem } from "../ui/navigation-menu";

const NavLinkButton = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenuItem asChild>
      <Button asChild>
        <Link href={href} className={className}>
          {children}
        </Link>
      </Button>
    </NavigationMenuItem>
  );
};

export default NavLinkButton;
