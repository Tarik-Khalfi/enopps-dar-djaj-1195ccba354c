'use client'
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobilNavBar from "./MobilNavbar";
import { TbMenu2 } from "react-icons/tb";


const Nav = () => {
    const pathName = usePathname()
    const [open, setopen] = useState(false);

    return (

        <header className={`${open && 'z-0'} navbg z-[100] relative font-poppins`}>
            <div className={`${open && 'z-0'} flex  lg:container justify-between  py-8 items-center   px-5`}>
                <Image src='/logo.png' alt="logo" width={60} height={60} />
                <nav className="text-white hidden lg:block ">
                    <ul className="flex gap-10 font-medium transition-all duration-300 ">
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/'>Accueil</Link>
                            <div className={`${pathName === '/' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />

                        </li>
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/menu' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/menu'>Menu</Link>
                            <div className={`${pathName === '/menu' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />

                        </li>
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/contact' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/contact'>Contact</Link>
                            <div className={`${pathName === '/contact' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />
                        </li>
                    </ul>
                </nav>
                <div className="lg:hidden" onClick={() => setopen(true)}>
                    <TbMenu2 className="text-xl cursor-pointer  text-primary block xl:hidden" />
                </div>
            </div>
            <MobilNavBar pathName={pathName} open={open} onClose={() => setopen(false)} />
        </header >
    )
}

export default Nav