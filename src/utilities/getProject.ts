import { cache } from 'react'
import payload from 'payload'

export const getCachedProject = cache(async (id: string) => {
    console.log('getCachedProject', id)
    
    const project = await payload.findByID({
        collection: 'projects',
        id,
    })

    return project
}) 