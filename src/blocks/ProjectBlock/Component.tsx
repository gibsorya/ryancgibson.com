'use client'

import React, { useEffect, useState } from 'react'
import type { Media, Project, ProjectBlock as ProjectBlockProps, Tag } from '@/payload-types'
import Image from 'next/image'

import './styles.css'
import RichText from '@/components/RichText'
import { hasText } from '@payloadcms/richtext-lexical/shared'

export const ProjectBlock: React.FC<ProjectBlockProps> = (props) => {
    const { project } = props
    const projectData = project as Project
    const tags = projectData.tags as Tag[]
    const links = projectData.links as Link[]
    const [svgContents, setSvgContents] = useState<Record<string, string>>({})

    useEffect(() => {
        const fetchSvgs = async () => {
            const svgPromises = links
                .filter(link => link.icon?.type === 'svg')
                .map(async (link) => {
                    if (link.icon?.url) {
                        try {
                            const response = await fetch(link.icon.url)
                            const svgContent = await response.text()
                            return { [link.icon.url]: svgContent }
                        } catch (error) {
                            console.error('Error fetching SVG:', error)
                            return {}
                        }
                    }
                    return {}
                })

            const results = await Promise.all(svgPromises)
            const svgMap = results.reduce((acc, curr) => ({ ...acc, ...curr }), {})
            setSvgContents(svgMap)
        }

        fetchSvgs()
    }, [links])

    return (
        <div className={`flex project-block card-wrapper aspect-square max-w-112 flex-col`}>
            <div className={`project-content flex flex-col justify-center`}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold uppercase">{projectData.title}</h3>
                    {hasText(projectData.description) && <RichText data={projectData.description!} />}
                    <div className="flex flex-row gap-2">
                        {tags && tags.map((tag) => (
                            <span className="text-sm flex tag" key={tag.id}>{tag.name}</span>
                        ))}
                    </div>
                </div>
            </div>
            {links && links.length > 0 && (
                <div className="flex flex-row gap-4 links-container justify-end">
                    {links.map((link) => (
                        link.icon?.type === 'svg' ? (
                            <a 
                                href={link.url} 
                                key={link.label} 
                                className="w-9 h-9 icon-link"
                                dangerouslySetInnerHTML={{ __html: svgContents[link.icon.url!] || '' }}
                            />
                        ) : (
                            <a 
                                href={link.url} 
                                key={link.label} 
                                className="w-9 h-9"
                            >
                                {link.icon && (
                                    <Image 
                                        src={link.icon.url!} 
                                        alt={link.label} 
                                        width={40} 
                                        height={40} 
                                    />
                                )}
                            </a>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}

type Link = {
    label: string
    url: string
    icon?: Media
}