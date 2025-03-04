import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const NavCardMobile = ({
  alt,
  category,
  color,
  name,
  imgSrc,
  url,
}: Product) => {
  return (
    <li className="w-full inline-block">
      <Link
        href={url}
        style={{ backgroundColor: color }}
        className="rounded-xl w-full overflow-hidden inline-block text-primary-foreground h-[150px] text-center text-xs relative py-2"
      >
        <p
          className="flex flex-col items-center w-full py-1 text-center font-bold break-text z-10 relative"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {name.split(" ").map((w, i) => (
            <span key={i}>{w}</span>
          ))}
          <span className="text-[10px]">+ {category}</span>
        </p>
        <Image
          src={imgSrc}
          alt={alt}
          width={60}
          height={134}
          className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[60px]"
        />
      </Link>
    </li>
  );
};

export default NavCardMobile;
