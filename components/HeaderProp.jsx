import React from 'react'
import Image from 'next/image'

const HeaderProp = ({ text, font, fontt }) => {
    return (
        <section className='relative navbuttom font-poppins' >
            <Image src='/Group 5.png' width={200} height={300}
                className=' absolute right-0 ' alt='img' />
            <Image src='/Group 284.png' width={200} height={300}
                className=' absolute left-0 bottom-0 ' alt='img' />

            <div className='container pb-[200px]'>
                <h3 className={`font-semibold ${fontt || 'text-5xl '} text-center ${font} text-white`}>{text}</h3>
            </div>

        </section>
    )
}

export default HeaderProp