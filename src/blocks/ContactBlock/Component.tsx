import React from 'react'

import type { ContactBlock as ContactBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { hasText } from '@payloadcms/richtext-lexical/shared'

import './styles.css'
import { CallToActionBlock } from '../CallToActionBlock/Component'

export const ContactBlock: React.FC<ContactBlockProps> = (props) => {
    const { title, description, cta } = props

    return (
        <div className='contact-block flex flex-col items-center justify-center gap-4 px-4 py-32 lg:p-64 text-center'>
            <h2 className='text-4xl font-bold uppercase'>{title}</h2>
            {hasText(description) && <RichText data={description!} />}
            <CallToActionBlock cta={cta} blockType='callToAction' />
        </div>
    )
}