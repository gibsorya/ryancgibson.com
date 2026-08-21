'use client'

import Link from 'next/link'

import type { Header, Social } from '@/payload-types'

import Logo from '@/components/Icons/Logo.svg'
import GitHub from '@/components/Icons/Github.svg'
import LinkedIn from '@/components/Icons/LinkedIn.svg'

import './styles.css'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
    data: Header
    socials: Social
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, socials }) => {
    return (
        <header className='header'>
            <div className='header-container relative'>
                {/* Navigation links will go here */}
                <HeaderNav data={data} />

                <Link href={data.logoLink || '/'} className='logo-link z-10'>
                    {/* <Image src={data.logo.url} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} /> */}
                    <Logo className='logo' />
                </Link>

                <div className='social-links flex flex-row gap-2 z-10'>
                    {socials?.github && <Link href={socials.github}><GitHub /></Link>}
                    {socials?.linkedin && <Link href={socials.linkedin}><LinkedIn /></Link>}
                </div>
            </div>
        </header>
    )
}
