import { cn } from "@/utils/utils";
import Link from "next/link";

const NavigationLinkButton = ({
  children,
  href,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group/navlink inline-flex w-max items-center justify-center rounded-2xl px-4 py-2 text-md font-semibold hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 h-12",
        classname
      )}
    >
      <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-[width] after:duration-500 group-hover/navlink:after:w-full group-focus/navlink:after:w-full inline-block top-[2px]">
        {children}
      </span>
    </Link>
  );
};

export default NavigationLinkButton;
