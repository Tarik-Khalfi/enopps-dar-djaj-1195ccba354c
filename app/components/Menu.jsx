import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className=" xl:container xl:mx-auto xl:px-2 lg:h-[780px] bg-[#0B0E11] mb-[220px] lg:mb-[90px]  relative">
      <div className="lg:container lg:mx-auto lg:px-10 relative flex flex-col-reverse">
        <div className="bg-[#FFFF] h-[420px]  lg:w-[482px]  flex flex-col py-5 lg:mt-[184px]  mt-[600px] z-50   items-center justify-center lg:absolute lg:top-[-60%]">
          <div className="  lg:w-[442px] w-[100%] my-auto lg:space-y-6  space-y-2  absolute space-x-2 overflow-hidden">
            <h1 className="text-[#f09804] font-bernier text-[44px] font-[400] leading-normal text-left md:px-5 lg:px-1 px-2">
              POULET BRAISE GRILLE
            </h1>
            <div className="flex  justify-between items-center md:px-5 lg:px-1   px-4 space-y-2">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                1/4 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier">
                40DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5  lg:px-1 px-4">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                1/2 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier">
                80DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5 lg:px-1 px-4 ">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                poulet entier
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier ">
                145DHS
              </p>
            </div>
            <h1 className="text-[#F09804] font-bernier text-[26px] font-[400] leading-normal md:px-5 px-1">
              SERVI AVEC SALADE MAROCAINE SAUCE,RIZ ET FRITE
            </h1>
          </div>
        </div>
        <div className="mt-[80px] relative lg:w-full  ">
          <div className="overflow-hidden">
            <div className="absolute z-20 w-[100%] lg:w-[90%] h-[600px]  lg:left-[10%] right-[-10]">
              <Image
                src="/Group 41.svg"
                alt=""
                width={210}
                height={210}
                className="absolute lg:top-[-12%] lg:left-[-10%] top-[-20%] left-[-15%] z-1"
              />
              <Image
                src="/menu_poulet.jpg"
                fill={true}
                objectFit="cover"
                objectPosition="center"
                className="  absolute z-10 overflow-hidden foodClipe xl:lmr-auto xl:container xl:left:[0%]"
                alt=""
              />
              <Image
                src="/Group 5.svg"
                width={170}
                height={170}
                alt=""
                className="absolute lg:bottom-0 lg:right-[-10%] bottom-[-75%]  right-[0] z-20"
                f
              />
              <Image
                src="/Group 5 vertical.svg"
                width={100}
                height={70}
                alt=""
                className="absolute lg:bottom-[-16%] lg:right-[-3%] bottom-[-90%] right-[20%]  z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// // <div className=" relative mt-[10px] mr-[20px]">
//             <div className=" overflow-hidden">
//               <div className="absolute z-20 right-0  w-[480px]   h-[490px]    clipImage1  ">
//                 <Image
//                   src="/_DSC4793.jpg"
//                   alt=""
//                   fill
//                   objectFit="cover"
//                   objectPosition="center"
//                   className=" border border-[#EF4949]   absolute z-10 overflow-hidden"
//                 />
//               {/* </div> */}
