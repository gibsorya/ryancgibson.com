import React from 'react'

import { CollectionSlug } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

import type { CollectionBlock as CollectionBlockProps, Project } from '@/payload-types'
import { getCachedCollection } from '@/utilities/getCollection'
import { Projects } from './collections/Projects'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import './styles.css'

export const CollectionBlock: React.FC<CollectionBlockProps> = async(props) => {
    const { title, description, collection, collectionInfoPosition } = props

    const collectionSlug = collection as CollectionSlug

    const fetchedCollection = (await getCachedCollection(collectionSlug)()) as Project[]

    const collectionInfoPositionClass = collectionInfoPosition === 'left' ? 'flex-col lg:flex-row gap-8' : collectionInfoPosition === 'right' ? 'flex-row-reverse gap-4' : 'flex-col gap-4'

    return (
        <div className={`flex gap-4 ${collectionInfoPositionClass} collection-${collectionInfoPosition}-info`}>
            <div className='flex flex-col gap-4'>
                {title && <h2 className='collection-title text-center font-bold uppercase'>{title}</h2>}
                {description && <RichText data={description} className='collection-description' />}
            </div>
            {(() => {
                switch (collectionSlug) {
                    case 'projects':
                        return <Projects title={title} description={description as SerializedEditorState} projects={fetchedCollection} />
                    default:
                        return null
                }
            })()}
        </div>
    )
}