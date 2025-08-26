import { pngs } from "@/public/images";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="p-[60px_100px] flex items-center justify-between gap-4 container mx-auto">
        <div className="flex flex-col gap-[24px] items-center">
          <h3 className="text-[36px] font-semibold text-white">Contact Us</h3>
          <ul className="flex flex-col gap-8 items-center">
            <li className="text-[#AAAAAA] font-normal text-[16px]">
              Grote Markt 15 9060 Zelzate (East Flanders) Belgium{" "}
            </li>
            <li className="text-[#AAAAAA] font-normal text-[16px]">
              +0468 06 80 91{" "}
            </li>
            <li className="text-[#AAAAAA] font-normal text-[16px]">
              info@caferegina.be{" "}
            </li>
            <li className="text-[#AAAAAA] font-normal text-[16px]">
              VAT BE 0768.703.620{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-[#DCCA87] text-[64px] font-normal text-center">
            CAFE REGINA
          </h2>
          <p className="text-center text-white font-normal text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </p>
          <div className="flex items-center justify-center">
            <div className="w-[80px] border border-b-[#DCCA87] border-b-[2px]"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[16px]">
              <Image src={pngs.fb} alt="social" />
              <Image src={pngs.twitter} alt="social" />
              <Image src={pngs.instagram} alt="social" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[36px] font-semibold text-white">
            Opening Hours
          </h3>
          <div className="flex items-center justify-center">
            <ul className="flex flex-col gap-[8px]">
              <li className="flex flex-col gap-2">
                <p className="text-[16px] font-normal text-[#AAAAAA] text-center">
                  Monday-Friday:
                </p>
                <p className="text-[16px] font-normal text-[#AAAAAA]">
                  08:00 am - 12:00 am
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-[16px] font-normal text-[#AAAAAA] text-center">
                  Saturday-Sunday:
                </p>
                <p className="text-[16px] font-normal text-[#AAAAAA]">
                  07:00 am - 11:00 am
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-[16px] flex items-center justify-center border border-t-[#191919]">
        <p className="text-[16px] font-normal text-[#AAAAAA]">
          2024 Cafe Regina. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;