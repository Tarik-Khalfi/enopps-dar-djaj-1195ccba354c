"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobilNavBar({ open, onClose, pathName }) {
    const router = useRouter()
    function closeModal() {
        onClose(false);
    }
    const redirect = (url) => {
        router.push(`/${url}`)
        closeModal()
    }

    return (
        <div >
            <Transition appear show={open} as={Fragment} className="fixed z-[100] inset-0 overflow-auto">
                <Dialog as="div" className="grid h-screen" onClose={closeModal} type="reset">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="overflow-hidden ">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="translate-x-full" enterTo="translate-x-0" leave="ease-in duration-300" leaveFrom="opacity-100 translate-x-0" leaveTo="opacity-0 translate-x-full" >
                            <Dialog.Panel>
                                <div className="bg-black w-[320px] lg:w-[504px] h-screen space-y-8 absolute right-0 overflow-y-auto">
                                    <div className="flex items-center justify-between px-4 py-6">
                                        <div className="relative w-[46px] h-10 ">
                                            <Image src="/logo.png" alt="dardjaj" fill className="object-contain"
                                            />
                                        </div>
                                        <div onClick={closeModal}>
                                            <AiOutlineClose className="text-xl text-primary cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="px-4 space-y-5">
                                        <div
                                            onClick={() => redirect('')}
                                            className={` ${pathName === '/' ? ' text-white  ' : 'text-[#D1D1D1]'} cursor-pointer `}>Accueil</div>
                                        <div
                                            onClick={() => redirect('menu')}
                                            className={` ${pathName === '/menu' ? ' text-white  ' : 'text-[#D1D1D1]'}  cursor-pointer `}
                                        >Menu</div>
                                        <div
                                            onClick={() => redirect('contact')}
                                            className={` ${pathName === '/contact' ? ' text-white  ' : 'text-[#D1D1D1]'} cursor-pointer`}>Contact</div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
