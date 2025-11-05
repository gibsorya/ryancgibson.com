'use client'

import React, { useState } from 'react'

import { IoIosMenu } from "react-icons/io";

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Links'
import { MobileMenu } from './MobileMenu'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
    const [modalIsActive, setModalIsActive] = useState(false)
    const navItems = data?.navItems || []

    const handleOnOpen = () => setModalIsActive(true);
    const handleOnClose = () => setModalIsActive(false);

    return (
        <nav className="flex basis-full grow items-center justify-start md:justify-center md:absolute top-0 left-0 right-0 bottom-0">
            <div className='hidden md:flex flex-row justify-center w-auto'>
                {navItems.map(({ link }, i) => {
                    return <CMSLink key={i} className='nav-item hover:text-tomato-red uppercase font-bold tracking-[1px] leading-[1.33] px-4' {...link} appearance="inline" />
                })}
            </div>
            <div className='flex md:hidden flex-row'>
                <button onClick={handleOnOpen}>
                    <IoIosMenu className="menu-icon cursor-pointer size-8" color='var(--color-white)' />
                </button>
                <MobileMenu data={data} isActive={modalIsActive} onClose={handleOnClose} />
            </div>
        </nav>
    )
}