import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
    type: 'website',
    description: 'Ryan Gibson is a software engineer and designer.',
    images: [
        {
            url: `${getServerSideURL()}/og-image.png`,
        },
    ],
    siteName: 'Ryan Gibson',
    title: 'Ryan Gibson',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
    }
}
