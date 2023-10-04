import { HeaderProp, Nav } from "@/components";
import { Menu1, Menu2, Menu3 } from "@/components/AllMenu";
import Image from "next/image";

const page = () => {
  const list = [
    {
      name: "Sandwich poulet",
      price: "35 dh",
    },
    {
      name: "Tacos dar d’jaj",
      price: "30 dh",
    },
    {
      name: "SANDWICH TANDORI",
      price: "30 dh",
    },
    {
      name: "SANDWICH CURRY",
      price: "30 dh",
    },
    {
      name: "SANDWICH PARIKA",
      price: "30 dh",
    },
    {
      name: "SANDWICH VIANDE HACHÉE",
      price: "37 dh",
    },
    {
      name: "SANDWICH MERGUEZ POULET",
      price: "35 dh",
    },
    {
      name: "SANDWICH MERGUEZ VIANDE",
      price: "36 dh",
    },
    {
      name: "SANDWICH DAR D’JAJ",
      price: "55 dh",
    },
  ];

  const list2 = [
    {
      name: "DAR D’JAJ",
      price: "30 dh",
      description: "1 Cuisse",
    },
    {
      name: "BUCKET MIX",
      price: "47 dh",
      description: "1 Cuisse, 6 Wings",
    },
    {
      name: "BUCKET XL",
      price: "95 dh",
      description: "1 Cuisse, 6 Wings, 4 Tenders",
    },
    {
      name: "BUCKET XXL",
      price: "110 dh",
      description: "1 Cuisse, 12 Wings (6 spicy +6 classic) , 4 Tenders",
    },
    {
      name: "BUCKET XXXL",
      price: "199 dh",
      description:
        "1 Cuisse, 18 Wings (6 spicy +6 classic ), 6 Tenders, 4 nuggets",
    },
  ];
  const list3 = [
    {
      name: "WINGS CLASSIC",
      price: "25 DH",
      description: "base chaplure",
    },
    {
      name: "WINGS 6 PC BUFFALO",
      price: "30 DH",
      description: "ACCOMPAGNÉ SAUCE AMÉRICAINE",
    },
    {
      name: "WINGS MENU",
      price: "30 dh",
      description: "ACCOMPAGNÉ SAUCE BBQ OU SPICY",
    },
    {
      name: "WINGS BUFFALO MENU",
      price: "35 DH",
      description: "ACCOMPAGNÉ SAUCE BBQ OU SPICY",
    },
  ];
  const list4 = [
    {
      name: "TENDERS SPICY",
      price: "25 dh",
      description: "base chaplure",
    },
    {
      name: "TENDERS BARBECUE",
      price: "25 dh",
      description:
        "ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET, FRITES",
    },
    {
      name: "TENDERS MIEL",
      price: "25 dh",
      description:
        "ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET, FRITES",
    },
  ];
  const list5 = [
    {
      name: "ORANGE",
      price: "13 dh",
    },
    {
      name: "FRAISE",
      price: "15 dh",
    },
    {
      name: "POMME",
      price: "15 dh",
    },
    {
      name: "BANANE",
      price: "20 dh",
    },
    {
      name: "ANANAS",
      price: "20 dh",
    },
    {
      name: "FRAMBOISE",
      price: "20 dh",
    },
    {
      name: "KAKI",
      price: "20 dh",
    },
    {
      name: "AVOCAT",
      price: "20 dh",
    },
    {
      name: "MANGUE",
      price: "20 dh",
    },
    {
      name: "PAPAYE",
      price: "20 dh",
    },
    {
      name: "PECHE",
      price: "20 dh",
    },
    {
      name: "PANACHE",
      price: "20 dh",
    },
    {
      name: "KIWI",
      price: "20 dh",
    },
    {
      name: "CITRON",
      price: "20 dh",
    },
    {
      name: "ZE3ZA3",
      price: "25 dh",
    },
    {
      name: "FRUITS SECS",
      price: "20 dh",
    },
    {
      name: "SALADE DE FRUIT",
      price: "15 dh",
    },
  ];
  return (
    <main className="text-black">
      <section className='bg-[url("/Rectangle2.png")] space-y-[60px] bg-cover bg-no-repeat'>
        <Nav />
        <HeaderProp
          fontt="font-bold text-7xl"
          font="font-bernier"
          text="Notre Menu"
        />
      </section>
      <Menu1 />
      <Menu3 />
      <div className="bg-[#0D1518] ">
        <Menu2 />
        {/* menu 4 */}
        <div className=" lg:h-[908px] bg-[#0D1518] mb-[91px]  mt-[91px]">
          <div className="flex lg:flex-row  flex-col lg:container mx-auto lg:px-5  ">
            <div className="lg:hidden">
              <Image
                src="/_DSC4739.jpg"
                width={415}
                height={337}
                alt=""
                className="w-full"
              />
            </div>
            <div className="bg-white  py-8 h-fit lg:mt-[290px] px-[30px] z-50 space-y-6   ">
              <h3 className="text-primary opacity-90 text-[44px] font-bernier">
                SANDWICH
              </h3>
              <div className="space-y-3 ">
                {list.map((item, index) => {
                  return (
                    <div className="text-[#808080]" key={index}>
                      <div className="flex relative items-center gap-1">
                        <p className="text-3xl font-bernier text-[#0F1622] flex-shrink-0">
                          {item.name}
                        </p>
                        <div className="relative w-[240px] text-center h-[5px]">
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
                      <p className="font-poppins text-base">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:flex hidden flex-col  relative right-32 space-y-10 mt-10">
              <div className="z-10">
                <Image
                  src="/_DSC4739.jpg"
                  width={415}
                  height={337}
                  alt=""
                  className="w-[415px] h-[337px] shapeMenu"
                />
              </div>
              <div className="z-10">
                <Image
                  src="/_DSC4744.jpg"
                  width={415}
                  height={337}
                  alt=""
                  className="w-[415px] h-[337px] shapeMenu2 "
                />
              </div>
            </div>
            <div className="flex flex-col relative">
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt=""
                className="absolute hidden lg:block right-0 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt=""
                className="absolute hidden lg:block right-0 bottom-64 z-20"
              />
              <div className="lg:hidden">
                <Image
                  src="/_DSC4783.jpg"
                  width={563}
                  height={533}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="bg-white  py-8   px-[30px]  space-y-6 h-fit z-50 ">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  BUCKETS
                </h1>
                <div className="space-y-3 ">
                  {list2.map((item, index) => {
                    return (
                      <div className="text-[#808080]" key={index}>
                        <div className="flex relative items-center gap-1">
                          <p className="text-3xl font-bernier text-[#0F1622] flex-shrink-0">
                            {item.name}
                          </p>
                          <div className="relative w-[240px] text-center h-[5px]">
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
                        <p className="font-poppins text-base">
                          {item?.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative hidden lg:block z-10 bottom-[30%] right-[10%]">
                <Image
                  src="/_DSC4783.jpg"
                  width={563}
                  height={533}
                  className="h-[563px] w-[564px] shapeMenu3"
                  alt=""
                />
                <Image
                  src="/Group 41.svg"
                  width={300}
                  height={300}
                  alt=""
                  className="absolute z-50 top-1 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        {/* menu 5 */}
        <div>
          <div className=" lg:h-[908px] bg-[#0D1518] lg:mb-[91px] ">
            <div className="flex lg:flex-row flex-col lg:container mx-auto lg:px-5 relative ">
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt=""
                className="absolute hidden lg:block right-40 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt=""
                className="absolute hidden lg:block right-40 bottom-64 z-20"
              />
              {/* menu img */}
              <div className="lg:hidden">
                <Image
                  src="/0a057e698af57a6c452b0d5003044b0c.jpg"
                  width={509}
                  height={700}
                  alt=""
                  className="w-full "
                />
              </div>
              <div className="bg-white h-fit  py-8 px-[30px] z-50 space-y-8 relative lg:bottom-[-320px] lg:mt-16">
                <h3 className="text-primary opacity-90 text-[44px] font-bernier">
                  WINGS
                </h3>
                <div className="space-y-3">
                  {list3.map((item, index) => {
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
                        <p className="font-poppins text-base">
                          {item?.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <h3 className="text-[#F09804E5] text-2xl font-bernier ">
                  composez votre salade 45 dh
                </h3>
              </div>
              <div className="lg:flex flex-col hidden  relative right-[280px] space-y-10 mt-10">
                <div className="z-10">
                  <Image
                    src="/0a057e698af57a6c452b0d5003044b0c.jpg"
                    width={509}
                    height={700}
                    alt=""
                    className="w-[509px] h-[700px] shapeMenu4 "
                  />
                </div>
              </div>
              <div className="flex lg:flex-col flex-col-reverse">
                <div className="bg-white h-fit  py-8 px-[30px] z-50 space-y-8 ">
                  <h3 className="text-primary opacity-90 text-[44px] font-bernier">
                    TENDERS
                  </h3>
                  <div className="space-y-3">
                    {list4.map((item, index) => {
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
                          <p className="font-poppins text-base">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <h3 className="text-[#F09804E5] text-2xl font-bernier ">
                    FRiTES CLASSIC 12 DH
                  </h3>
                </div>
                <div className="lg:relative lg:z-10 bottom-[30%] right-[40%]">
                  <Image
                    src="/_DSC4783.jpg"
                    width={563}
                    height={533}
                    className="lg:h-[563px] w-full lg:w-[564px] lg:shapeMenu5"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* menu 6 */}
        <div className=" lg:h-[1508px] bg-[#0D1518] mt-[140px]  ">
          <div className="lg:container mx-auto lg:px-5 lg:grid grid-cols-12 gap-4  relative">
            <Image
              src="/Group 5 vertical.svg"
              width={100}
              height={100}
              alt=""
              className="top-[52%] hidden lg:block right-14 z-10 absolute"
            />
            <Image
              src="/Group 41.svg"
              width={300}
              height={300}
              alt=""
              className=" z-20 absolute hidden lg:block  left-[50%] top-[390px]"
            />

            <div className="col-span-4 mt-10 h-max lg:w-[500px] bg-[#ffff] p-6  space-y-5 z-20 lg:mt-[200px] ">
              <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] lg:mt-[70px] lg:px-[40px] ">
                JUS DE FRUITS
              </h1>
              <div className="lg:px-[40px] lg:pb-[72px] lg:space-y-3 space-y-3">
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    ORANGE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    35 DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    FRAISE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    POMME{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    BANANE{" "}
                  </p>

                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    FRAMBOISE{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    KAKI{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    AVOCAT{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    MANGUE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    PAPAYE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    PECHE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        PANACHE
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        KIWI
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        CITRON
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        ZE3ZE3
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        FRUITS SECS
                      </p>
                      <Image
                        src="/Vector 24.svg"
                        width={100}
                        height={5}
                        alt=""
                      />
                    </div>
                  </p>
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                        SALADE DE FRUITS
                      </p>
                      <Image
                        src="/Vector 24.svg"
                        width={100}
                        height={5}
                        alt=""
                      />
                    </div>
                  </p>
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
              </div>
            </div>

            {/* img  */}
            <div className="col-span-3 hidden lg:block  w-fit overflow-hidden">
              <div className="z-10  absolute h-[323px] w-[689px] left-[15%] ">
                <Image
                  src="/_DSC4663.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className=" w-[2900px] h-[323px]  shapeMenu2 overflow-hidden"
                  alt=""
                />
              </div>
              <div className="z-10 absolute h-[452px] w-[543px] mt-[-40px] top-[20%] right-[45%] overflow-hidden">
                <Image
                  src="/_DSC4773.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="right"
                  className=" mt-[50px] w-[550px]  shapeMenu22 overflow-hidden"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col relative">
              <div className="lg:hidden">
                <Image
                  src="/_DSC4773.jpg"
                  width={100}
                  height={100}
                  className=" w-full"
                  alt=""
                />
              </div>
              <div className="col-span-5 h-fit lg:w-[500px] bg-[#ffff] z-20 px-[30px] space-y-2 relative top-[-10%]">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] pt-[25px]">
                  JUS DE LEGUMES
                </h1>

                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CONCOMBRE{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CITROUILLE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    DETOX
                  </p>

                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CAROTTE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    COURGETTE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    BETTERAVE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  MILKSHAKE{" "}
                </h1>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    FRAISE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CAFE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    VANILLE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CARAMEL
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    CHOCOLAT
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    PISTACHE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    NOUGAT
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    OREO{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  MILKSHAKE AU CHOIX
                </p>
                <div className="flex justify-between align-baseline pb-[30px]">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    2 AROMES MAX
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    25DH
                  </p>
                </div>
              </div>

              <div className="col-span-4 h-[300px] w-[500px]  lg:block hidden  overflow-hidden  relative z-10 top-[-9%] right-[40%] ">
                <div className=" absolute h-[500px] w-[500px] ">
                  <Image
                    src="/_DSC4661.jpg"
                    fill
                    alt=""
                    objectFit="cover"
                    objectPosition="bottom"
                    className="overflow-hidden lastImg"
                  />
                </div>
              </div>
              {/* meun img */}
              <div>
                <Image
                  src="/_DSC4661.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="col-span-5 h-fit lg:w-[500px] bg-[#ffff] z-20  relative top-[-20%] px-[30px] space-y-[30px]">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] pt-[25px]">
                  THÉ
                </h1>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    THÉ
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    10 DH
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  GLACES
                </h1>

                <div className="flex-col -space-y-2">
                  <div className="flex justify-between align-baseline">
                    <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                      BOUCLE DE GLACE AU CHOIX{" "}
                    </p>
                    <Image src="/Vector 24.svg" width={100} height={5} alt="" />

                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      30DH
                    </p>
                  </div>
                  <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                    {" "}
                    Fraise, Chocolat, Pistache, Vanille, Café, Caramel, Oreo
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  SUNDAE
                </h1>

                <div className="flex justify-between align-baseline pb-[70px]">
                  <p className="font-bernier font-[400]  leading-[25px] text-3xl text-[#0F1622]">
                    Chocolat, fraise, caramel
                  </p>
                  <Image src="/Vector 24.svg" width={100} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
