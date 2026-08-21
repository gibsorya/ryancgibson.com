'use client'

import { CMSLink } from '@/components/Links';
import type { Header as HeaderType } from '@/payload-types'

interface MobileMenuModal {
    data: HeaderType,
    isActive: boolean,
    onClose: () => void
}

export function MobileMenu(props: MobileMenuModal) {
    const { data, isActive, onClose } = props;
    const navItems = data?.navItems || []

    const handleOnClose = (event: React.MouseEvent) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className={`modal ${isActive ? "flex" : "hidden"} z-50 inset-0 items-center justify-start w-full h-full fixed`}>
            <div className="fixed inset-0 bg-black/75" onClick={handleOnClose}></div>

            <div className="modal-content relative z-50  h-full bg-rich-black min-w-9/10">
                <div className="flex justify-end items-center p-5 pb-3">
                    <button className="text-white border-none bg-none text-4xl cursor-pointer modal-close-button" onClick={handleOnClose}><span className="block" aria-hidden="true">&times;</span></button>

                </div>
                <div onClick={handleOnClose} className='flex flex-col gap-4 p-8'>
                    {navItems.map(({ link }, i) => {
                        return <CMSLink key={i} className='nav-item hover:text-tomato-red uppercase font-bold text-xl tracking-[1px] leading-[1.33]' {...link} appearance="inline" />
                    })}
                </div>
            </div>
        </div>
    )
}