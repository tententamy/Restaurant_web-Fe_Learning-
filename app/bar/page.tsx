import DeviderPage from "@/components/devider";
import DishLayout from "@/components/foodSession";
import BlogCheckin from "@/components/blogCheckin";
import ButtonNavigator from "@/components/buttonNavigator";
import HeaderSection from "@/components/headerSections";
import SubcribeSection from "@/components/subcrice";
import BannerSection  from "@/components/BannerSection";
import Image from "next/image";
import {pngs} from "@/public/images"

export default function BarPage() {

  const listToShow = [
    {
      name : "Extensive Drinks",
      description : "At Café Regina you will always find something you would like to drink.They have a very extensive drinks menu, so there is something for everyone.So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time! .",
      image : `${pngs.drinks.src}`,
      menuItems : ["Beers Bottle","Aperitifs/Degestives","Draft beers","Soft drinks"],
    },
    {
      name : "Small Hunger",
      description : "Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend  you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer. ",
      image : `${pngs.chips.src}`,
      menuItems : ["Refreshments","Pancakes / Waffles","Savory","Little Hunger"],
    },
  ];

  const blogs = [
    pngs.cafe3,
    pngs.cafe4,
    pngs.cafe1,
    pngs.cafe2,
    pngs.cafe5,
  ];

    const gallery = [
    pngs.gallery1,
    pngs.gallery2,
    pngs.gallery3,
    pngs.gallery4,
  ];

  const suggestDish = [
  {
    src: pngs.drink1, // ❌ KHÔNG dùng `${pngs.drink1}`
    className: "w-[257px] h-[391px] rounded-t-[160px] absolute left-0 rotate-[-16deg] object-cover",
  },
  {
    src: pngs.drink2,
    className: "w-[212px] h-[297px] rounded-t-[160px] absolute left-[255px] top-[380px] rotate-[-6deg] object-cover",
  },
  {
    src: pngs.drink3,
    className: "max-w-[270px] max-h-[392px] rounded-t-[160px] absolute left-[450px] top-[450px] rotate-[-11deg] object-cover",
  },
  {
    src: pngs.food3,
    className: "w-[239px] min-h-[336px] rounded-t-[160px] absolute right-[-50px] rotate-[5deg] object-cover",
  },
  {
    src: pngs.food2,
    className: "w-[239px] h-[335px] rounded-t-[160px] absolute right-[175px] top-[380px] rotate-[3deg] object-cover",
  },
  {
    src: pngs.food1,
    className: "w-[258px] min-h-[362px] rounded-t-[160px] absolute right-[400px] top-[480px] rotate-[11deg] object-cover",
  }
];



  return (
    <div>
        <BannerSection/>
        {listToShow.map((food,index) => (
            <DishLayout
              name={food.name}
              description={food.description}
              image={food.image}
              menuItems={food.menuItems}
              key={index} 
            />
          ))}
        <DeviderPage/>
        
        <div className="container mx-auto mt-[70px]">
          <div className="relative min-h-[900px]">
          <div className="flex flex-col gap-[24px] items-center justify-center">
            <HeaderSection
              title="Weekend Suggestion"
              description="During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! "
              position="center"
              width="w-[50%]"
            />
            <ButtonNavigator label="Read more" />
          </div>
          {/*  suggest dish */}
          <div>
            {suggestDish.map((scr, index) => (
                 <Image
                  src={scr.src}
                  alt="food"
                  width={500}
                  height={500}
                  className={scr.className}
                  key={index}
                />
            ))}
           
            {/* <Image
              src={pngs.drink2}
              alt="food"
              width={500}
              height={500}
              className="w-[212px] h-[297px] rounded-t-[160px] absolute left-[255px] top-[380px] rotate-[-6deg] object-cover"
            />
            <Image
              src={pngs.drink3}
              alt="food"
              width={500}
              height={500}
              className="max-w-[270px] max-h-[392px] rounded-t-[160px] absolute left-[450px] top-[450px] rotate-[-11deg] object-cover"
            />
            <Image
              src={pngs.food3}
              alt="food"
              width={500}
              height={500}
              className="w-[239px] min-h-[336px] rounded-t-[160px] absolute right-[-50px] rotate-[5deg] object-cover"
            />
            <Image
              src={pngs.food2}
              alt="food"
              width={500}
              height={500}
              className="w-[239px] h-[335px] rounded-t-[160px] absolute right-[175px] top-[380px] rotate-[3deg] object-cover"
            />
            <Image
              src={pngs.food1}
              alt="food"
              width={500}
              height={500}
              className="w-[258px] min-h-[362px] rounded-t-[160px] absolute right-[400px] top-[480px] rotate-[11deg] object-cover"
            /> */}
          </div>
        </div>
          <div className="flex flex-col gap-[24px] items-center justify-center">
            <HeaderSection
              title="Events"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. "
            position="center"
            width="w-[50%]"
            />
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <ButtonNavigator className="rotate-180" />
            <ButtonNavigator />
          </div>
          <div className="flex items-center gap-[20px] mt-[63px]">
            {blogs.map((blog, index) => (
              <BlogCheckin 
                image = {blog}
                key={index}
                />
            ))}
            {/* <BlogCheckin />
            <BlogCheckin/>
            <BlogCheckin/>
            <BlogCheckin/> */}
          </div>
      </div>
       <DeviderPage type="without-logo" />
        {/* Gallery Section */}
      <div className="mx-auto container grid grid-cols-[40%_60%] gap-[20px] mt-[100px] pb-[40px] min-h-[500px]">
        <div className="flex flex-col gap-4">
          <HeaderSection
            title="Photo Gallery"
            description="If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos! "
            position="left"
            width="w-[50%]"
          />
          <div className="flex items-center gap-[2px]">
            <ButtonNavigator className="rotate-180" />
            <ButtonNavigator />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          {gallery.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`gallery-${i}`}
              width={221}
              height={328}
              className="w-[221px] h-[328px] object-cover"
            />
          ))}
        </div>
      </div>
          <DeviderPage/>
          <SubcribeSection/>
          
    </div>
      
  );
}
