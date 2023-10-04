import React from 'react'
import Image from 'next/image'

const Menu2 = () => {
    const list = [
        {
            name: "1/4 Poulet",
            price: "40 dh",
        },
        {
            name: "1/2 POULET",
            price: "80 dh",
        },
        {
            name: "POULET ENTIER",
            price: "145 dh",
        },

    ];
    return (
        <section className='bg-[#0D1518]   py-20'>
            <div className='lg:container relative  lg:flex justify-between items-center'>
                <div className='lg:hidden'>
                    <Image alt='ll' src='/_DSC4816.jpg' width={400} height={400}
                        className='w-[700px]  ' />
                </div>
                <div className="bg-white  py-8 px-[30px] z-50 space-y-8 ">
                    <h3 className="text-primary opacity-90 text-[44px] font-bernier">
                        POULET BRAISÉ GRILLÉ
                    </h3>
                    <div className="space-y-3">
                        {list.map((item, index) => {
                            return (
                                <div className="text-[#808080]" key={index}>
                                    <div className="flex  relative items-center gap-1">
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
                        Servi avec salade marocaine sauce, riz et frites
                    </h3>
                </div>
                <div className='hidden lg:block relative right-32  space-y-6'>
                    <Image alt='ll' src='/_DSC4816.jpg' width={400} height={400}
                        className='w-[700px] clipo3 ' />
                    <Image alt='ll' src='/_DSC4793.jpg' width={400} height={400}
                        className='w-[700px] clipo4' />
                </div>
                <div className='relative lg:block hidden right-[102px] py-10  z-10'>
                    <Image alt='ll' src='/Group 5.png' width={500} height={500}
                        className='w-[250px] h-[140px] z-20 absolute rotate-[45deg] top-[38%] -left-[170px] ' />

                    <div className='h-[600px] w-[500px]  mt-10 clipo '>
                        <Image alt='ll' src='/0a057e698af57a6c452b0d5003044b0c.jpg' fill
                            className=' overflow-hidden'
                            objectFit='contain' objectPosition='center' />
                    </div>
                    <Image src='/Group 284.png' width={250} height={300}
                        className=' absolute -right-20 -bottom-10 rotate-[270deg]   ' alt='img' />
                </div>
            </div>
        </section>
    )
}

export default Menu2