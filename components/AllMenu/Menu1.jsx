import React from "react";
import Image from "next/image";

const Menu1 = () => {
  const list = [
    {
      name: "Salade dar d’jaj",
      price: "35 dh",
      description: "Poulet rôti, riz, mais",
    },
    {
      name: "Salade niçoise",
      price: "35 dh",
      description: "Pomme de terre, bettrave, carotte, riz, thon, oeuf , concombre, olive",
    },
    {
      name: "Salade de thon",
      price: "22 dh",
      description: "Poulet rôti, riz, mais",
    },
    {
      name: "Salade Marocaine",
      price: "35 dh",
    },
  ];
  return (
    <section className="bg-[#0D1518]  py-[140px]">
      <div className="lg:container lg:flex justify-between items-center">
        <div className="lg:hidden">
          <Image
            alt="ll"
            src="/_DSC4694.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo4"
          />
        </div>
        <div className="bg-white  py-8 px-[30px] z-50 space-y-8 ">
          <h3 className="text-primary opacity-90 text-[44px] font-bernier">
            Salade
          </h3>
          <div className="space-y-3">
            {list.map((item, index) => {
              return (
                <div className="text-[#808080]" key={index}>
                  <div className="flex relative items-center gap-1">
                    <p className="text-3xl font-bernier text-[#0F1622] flex-shrink-0">
                      {item.name}
                    </p>
                    <div className="relative w-[180px] h-[5px]">
                      <Image
                        src="/Vector 24.svg"
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[#F09804E5] absolute right-0 font-bernier text-[26px] flex-shrink-0">
                      {item.price}
                    </h3>
                  </div>
                  <p className="font-poppins text-base">{item?.description}</p>
                </div>
              );
            })}
          </div>
          <h3 className="text-[#F09804E5] text-2xl font-bernier ">
            composez votre salade 45 dh
          </h3>
        </div>
        <div className="hidden lg:block relative right-32  space-y-6">
          <Image
            alt="ll"
            src="/_DSC4668.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo3 "
          />
          <Image
            alt="ll"
            src="/_DSC4694.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo4"
          />
        </div>
        <div className="hidden lg:block relative right-[102px] py-10  z-10">
          <Image
            alt="ll"
            src="/Group 5.png"
            width={400}
            height={400}
            className="w-[300px] h-[100px] z-20 absolute rotate-[35deg] top-[45%] -left-[140px] "
          />
          <div className="h-[600px] w-[450px] mt-5 clipo ">
            <Image
              alt="ll"
              src="/_DSC4688.jpg"
              fill
              className=" overflow-hidden"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <Image
            src="/Group 284.png"
            width={250}
            height={300}
            className=" absolute -right-20 -bottom-10 rotate-[270deg]   "
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu1;
