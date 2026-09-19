'use client'

import React from 'react'

import type { CallToAction, NewsletterBlock as NewsletterBlockProps } from '@/payload-types'

import './styles.css'
import { hasText } from '@payloadcms/richtext-lexical/shared'
import RichText from '@/components/RichText'

export const NewsletterBlock: React.FC<NewsletterBlockProps> = (props) => {
    const { newsletter, heading, description, cta } = props
    
    return (
        <div className='newsletter-block'>
            <h3 className='newsletter-heading'>{heading}</h3>
            {hasText(description) && (
                    <RichText className='newsletter-description' data={description} />
            )}
            <form className='newsletter-form'>
                <input placeholder='Email' type='email' id="newsletter-email-input" name='newsletter-email' />
                <button className='button'>Subscribe</button>
            </form>
        </div>
    )
}