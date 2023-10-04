import { Contact, Footer, HeaderProp, Menu, Nav, SocialM } from '@/components'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='blackb  space-y-20'>
            <section className='bg-[url("/Rectangle2.png")] space-y-[100px] bg-cover bg-no-repeat'>
                <Nav />
                <HeaderProp font='font-poppins' text='Nous contacter' />
            </section>
            <Contact />
            <Menu />
            <SocialM />
            <section>
                <iframe
                    className='w-full h-[700px]'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34582.62896689857!2d-9.5846704!3d30.426336400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b65e727f298d%3A0x4a42c018b531c446!2zRGFyIEQnamFqINmF2LfYudmFINiv2KfYsSDYp9mE2K_YrNin2Kw!5e1!3m2!1sar!2sma!4v1695661111659!5m2!1sar!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </main>
    )
}
