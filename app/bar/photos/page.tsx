import { pngs } from "@/public/images";
import ButtonNavigator from "@/components/buttonNavigator";
import ChildHeaderPage from "@/components/childHeaderPage";
import Divider from "@/components/devider";
import SubcribeSection from "@/components/subcrice";
import Image from "next/image";

function Photos() {
  const imagesGl = [
    pngs.gallery1.src,
    pngs.gallery2.src,
    pngs.gallery3.src,
    pngs.gallery4.src,
    pngs.drink3.src,
    pngs.drink2.src,
    pngs.food3.src,
    pngs.food2.src,
    pngs.drink1.src,
    pngs.food1.src,
  ];
  return (
    <div className="bg-black">
      <ChildHeaderPage
        label1="Enjoy The Atmospheric"
        label2="Photos!"
        labelButton="Contact Us"
        description="If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos! "
      />
      <Divider type="without-logo" />
      <div className="container mx-auto py-[70px] grid grid-cols-5 gap-[24px]">
        {imagesGl.map((img, index) => (
          <Image
            src={img}
            alt={`Gallery Image ${index + 1}`}
            width={1000}
            height={1000}
            className="w-full h-[328px] object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            key={index}
          />
        ))}
      </div>
      <div className="container mx-auto flex items-center justify-between mb-[100px]">
        <ButtonNavigator className="rotate-180" />
        <div className="flex items-center gap-[20px]">
          <p className="text-white font-semibold text-[24px]">01</p>
          <div className="border border-b border-white w-[332px]"></div>
          <p className="text-[#969493] text-[24px]">02</p>
          <p className="text-[#969493] text-[24px]">03</p>
          <p className="text-[#969493] text-[24px]">04</p>
          <p className="text-[#969493] text-[24px]">05</p>
          <p className="text-[#969493] text-[24px]">06</p>
          <p className="text-[#969493] text-[24px]">07</p>
          <p className="text-[#969493] text-[24px]">08</p>
          <p className="text-[#969493] text-[24px]">09</p>
          <p className="text-[#969493] text-[24px]">10</p>
        </div>
        <ButtonNavigator />
      </div>
      <Divider />
      <SubcribeSection />
    </div>
  );
}

export default Photos;