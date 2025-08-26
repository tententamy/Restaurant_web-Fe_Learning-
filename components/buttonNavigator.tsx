import {pngs} from "@/public/images/index"
import Image from "next/image";
import clsx from "clsx";

interface ButtonNavigatorProps {
  label?: string;
  className?: string;
  position?: "left" | "right";
}

function ButtonNavigator({label, className,position = "right", }: ButtonNavigatorProps) {
  if (position === "left") {
    return (
      <button className="flex items-center gap-[20px] cursor-pointer">
        <Image
          src={pngs.arrow}
          alt="button"
          className={clsx("min-w-[100px] h-[40px] rotate-180", className)}
        />
        <p className="text-[#DCCA87] uppercase font-normal text-[18px]">
          {label}
        </p>
      </button>
    );
  }
  return (
    <button className="flex items-center gap-[20px] cursor-pointer">
      <p className="text-[#DCCA87] uppercase font-normal text-[32px]">
        {label}
      </p>
      <Image src={pngs.arrow} alt="button" className={clsx("w-[100px] h-[50px]", className)} />
    </button>
  );
}

export default ButtonNavigator;