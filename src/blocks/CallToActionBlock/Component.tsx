'use client'

import React from 'react'

import type { CallToAction, CallToActionBlock as CallToActionBlockProps } from '@/payload-types'

import './styles.css'

export const CallToActionBlock: React.FC<CallToActionBlockProps> = (props) => {
    const { cta, overrideType } = props

    const ctaData = cta as CallToAction
    const text = ctaData.text || 'CTA'
    const url = ctaData.link || '/'

    const type = overrideType || ctaData.type

    return (
        <button onClick={() => window.location.href = url} className={`button button-${type}`}>{text}</button>
    )
}