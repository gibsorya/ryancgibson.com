import type { Metadata } from 'next'

import type { Media, Page, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
    const serverUrl = getServerSideURL()

    let url = new URL('/og-image.png', serverUrl).href

    if (image && typeof image === 'object' && 'url' in image && image.url) {
        const ogUrl = image.sizes?.og?.url

        url = ogUrl 
            ? new URL(ogUrl, serverUrl).href 
            : new URL(image.url, serverUrl).href
    }

    return url
}

export const generateMeta = async (args: {
    doc: Partial<Page> | null
}): Promise<Metadata> => {
    const { doc } = args

    const ogImage = getImageURL(doc?.meta?.image)
    const serverUrl = getServerSideURL()

    const title = doc?.meta?.title
        ? doc?.meta?.title
        : 'Ryan Gibson | Software Engineer'

    // Construct the full URL for the page
    const pageUrl = doc?.slug === 'home' 
        ? serverUrl 
        : `${serverUrl}/${Array.isArray(doc?.slug) ? doc?.slug.join('/') : doc?.slug || ''}`

    return {
        description: doc?.meta?.description,
        openGraph: mergeOpenGraph({
            description: doc?.meta?.description || '',
            images: ogImage
                ? [
                    {
                        url: ogImage,
                    },
                ]
                : undefined,
            title,
            url: pageUrl,
        }),
        title,
    }
}
