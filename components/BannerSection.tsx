import { pngs } from "@/public/images";
import Image from "next/image";
import ButtonNavigator from "./buttonNavigator";

export default function BannerSection() {
  return (
    <section className="flex gap-[60px] min-h-[400px] mt-[64px] mb-[40px]">
      <div className="flex flex-col justify-between gap-4 pl-[120px]">
        <div className="flex flex-col gap-2 w-[400px]">
          <div className="flex items-center gap-2">
            <h3 className="uppercase text-white text-[55px] leading-[51px]  ">
              Cafe
            </h3>
            <div className="border border-b-[1px] border-white w-full"></div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="uppercase text-white text-[55px] leading-[51px]">
              Regina
            </h3>
            <div>
              <p className="text-[24px] font-normal text-white">
                GROTE MARKT 15
              </p>
              <p className="text-[24px] font-normal text-[#969493]">
                9060 ZELZATE
              </p>
            </div>
          </div>
        </div>
        <Image
          src={pngs.banner1}
          alt="banner"
          width={256}
          height={373}
          className="w-[256px] h-[373px] object-center rounded-b-full"
        />
      </div>
      <div className="flex flex-1 items-center justify-between flex-col gap-[30px]">
        <div className="relative">
          <Image
            src={pngs.mainBanner}
            alt="main-banner"
            width={1000}
            height={1000}
            className="w-[760px] min-h-[800px] object-cover rounded-t-full flex-1"
          />
          <div className="text-[170px] leading-[220px] text-center text-[#6D6D6D] w-[1400px] h-[495px] font-semibold absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <p className="text-center">
              Ge<span className="text-white">niet Van</span> E
              <span className="text-white">en</span>
            </p>
            <p className="text-center">
              {" "}
              Gez<span className="text-white">ellige Tijd</span> Bij
            </p>
            <p className="text-center">
              C<span className="text-white">afé Regin</span>a
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <p className="text-[24px] font-semibold text-white">01</p>
          <div className="border border-b border-white w-[332px]"></div>
          <p className="text-[24px] text-[#969493]">02</p>
          <p className="text-[24px] text-[#969493]">03</p>
          <p className="text-[24px] text-[#969493]">04</p>
          <p className="text-[24px] text-[#969493]">05</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between pr-[120px]">
        <Image
          src={pngs.banner2}
          alt="banner"
          width={269}
          height={402}
          className="w-[269px] h-[402px] object-center rounded-t-full"
        />
        <div className="flex flex-col gap-[50px]">
          <p className="text-[#969493] font-normal text-[16px] leading-[25px] w-[213px]">
            Café Regina is not only the oldest, but also the nicest café in
            Zelzate and the surrounding area. So be sure to come by and enjoy a
            good time! 
          </p>
          <ButtonNavigator label="Contact" />
        </div>
      </div>
    </section>
  );
}