'use client'

import React, { useState } from 'react'

import type { Newsletter, NewsletterBlock as NewsletterBlockProps } from '@/payload-types'

import './styles.css'
import { hasText } from '@payloadcms/richtext-lexical/shared'
import RichText from '@/components/RichText'
import { subscribeToNewsletter } from './subscribe-action';

export const NewsletterBlock: React.FC<NewsletterBlockProps> = (props) => {
    const { newsletter, heading, description, cta } = props
    const [status, setStatus] = useState('')
    const [email, setEmail] = useState('')
    const [pending, setPending] = useState(false)

    const newsletterData = newsletter as Newsletter
    const desc = hasText(description) ? description : newsletterData?.description

    const handleSubscribe = async () => {
        setPending(true)
        const result = await subscribeToNewsletter(email, newsletterData.groupId)
        setPending(false)
        setStatus(result.ok ? 'Thanks for subscribing!' : result.error!)
    }

    return (
        <div className='newsletter-block'>
            <h3 className='newsletter-heading'>{heading}</h3>
            {hasText(desc) && (
                <RichText className='newsletter-description' data={desc} />
            )}
            <form className='newsletter-form'>
                {/* <input onChange={(event) => setName(event.currentTarget.value)} placeholder='Name' type='text' id="newsletter-name-input" name='newsletter-name' /> */}
                <input onChange={(event) => setEmail(event.currentTarget.value)} placeholder='Email' type='email' id="newsletter-email-input" name='newsletter-email' />
                <button disabled={pending} type="button" onClick={handleSubscribe} className='button'>{pending ? 'Subscribing…' : 'Subscribe'}</button>
            </form>
            {status && (<p className='subscribe-status'>{status}</p>)}
        </div>
    )
}