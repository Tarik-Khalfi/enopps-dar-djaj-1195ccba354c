"use client";
import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [active, setactive] = useState("");

  return (
    <div className="bg-black lg:h-[90vh]  relative">
      <div className='bg-[url("/Rectangle3.jpg")] bg-cover  bg-no-repeat h-[90vh] opacity-25 absolute w-full '></div>
      <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
      <Nav />

      <Image
        src="Group 5.svg"
        width={240}
        height={20}
        alt=""
        className="absolute  right-0 top-[25%]  "
      />
      <div className="lg:grid lg:grid-cols-2 text-white  lg:container lg:px-10 px-4 mx-auto  lg:gap-[122px]   mt-50 flex md:flex-row flex-col justify-center">
        <div className=" mt-[88px] w-full  z-50">
          <div className="  lg:w-[100%] col-span-1">
            <h1 className=" max-w-md font-[400] lg:text-[44px] text-[35px] Leading-[50.63px] text-[#F09804]  font-bernier">
              Bienvenue a Dar d&apos;jaj
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] leading-normal text-[#FFF]">
              Votre Restaurant
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] lieading-normal w- text-[#FFF] lg:w-auto">
              Unique Et Authentique
            </h1>

            <h1 className=" font-poppins text-[20px] text-[#D4D4D4] font-[400] leading-normal mt-[30px] ">
              Venez decouvrir le goût inmensurable de notre cuisine
              <br />
              Car la rôtisserie de qualité, c&apos;&apos;est notre métier.
            </h1>

            <button className="border-[#D7B686] border-2   max-w-sm  text-[#FFF]font-popins text-[16px] font-[600] leading-normal py-[18px] px-[60px] mt-[60px] cursor-pointer z-50">
              VOIR MENU
            </button>
          </div>
          {/* <div className=" relative md:mt-[-30px] md:mr-[20px]  mt-[50px] md:flex md:flex-row flex flex-col-reverse  container  lg:px-0 lg:mx-0  ">
            <div className=" overflow-hidden">
              <div className="absolute z-20 lg:right-0  md:w-[480px]   h-[490px]    clipImage1 mx-auto  w-[320px]">
                <Image
                  src="/_DSC4793.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className=" border-[3px] border-[#E3C08D] border-opacity-30   absolute md:z-10    z-50 overflow-hidden"
                />
                <span className="border-[2.5px] border-[#E3C08D] border-opacity-30 md:rotate-[49deg]    rotate-[37.5deg] h-[154px] absolute top-[-4.8%] left-[11.7%] z-50"></span>
              </div>

              <div className="absolute z-40 md:left-[4%] md:top-[50%]  left-[-10%] top-[100%] lg:mt-[0px] mt-[100px]  w-[245px]   h-[280px] md:mt-[150px] ">
                <Image
                  src="/_DSC4816.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className="clipImage2 h-[280px] w-[245px]  z-10  border-[3px] border-[#E3C08D] border-opacity-30   absolute overflow-hidden"
                />
                <span className="border-[2.5px] border-[#E3C08D]   border-opacity-60  rotate-[140deg]   h-[94px] absolute top-[-3%] right-[14%] z-50"></span>
              </div>

              <Image
                src="/Group 41.svg"
                width={312}
                height={211}
                alt=" "
                className="z-10 absolute bottom-[-20%] left-[25%]"
              />
            </div>
          </div> */}
        </div>
        <div className=" relative md:mt-[20px]  sm:container px-10 mt-[50px] md:flex md:flex-row flex mx-auto flex-col-reverse    lg:px-0 lg:mx-0    ">
          <div className=" overflow-hidden">
            <div className="absolute z-20 lg:right-0  lg:w-[480px]   h-[490px]    clipImage1 mx-auto  w-[320px]">
              <Image
                src="/_DSC4793.jpg"
                alt=""
                fill
                objectFit="cover"
                objectPosition="center"
                className=" border-[3px] border-[#E3C08D] border-opacity-30   absolute md:z-10    z-50 overflow-hidden"
              />
              <span className="border-[2.5px] border-[#E3C08D] border-opacity-30 lg:rotate-[49deg]    rotate-[37.5deg] h-[154px] absolute top-[-4.8%] left-[11.7%] z-50"></span>
            </div>

            <div className="absolute z-40 md:left-[4%] md:top-[50%]  left-[-10%] top-[100%] lg:mt-[0px] mt-[100px]  w-[245px]   h-[280px] md:mt-[150px] ">
              <Image
                src="/_DSC4816.jpg"
                alt=""
                fill
                objectFit="cover"
                objectPosition="center"
                className="clipImage2 h-[280px] w-[245px]  z-10  border-[3px] border-[#E3C08D] border-opacity-30   absolute overflow-hidden"
              />
              <span className="border-[2.5px] border-[#E3C08D]   border-opacity-60  rotate-[140deg]   h-[94px] absolute top-[-3%] right-[14%] z-50"></span>
            </div>

            <Image
              src="/Group 41.svg"
              width={312}
              height={211}
              alt=" "
              className="z-10 absolute bottom-[-20%] left-[25%] hidden md:block"
            />
          </div>
        </div>
      </div>
      <Image
        src="/Group 5.svg"
        alt=""
        width={173}
        height={91}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2"
      />
      <Image
        src="/Group 5 vertical.svg"
        alt=""
        width={91}
        height={173}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2"
      />
    </div>
  );
}
