import ChildHeaderPage from "@/components/childHeaderPage";
import Divider from "@/components/devider";
import HeaderSection from "@/components/headerSections";
import MenuItem from "@/components/menuItems";

function SmallHunger() {
  const menus = [
    {
      title: "Beers Bottle",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Aperitifs/Degestives",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Draft beers",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Wines",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Draft beers",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Warm drinks",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Non-alcoholic beers",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },

        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Soft drinks",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Non-alcoholic cocktails",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
  ];
  return (
    <div>
      <ChildHeaderPage
        label1="Small Hunger?"
        label2="Drop By!"
        description="Are you looking for a cozy café in Zelzate ? Then look no further, because Café Regina is the right place for you! You can of course drink a lot of different things here, but if you want to eat something small, you are more than welcome here. You can always come here if you are hungry!"
        labelButton="Contact us"
      />
      <Divider type="without-logo" />
      <div className="mx-auto container flex flex-col items-center justify-center py-[100px]">
        <div className="flex items-center">
          <HeaderSection
            title="Delicious Options"
            description="At Café Regina you will find plenty of delicious options. This way you can satisfy your tasty cravings without it being too heavy on the stomach. For example, you can opt for the farm plank. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread."
            width="w-[774px]"
            position="center"
          />
        </div>
        <div className="mt-[88px]">
          <div className="flex justify-center gap-[152px]">
            {/* Cột trái */}
            <div className="flex flex-col gap-[80px] w-[400px]">
              {menus
                .filter((_, i) => i % 2 === 0) // các section chẵn -> cột trái
                .map((m, index) => (
                  <div className="flex flex-col gap-[30px]" key={index}>
                    <h3 className="font-normal text-[40px] text-white uppercase text-nowrap">
                      {m.title}
                    </h3>
                    <div className="flex flex-col gap-[30px]">
                      {m.menuItem.map((mt, index1) => (
                        <MenuItem
                          type="price"
                          label={mt.label}
                          description={mt.description}
                          price={mt.price}
                          key={index1}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Cột phải */}
            <div className="flex flex-col gap-[80px] w-[400px]">
              {menus
                .filter((_, i) => i % 2 !== 0) // các section lẻ -> cột phải
                .map((m, index) => (
                  <div className="flex flex-col gap-[30px]" key={index}>
                    <h3 className="font-normal text-[40px] text-white uppercase text-nowrap">
                      {m.title}
                    </h3>
                    <div className="flex flex-col gap-[30px]">
                      {m.menuItem.map((mt, index1) => (
                        <MenuItem
                          type="price"
                          label={mt.label}
                          description={mt.description}
                          price={mt.price}
                          key={index1}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallHunger;