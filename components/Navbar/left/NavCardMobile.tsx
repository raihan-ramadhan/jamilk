import { Card } from "@/utils/products";
import Link from "next/link";

const NavCardMobile = ({ alt, category, color, name, imgSrc, href }: Card) => {
  return (
    <li className="w-full inline-block">
      <Link
        href={href}
        style={{ backgroundColor: color }}
        className="rounded-xl w-full overflow-hidden inline-block text-primary-foreground h-[150px] text-center text-xs relative py-2"
      >
        <p className="flex flex-col items-center w-full py-1 text-center font-bold break-text">
          {name.split(" ").map((w, i) => (
            <span key={i}>{w}</span>
          ))}
          <span className="text-[10px]">+ {category}</span>
        </p>
        <img
          loading="lazy"
          src={imgSrc}
          alt={alt}
          className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[60px]"
        />
      </Link>
    </li>
  );
};

export default NavCardMobile;
