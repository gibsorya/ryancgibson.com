'use client'

import React, { useEffect, useState } from 'react'
import type { Skill, SkillsCardBlock as SkillsCardBlockProps, Media } from '@/payload-types'
import RichText from '@/components/RichText'
import { hasText } from '@payloadcms/richtext-lexical/shared'

import './styles.css'

export const SkillsCardBlock: React.FC<SkillsCardBlockProps> = (props) => {
    const { title, description, 'skill-lists': skillListsData, background } = props
    const [svgContents, setSvgContents] = useState<Record<string, string>>({})

    const skillLists = skillListsData as SkillList[]

    useEffect(() => {
        const fetchSvgs = async () => {
            // Get all skills from all skill lists
            const allSkills = skillLists.flatMap(list => list.skills)

            const svgPromises = allSkills
                .filter(skill => {
                    const icon = skill.icon as Media
                    return icon?.type === 'svg'
                })
                .map(async (skill) => {
                    const icon = skill.icon as Media
                    if (icon?.url) {
                        try {
                            const response = await fetch(icon.url)
                            const svgContent = await response.text()
                            return { [icon.url]: svgContent }
                        } catch (error) {
                            console.error('Error fetching SVG:', error)
                            return {}
                        }
                    }
                    return {}
                })

            const results = await Promise.all(svgPromises)
            const svgMap = results.reduce((acc: Record<string, string>, curr) => ({ ...acc, ...curr }), {})
            setSvgContents(svgMap)
        }

        fetchSvgs()
    }, [skillLists])

    return (
        <div className={`skills-card-block ${background ? background : 'dark'}-background`}>
            <div className="skills-card-block-content flex flex-col gap-2 h-full justify-start items-center text-center">
                {title && <h2 className="skills-card-block-title text-white text-2xl lg:text-5xl uppercase">{title}</h2>}
                {hasText(description) && <RichText data={description!} className='skills-card-block-description text-base xl:text-xl' />}
                {skillLists.map((skillList, index) => (
                    <SkillList key={index} {...skillList} svgContents={svgContents} />
                ))}
            </div>
        </div>
    )
}

export type SkillList = {
    title: string
    skills: Skill[]
    isScrolling: boolean
    scrollDirection: 'left' | 'right'
}

type SkillListProps ={
    svgContents: Record<string, string>
} & SkillList

export const SkillList: React.FC<SkillListProps> = (props) => {
    const { title, skills, isScrolling, scrollDirection, svgContents } = props

    return (
        <div className={`skills-list-container flex flex-col gap-4 w-full`}>
            {title && <h3 className="skill-list-title text-white">{title}</h3>}
            <div
                data-animated={isScrolling}
                data-scroll-direction={scrollDirection}
                className={`skills-list ${isScrolling ? 'scroller' : 'static'} flex flex-row gap-4`}>
                <div className='skills-list-inner'>
                    {skills.map((skill, index) => (
                        skill.url ? (
                            <a
                                key={index}
                                href={skill.url}
                                className="skill-item flex w-fit"
                                target="_blank"
                                rel="noopener noreferrer"
                                dangerouslySetInnerHTML={{
                                    __html: svgContents[(skill.icon as Media).url!] || ''
                                }} />
                        ) : (
                            <div key={index} className="skill-item flex" dangerouslySetInnerHTML={{
                                __html: svgContents[(skill.icon as Media).url!] || ''
                            }} />
                        )
                    ))}
                    {isScrolling && skills.map((skill, index) => (
                        skill.url ? (
                            <a
                                key={`duplicate-${index}`}
                                href={skill.url}
                                className="skill-item flex w-fit"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{
                                    __html: svgContents[(skill.icon as Media).url!] || ''
                                }} />
                        ) : (
                            <div
                                key={`duplicate-${index}`}
                                className="skill-item flex"
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{
                                    __html: svgContents[(skill.icon as Media).url!] || ''
                                }} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}
