'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const [active, setactive] = useState('')
    return (
        <footer className='lg:container  lg:space-y-16 px-4 lg:py-10 pb-10 ' >
            <div className='lg:container space-y-7 font-poppins lg:grid grid-cols-12 py-10  items-start'>
                <div className=" col-span-6 space-y-2 lg:space-y-6">
                    <Image src='/assets/logo/logo.svg' alt="logo" width={70} height={70} />
                    <p className='lg:w-[360px] leading-9 pt-5 font-poppins text-[#A1A1A1]'>Spécialiste de la rôtisserie depuis 1974 Un Goût inimitable Dégustez et vous reviendrez</p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a className='divv' href="https://web.facebook.com/DarDjajAgadir/">
                                <svg className='m-auto w-[21px]   ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.165 4.16687H5.83171C4.90983 4.16687 4.16504 4.91166 4.16504 5.83354V44.1669C4.16504 45.0887 4.90983 45.8335 5.83171 45.8335H44.165C45.0869 45.8335 45.8317 45.0887 45.8317 44.1669V5.83354C45.8317 4.91166 45.0869 4.16687 44.165 4.16687ZM39.3525 16.3283H36.0244C33.415 16.3283 32.9098 17.5679 32.9098 19.3908V23.4065H39.139L38.3265 29.6929H32.9098V45.8335H26.415V29.6981H20.9827V23.4065H26.415V18.771C26.415 13.3908 29.7015 10.4585 34.5036 10.4585C36.8057 10.4585 38.7796 10.6304 39.3577 10.7085V16.3283H39.3525Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-primary rounded-lg p-1 w-fit m-auto duration-500 bg-[#AAA] block' href="//wa.me/+212636586520" target='_blanc'>
                                <Image src='/1384023.png' width={14} height={15} className=' ' alt='' />
                            </a>
                        </li>
                        <li>
                            <a className='divv' href="https://www.instagram.com/dar.djaj/">
                                <svg className='m-auto w-[21px] ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M24.9934 18.0529C21.1679 18.0529 18.046 21.1748 18.046 25.0003C18.046 28.8258 21.1679 31.9477 24.9934 31.9477C28.8189 31.9477 31.9408 28.8258 31.9408 25.0003C31.9408 21.1748 28.8189 18.0529 24.9934 18.0529ZM45.8304 25.0003C45.8304 22.1234 45.8565 19.2725 45.6949 16.4008C45.5333 13.0652 44.7724 10.1048 42.3332 7.6657C39.8889 5.22134 36.9338 4.46562 33.5982 4.30405C30.7212 4.14248 27.8703 4.16854 24.9986 4.16854C22.1217 4.16854 19.2708 4.14248 16.3991 4.30405C13.0635 4.46562 10.1031 5.22655 7.66399 7.6657C5.21963 10.1101 4.46391 13.0652 4.30234 16.4008C4.14077 19.2777 4.16683 22.1286 4.16683 25.0003C4.16683 27.8721 4.14077 30.7282 4.30234 33.5999C4.46391 36.9355 5.22484 39.8958 7.66399 42.335C10.1083 44.7793 13.0635 45.535 16.3991 45.6966C19.276 45.8582 22.1269 45.8321 24.9986 45.8321C27.8756 45.8321 30.7264 45.8582 33.5982 45.6966C36.9338 45.535 39.8941 44.7741 42.3332 42.335C44.7776 39.8906 45.5333 36.9355 45.6949 33.5999C45.8617 30.7282 45.8304 27.8773 45.8304 25.0003ZM24.9934 35.6898C19.0779 35.6898 14.3039 30.9158 14.3039 25.0003C14.3039 19.0849 19.0779 14.3108 24.9934 14.3108C30.9089 14.3108 35.6829 19.0849 35.6829 25.0003C35.6829 30.9158 30.9089 35.6898 24.9934 35.6898ZM36.1207 16.3695C34.7396 16.3695 33.6242 15.2542 33.6242 13.873C33.6242 12.4919 34.7396 11.3765 36.1207 11.3765C37.5019 11.3765 38.6172 12.4919 38.6172 13.873C38.6176 14.201 38.5533 14.5258 38.428 14.8289C38.3027 15.1319 38.1188 15.4073 37.8869 15.6392C37.655 15.8711 37.3796 16.055 37.0766 16.1803C36.7735 16.3056 36.4487 16.3699 36.1207 16.3695Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='divv' href="https://www.youtube.com/@dardjaj1106">
                                <svg className='m-auto w-[21px] ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.9628 15.2984C44.7256 14.3532 44.2606 13.4911 43.6142 12.7986C42.9679 12.1061 42.1629 11.6074 41.2798 11.3524C38.0292 10.4169 24.9991 10.4169 24.9991 10.4169C24.9991 10.4169 11.969 10.4169 8.71841 11.3474C7.83495 11.6016 7.02954 12.1 6.38306 12.7927C5.73658 13.4853 5.27179 14.3478 5.03538 15.2935C4.16577 18.7767 4.16577 26.0419 4.16577 26.0419C4.16577 26.0419 4.16577 33.307 5.03538 36.7853C5.51436 38.7061 6.92805 40.2188 8.71841 40.7314C11.969 41.6669 24.9991 41.6669 24.9991 41.6669C24.9991 41.6669 38.0292 41.6669 41.2798 40.7314C43.0748 40.2188 44.4838 38.7061 44.9628 36.7853C45.8324 33.307 45.8324 26.0419 45.8324 26.0419C45.8324 26.0419 45.8324 18.7767 44.9628 15.2984ZM20.8603 32.7099V19.3739L31.649 25.9921L20.8603 32.7099Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='col-span-2 flex flex-col  lg:space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-semibold'>Menu</h3>
                    <div className='border-t mt-3 ml-1 mb-7 border-[#F09804E5] px-6 border-2  transition-all duration-100  w-fit' />
                    <ul className=" space-y-5 text-base">
                        <li>
                            <Link onClick={() => setactive('home')} className={`${active === 'home' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/'>Accueil</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('menu')} className={`${active === 'menu' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/menu'>La Carte</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('contact')} className={`${active === 'contact' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/contact'>Nous Contacter</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-span-3 flex flex-col  lg:space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-semibold'>Nos Informations</h3>
                    <div className='border-t mt-3 ml-1 mb-7 lg:m-0 border-[#F09804E5] px-6 border-2 transition-all duration-100  w-fit' />
                    <ul className=" space-y-5 lg:space-y-5 text-base text-[#A1A1A1]">
                        <li className=' flex gap-3 '>
                            <span className='font-bold lg:text-2xl text-white '>L.</span>
                            <p>
                                356 av moulay ismail cité nahda Agadir, Agadir, Morocco
                            </p>
                        </li>
                        <li className=' flex gap-3 items-center'>
                            <span className='font-bold lg:text-2xl text-white'>P.</span>
                            <p>+212 5288-21819</p>
                        </li>
                        <li className=' flex gap-3 items-center'>
                            <span className='font-bold lg:text-2xl text-white'>E.</span>
                            <p>dardjaj@restaurant.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-[#A1A1A1] flex gap-1 border-t w-2/3 lg:w-full lg:pt-10 pt-9 border-[#a1a1a144]'>
                <p>©</p> <p>Copyright Dar d’jaj 2023, All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
