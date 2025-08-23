import DeviderPage from "@/components/devider";
import DishLayout from "@/components/foodSession";
import BlogCheckin from "@/components/blogCheckin";
import ButtonNavigator from "@/components/buttonNavigator";
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
  ]


  return (
    <div>
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
        <div className="flex flex-col gap-[24px] items-center justify-center">
          {/* <HeaderSection
            title="Weekend Suggestion"
            description="During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! "
            position="center"
            width="w-[50%]"
          /> */}
          <ButtonNavigator/>
        </div>
        <div className="flex items-center gap-[20px] mt-[63px]">
           <BlogCheckin/>
           <BlogCheckin/>
           <BlogCheckin/>
           <BlogCheckin/>
        </div>
      </div>
    </div>
      
  );
}
