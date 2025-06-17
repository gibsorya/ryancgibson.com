import React from 'react'

import type { CardBlock as CardBlockProps } from '@/payload-types'
import './styles.css'

import { RichText } from '@payloadcms/richtext-lexical/react'

export const CardBlock: React.FC<CardBlockProps> = (props) => {
    const { title, description, background } = props

    return (
        <div className={`card-block aspect-auto lg:aspect-square ${background}-background`}>
            <div className='card-block-content flex flex-col gap-2 h-full justify-center items-center'>
                {title && <h2 className='card-block-title uppercase text-center text-2xl lg:text-5xl'>{title}</h2>}
                {description && <RichText data={description} className='card-block-description text-base lg:text-xl' />}
            </div>
        </div>
    )
}