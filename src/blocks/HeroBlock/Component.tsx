import React from 'react'
// import Image from 'next/image'
import RichText from '@/components/RichText'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import './styles.css'

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
    const { title, description, type } = props

    const setAspectRatio = () => {
        switch (type) {
            case 'text':
                return 'aspect-square md:aspect-16/7'
            case 'full':
                return 'aspect-video'
            case 'banner':
                return 'aspect-square md:aspect-video'
            default:
                return 'aspect-video'
        }
    }
    // const imageUrl = image ? (typeof image === 'number' ? image : image.url) : null

    return (
        <div className={`hero-block ${setAspectRatio()} flex flex-col justify-center items-center`}>
            {title && <h1 className="text-4xl font-bold underline">{title}</h1>}
            {description && <RichText data={description} />}
            {/* {image && <Image src={imageUrl} alt={title} />} */}
        </div>
    )
}