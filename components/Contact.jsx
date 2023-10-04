import React from "react";
import Image from "next/image";
import { Form } from ".";

const Contact = () => {
  return (
    <section className="lg:container lg:grid grid-cols-12 font-poppins space-y-8 items-center ">
      <Image
        alt="ll"
        src="/Group 5.png"
        width={400}
        height={400}
        className="w-[300px] h-[100px]  z-10 absolute  right-0 "
      />

      <div className="px-5 col-span-6 z-20 space-y-8">
        <div className=" ">
          <h1 className="text-[#F09804]  text-[44px]  font-bernier uppercase">
            Contacter Nous
          </h1>
          <h2 className="text-4xl font-semibold">
            contactez-nous directement.
          </h2>
        </div>

        <p className="text-[#D4D4D4] leading-7 lg:w-[452px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt{" "}
        </p>
        <div className="flex gap-5">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#F09804" />
            <path
              d="M33.4868 30.14L29.4218 26.444C29.2296 26.2693 28.9771 26.1762 28.7176 26.1842C28.4581 26.1922 28.2118 26.3008 28.0308 26.487L25.6378 28.948C25.0618 28.838 23.9038 28.477 22.7118 27.288C21.5198 26.095 21.1588 24.934 21.0518 24.362L23.5108 21.968C23.6972 21.7871 23.8059 21.5408 23.814 21.2812C23.822 21.0216 23.7287 20.769 23.5538 20.577L19.8588 16.513C19.6838 16.3204 19.4407 16.2035 19.1809 16.1873C18.9212 16.171 18.6654 16.2567 18.4678 16.426L16.2978 18.287C16.1249 18.4605 16.0217 18.6914 16.0078 18.936C15.9928 19.186 15.7068 25.108 20.2988 29.702C24.3048 33.707 29.3228 34 30.7048 34C30.9068 34 31.0308 33.994 31.0638 33.992C31.3083 33.9783 31.5391 33.8747 31.7118 33.701L33.5718 31.53C33.7418 31.333 33.8281 31.0774 33.8122 30.8177C33.7963 30.558 33.6795 30.3148 33.4868 30.14Z"
              fill="white"
            />
          </svg>
          <h4 className="lg:text-2xl text-lg">
            +212 5288-21819 <br />{" "}
            <span className="text-[#C4C4C4] text-sm">Telephone</span>
          </h4>
        </div>
        <div className="flex gap-5 py-4u">
          <Image
            src="/icon2png.png"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            alt="icon"
          />
          <h4 className="lg:text-2xl text-lg">
            dardjaj@email.com <br />{" "}
            <span className="text-[#C4C4C4] text-sm">Email</span>
          </h4>
        </div>
        <div className="flex gap-5">
          <Image
            src="/icon3.png"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            alt="icon"
          />
          <h4 className="lg:text-2xl text-lg">
            356 av moulay ismail cité nahda Agadir <br />{" "}
            <span className="text-[#C4C4C4] text-sm">Adresse</span>
          </h4>
        </div>
      </div>
      <div className="relative z-20 col-span-6 clipo5 w-full bg-[#F09804E5] lg:px-14 py-2">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
