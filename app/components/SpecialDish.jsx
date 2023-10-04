"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function SpecialDish() {
  const [dish, setDish] = useState(false);
  const [dishSalade, setDishSalade] = useState(true);
  const [dishDesert, setDishDesert] = useState(false);
  return (
    <div className="lg:h-[882px] bg-[#0B0E11] lg:mt-[110px] mt-[870px] md:mt-[550px]  mb-[110px] relative  ">
      <Image src="/Group 5.svg" width={213} height={117} alt="" />
      <Image
        src="/Group 5 vertical.svg"
        width={113}
        height={50}
        alt=""
        className="absolute top-0"
      />
      <div className="md:container mx-auto px-10 ">
        <div classname="flex  flex-col justify-center items-center mt-[100px] ">
          <h1 className=" text-[44px] font-[400] leading-normal text-center font-bernier text-[#F09804] mt-[150px] lg:mt-[0px] ">
            Nos plats speciaux
          </h1>
          <h1 className="text-[#FFF] lg:text-[36px] w-[100%] mx-auto px-2 text-[30px] font-poppins  font-600  font-bold leading-normal text-center">
            Meilleures Recommandations au menu
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-3   lg:gap-7 lg:justify-items-center mt-[70px] flex flex-col lg:space-y-0 space-y-20">
          <div className=" w-full h-[600px] relative  bg-black spcSect">
            <div className="bg-[url('/_DSC4744.jpg')]   w-full lg:w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50 "></div>

            <div
              className={`${
                dish === true
                  ? `h-[194px] w-[90%]   bg-white absolute bottom-0 afterClip z-20 hover:cursor-pointer`
                  : "w-[90%] h-[70px]  bg-white absolute bottom-0 spcSect2 z-20 hover:cursor-pointer"
              } `}
              onClick={() => {
                setDish(dish === true ? false : true);
              }}
            >
              <div className="flex flex-row justify-center absolute space-x-4">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center items-center pl-4">
                    <span className="h-[3px] w-[40px] bg-[#f09804] ml-1 text-left"></span>
                    <h1 className="text-[#0F1622]  md:text-[32px] text-[24px] font-bernier font-bold font-600 leading-normal space-x-4 p-4 text-left">
                      TACOS DAR D&apos;JAJ
                    </h1>
                  </div>
                  <div className="flex-col space-y-4 mr-auto w-full pl-6">
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal">
                      Sandwich poulet
                    </p>
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal md:block hidden">
                      Tacos Dar Djaj
                    </p>
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal md:block hidden">
                      Sandwich Tandori
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
          <div className="bg-black  w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4729.jpg')]  w-full h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div
              className={`${
                dishSalade === true
                  ? `md:h-[194px] h-[240px] w-[90%]   bg-white absolute bottom-0 afterClip z-20 hover:cursor-pointer`
                  : "w-[90%] h-[70px]  bg-white absolute bottom-0 spcSect2 z-20 hover:cursor-pointer"
              } `}
              onClick={() => {
                setDishSalade(dishSalade === true ? false : true);
              }}
            >
              <div className="flex flex-col   absolute space-x-1">
                <div className="flex flex-row  items-center space-x-1 pl-4">
                  <span className="h-[3px] w-[40px] bg-[#f09804] ml-1 text-left"></span>
                  <h1 className="text-[#0F1622]  md:text-[32px] text-[26px] font-bernier font-bold font-600 leading-normal space-x-4 p-4 text-left">
                    POULET ENTIER
                  </h1>
                </div>
                <div className="flex-col space-y-4 mr-auto w-full p-2">
                  <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal pl-2">
                    Poulet rôti (accompagné de riz , frites <br />
                    sauce tomate cerise et sauce poulet)
                  </p>
                  <p className="font-bernier text-[#f09804] text-[32px] font-400 leading-normal pl-2">
                    140 DH
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[600px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
          <div className="bg-black w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4696.jpg')]  w-full lg:w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div
              className={`${
                dishDesert === true
                  ? `h-[194px] w-[90%]   bg-white absolute bottom-0 afterClip z-20 hover:cursor-pointer`
                  : "w-[90%] h-[70px]  bg-white absolute bottom-0 spcSect2 z-20 hover:cursor-pointer"
              } `}
              onClick={() => {
                setDishDesert(dishDesert === true ? false : true);
              }}
            >
              <div className="flex flex-row justify-center absolute space-x-4">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center items-center pl-4">
                    <span className="h-[3px] w-[40px] bg-[#f09804] ml-1 text-left"></span>
                    <h1 className="text-[#0F1622]  md:text-[32px] text-[22px] font-bernier font-bold font-600 leading-normal space-x-4 p-4 text-left">
                      SALADE DAR D&lsquo;JAJ
                    </h1>
                  </div>
                  <div className="flex-col space-y-4 mr-auto w-full pl-6">
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal">
                      Sandwich poulet
                    </p>
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal md:block hidden">
                      Tacos Dar Djaj
                    </p>
                    <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal md:block hidden">
                      Sandwich Tandori
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
