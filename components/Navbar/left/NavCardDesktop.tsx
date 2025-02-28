import { Product } from "@/types/product";
import Link from "next/link";

const NavCard = ({
  alt,
  category,
  imgSrc,
  name,
  color,
  href,
}: Product & { href: string }) => {
  return (
    <li className="w-full inline-block">
      <Link
        tabIndex={0}
        href={href}
        className="inline-block w-full h-[185px] overflow-hidden relative rounded-2xl shadow text-primary-foreground group/navcard hover:-translate-y-1 hover:shadow-xl transition-[translate,shadow] duration-200 focus:outline-none focus-visible:-translate-y-1 focus-visible:shadow-xl"
        style={{ backgroundColor: color }}
      >
        <p className="flex flex-col items-center w-full py-3 text-center">
          <span className="text-bold">{name}</span>
          <span className="text-sm text-bold">+ {category}</span>
        </p>
        <img
          src={imgSrc}
          alt={alt}
          className="w-[80px] absolute -bottom-1/2 left-1/2 -translate-x-1/2 group-hover/navcard:-rotate-6 group-hover/navcard:-translate-y-2 group-focus-visible/navcard:-rotate-6 group-focus-visible/navcard:-translate-y-2 transition-[translate,rotate] duration-200"
        />
      </Link>
    </li>
  );
};

export default NavCard;
