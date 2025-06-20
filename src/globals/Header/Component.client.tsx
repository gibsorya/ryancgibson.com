'use client'

import Link from 'next/link'

import type { Header } from '@/payload-types'

import Logo from '@/components/Icons/Logo.svg'

import './styles.css'

interface HeaderClientProps {
    data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
    return (
        <header className='header'>
            <div className='header-container'>
                {/* Navigation links will go here */}
                <nav className='nav-links'>
                    {/* Future nav links will be added here */}
                </nav>
                
                <Link href={data.logoLink || '/'} className='logo-link'>
                    {/* <Image src={data.logo.url} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} /> */}
                    <Logo className='logo' />
                </Link>
            </div>
        </header>
    )
}