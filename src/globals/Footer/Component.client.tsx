'use client'

import type { Footer } from '@/payload-types'

import './styles.css'

interface FooterClientProps {
    data: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
    return (
        <footer className='footer'>
            <div className='footer-container flex justify-center items-center'>
                <a href={data.textUrl || '/'} className='footer-content primary flex text-center items-center justify-center w-fit'>
                    {data.text?.concat(' © 2025 All rights reserved.')}
                </a>
                {/* {data.displaySocials && (
                    <div className='footer-socials'>
                        <Socials />
                    </div>
                )} */}
            </div>
        </footer>
    )
}