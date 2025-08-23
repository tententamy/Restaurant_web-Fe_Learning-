import Image from "next/image";
import ButtonNavigator from "./buttonNavigator";

interface DishLayoutProps {
  name: string;
  description: string;
  image: string;
  menuItems: string[];
}

export default function DishLayout({ name, description, image, menuItems }: DishLayoutProps) {
  return (
    <div className="grid grid-cols-3 gap-[60px]">
      {/* Cột trái: mô tả */}
      <div className="flex items-center justify-between">
        <div className="w-full p-16 bg-black top-120 flex-col items-center justify-center">
              <h2 className="text-xl font-bold text-white text-[52px]">{name}</h2>
              <p className="mt-2 text-gray-600 text-[24px]">{description}</p>
        </div>
      </div>

      {/* Cột giữa: hình */}
      <div className="w-full flex items-center justify-center bg-black">
        <Image className="w-[600px] h-[750px]" src={image} alt={name} width={600} height={1000} />
      </div>

      {/* Cột phải: menu */}
      <div className="flex items-center justify-between">
        <div className="w-full  bg-black">
          <ul className="text-[48px] text-white">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ButtonNavigator label="All Menu"/>
        </div>
      </div>
            
    </div>
  );
}
