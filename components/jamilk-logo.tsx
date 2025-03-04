import { cn } from "@/utils/utils";
import Link from "next/link";

const JamilkLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-5xl tracking-[-4px] font-bold rounded-full px-3",
        className
      )}
    >
      Jamilk
    </Link>
  );
};

export default JamilkLogo;
