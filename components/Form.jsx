'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Form = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    })


    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }

    return (
        <div className='py-8 font-poppins px-6'>
            <Image src='/Group 284.png' width={120} height={200}
                className=' absolute  right-0 bottom-0 rotate-[269deg] ' alt='img' />
            <Image src='/Group 284.png' width={160} height={200}
                className=' absolute left-0 top-0 rotate-[90deg] ' alt='img' />
            <h3 className='text-3xl font-bold text-center pb-12'>Formulaire</h3>
            <form
                className=' flex flex-col z-50 space-y-5 w-full '>
                <input
                    id='name'
                    value={inputs.name}
                    onChange={handleChange}
                    className='py-4 w-full z-50 px-10 bg-[#FFFFFF1A] foucus:border-[#FFFFFF1A]   border-2 placeholder-white   outline-none'
                    placeholder='Nom et Prénom'
                    type="text" />
                <input
                    id='email'
                    value={inputs.email}
                    onChange={handleChange}
                    className='py-4 px-10 bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                    placeholder='Email'
                    type="email" />
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <input
                        id='phoneNumber'
                        value={inputs.phoneNumber}
                        type='text'
                        onChange={handleChange}
                        className='py-4 px-10 w-full bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                        placeholder='Numéro de téléphone' />
                    <input
                        id='subject'
                        value={inputs.subject}
                        onChange={handleChange}
                        className='py-4 px-10 w-full bg-[#FFFFFF1A]   border-2  placeholder-cyan-50  outline-none'
                        placeholder='Sujet' type="text" />
                </div>
                <textarea
                    id='message'
                    type='text'
                    value={inputs.message}
                    onChange={handleChange}
                    className='py-2 px-10 h-[200px] bg-[#FFFFFF1A]   border-2 placeholder-cyan-50   outline-none'
                    placeholder='Message...'></textarea>
                <div className='m-auto'>
                    <button placeholder='submit' type='submit' className='py-5 z-50 relative mt-10 px-20 bg-white font-semibold text-sm text-[#E3C08D]'>
                        ENVOYER
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form