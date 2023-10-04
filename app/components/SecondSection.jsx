import React from "react";
import Image from "next/image";
export default function SecondSection() {
  return (
    <div>
      <div className=" h-[908px] bg-[#0D1518] ">
        <div className="flex flex-row container mx-auto px-5 ">
          <div className="h-[500px] w-[442px] bg-white z-50 p-10 space-y-3     relative bottom-[-320px] mt-20">
            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
              WINGS
            </h1>
            <div className="flex justify-between align-baseline">
              <p className="font-bernier font-400 text-[22px] leading-[25px]">
                WINGS CLASSIC
              </p>
              <Image src="/Vector 24.svg" width={170} height={5} alt="" />
              <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                25 DH
              </p>
            </div>
            <p>base chaplure</p>
            <div className="flex justify-between align-baseline">
              <p className="font-bernier font-400 text-[22px] leading-[25px]">
                WINGS 6 PC BUFFALO{" "}
              </p>
              <Image src="/Vector 24.svg" width={170} height={5} alt="" />
              <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                30DH
              </p>
            </div>
            <p>ACCOMPAGNÉ SAUCE AMÉRICAINE</p>
            <div className="flex justify-between align-baseline">
              <p className="font-bernier font-400 text-[22px] leading-[25px]">
                WINGS MENU{" "}
              </p>
              <Image src="/Vector 24.svg" width={170} height={5} alt="" />
              <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                30DH
              </p>
            </div>
            <p>ACCOMPAGNÉ SAUCE BBQ OU SPICY</p>
            <div className="flex justify-between align-baseline">
              <p className="font-bernier font-400 text-[22px] leading-[25px]">
                WINGS BUFFALO MENU{" "}
              </p>

              <Image src="/Vector 24.svg" width={170} height={5} alt="" />
              <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                30DH
              </p>
            </div>
            ACCOMPAGNÉ SAUCE BBQ OU SPICY
            <p className="text-[#F09804] text-[22px] leading-[25px] font-400">
              FRiTES CLASSIC 12 DH
            </p>
          </div>
          <div className="flex flex-col relative right-[280px] space-y-10 mt-10">
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
          <div className="flex flex-col">
            <div className="h-[560px] w-[442px] bg-white z-50 p-10 space-y-3 relative top-20 left-[12%]">
              <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                TENDERS
              </h1>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  TENDERS SPICY
                </p>

                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  25 DH
                </p>
              </div>
              <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                base chaplure
              </p>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  TENDERS BARBECUE
                </p>
                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  25 DH
                </p>
              </div>
              <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET,
                FRITES
              </p>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  TENDERS MIEL
                </p>
                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  25 DH
                </p>
              </div>
              <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET,
                FRITES
              </p>
            </div>
            <div className="relative z-10 bottom-[30%] right-[40%]">
              <Image
                src="/_DSC4783.jpg"
                width={563}
                height={533}
                className="h-[563px] w-[564px] shapeMenu5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
