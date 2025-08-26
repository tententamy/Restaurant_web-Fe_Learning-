import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCheckinProps {
  image : string | StaticImageData
}

function BlogCheckin({image}: BlogCheckinProps) {
  return (
    <div className="flex flex-col gap-[24px] max-w-[270px] p-2">
        <Image src={image} alt="thumnail" width={1000} height={1000} className="rounded-t-full h-[300px] object-cover"/>
        <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[16px] font-normal text-[#969493] uppercase">
          16 Apr 2021
        </p>
        <h3 className="text-white font-semibold text-[30px]">
          Lorem ipsum dolor
        </h3>
        <p className="text-[16px] font-normal text-[#969493] leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
         <Link href={"bar/blog"}>
            <button className="text-[#DCCA87] font-normal uppercase text-[18px] cursor-pointer">
              Read more
            </button>
         </Link>
        
      </div>
    </div>
  );
}

export default BlogCheckin;