import {pngs} from "@/public/images/index"
import Image from "next/image";

function DeviderPage() {
  return (
    <div className="flex items-center">
        <div className="border border-b-[#191919] border-b-[2px] w-[47%]"></div>
        <Image src={pngs.logo} alt="logo" width={124} height={124} className="size-[124px]"/>
        <div className="border border-b-[#191919] border-b-[2px] w-[47%]"></div>
    </div>
  );
}

export default DeviderPage;