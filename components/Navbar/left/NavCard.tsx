import { Product } from "@/utils/products";
import Link from "next/link";

const NavCard = ({
  alt,
  category,
  url,
  name,
  color,
  href,
}: Product & { href: string }) => {
  return (
    <li className="w-full inline-block">
      <Link
        tabIndex={0}
        href={href}
        className="inline-block w-full h-full max-h-[200px] overflow-hidden relative rounded-2xl shadow text-primary-foreground group hover:-translate-y-1 hover:shadow-xl transition-[translate,shadow] duration-200 focus:outline-none focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:outline-primary focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 "
        style={{ backgroundColor: color }}
      >
        <p className="flex flex-col items-center w-full py-3 text-center">
          <span className="text-bold">{name}</span>
          <span className="text-sm text-bold">+ {category}</span>
        </p>
        <img
          src={url}
          alt={alt}
          className="w-[80px] absolute -bottom-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-6 group-hover:-translate-y-2 group-focus-visible:-rotate-6 group-focus-visible:-translate-y-2 transition-[translate,rotate] duration-200"
        />
      </Link>
    </li>
  );
};

export default NavCard;
