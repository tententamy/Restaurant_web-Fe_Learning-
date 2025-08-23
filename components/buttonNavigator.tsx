import {pngs} from "@/public/images/index"
import Image from "next/image";

function ButtonNavigator() {
  return (
    <button className="flex items-center gap-[20px] cursor-pointer">
      <p className="text-[#DCCA87] uppercase font-normal text-[32px]">
        All menu
      </p>
      <Image src={pngs.arrow} alt="button" className="w-[120px] h-[50px]" />
    </button>
  );
}

export default ButtonNavigator;