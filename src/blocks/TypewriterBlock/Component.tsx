'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

import './styles.css'

import { TypewriterBlock as TypewriterBlockProps } from '@/payload-types'

export const TypewriterBlock: React.FC<TypewriterBlockProps> = (props) => {
    const { content, speed, delay, loop, prefix, suffix, 'text-type': textType, 'typed-text-color': typedTextColor } = props

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: content.map((item) => item.text),
            startDelay: delay,
            backDelay: delay,
            loop: loop,
            typeSpeed: speed,
            backSpeed: speed,
        });

        return () => {
            typed.destroy();
        }
    });

    const TAG = textType === 'h1' ? 'h1' : textType === 'h2' ? 'h2' : textType === 'h3' ? 'h3' : textType === 'h4' ? 'h4' : textType === 'h5' ? 'h5' : textType === 'h6' ? 'h6' : 'p'

    return (
        <TAG className='typewriter-block-content-text @max-xl:!text-4xl'>{prefix} <span className={`typedTextColor-${typedTextColor} typewriter-block-content-text-typed`} ref={typedRef}></span> {suffix}</TAG>
    )
}
