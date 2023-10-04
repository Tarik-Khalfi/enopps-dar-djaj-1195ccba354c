"use client";
import Image from "next/image";
import React from "react";

import ReactPlayer from "react-player";

export default function Video() {
  return (
    <>
      <div className="lg:h-[700px] w-full bg-black relative ">
        <div className="h-[700px] w-full bg-[url('/_DSC4795.jpg')] bg-cover bg-no-repeat z-10  opacity-80">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7WwCUreAjyc"
            className="z-20 w-full h-[700px] "
            width=""
            height="700px"
            playIcon={
              <Image
                src="Group 281.svg"
                alt=""
                width={120}
                height={240}
                className="absolute top-[50%] left-[50%]  translate-x-[-50%] z-50 "
              />
            }
            playing
            light={
              <Image
                src="Group 281.svg"
                alt=""
                width={120}
                height={240}
                className="absolute top-[50%] left-[50%]  translate-x-[-50%] z-50 "
              />
            }
          />
        </div>
      </div>
    </>
  );
}
