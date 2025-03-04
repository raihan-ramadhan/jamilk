import Link from "next/link";

const PromotionalText = () => {
  return (
    <div className="bg-greenDesign text-white w-full h-10 flex items-center overflow-hidden whitespace-nowrap relative z-50 select-none">
      <p className="w-full flex items-center gap-8 text-xs justify-end text-right animate-[marquee_8000ms_linear_infinite] xs:animate-[marquee_15000ms_linear_infinite] sm:animate-[marquee_30000ms_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="space-x-8">
            <Link href={"/collections/all"} tabIndex={-1}>
              SHOP NOW
            </Link>
            <Link href={"/subscribe-save"} tabIndex={-1}>
              SUBSCRIBE & SAVE 10% ON YOU FAVORITE SMOOTHIES
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
};

export default PromotionalText;
