import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SkillsCardBlock } from './Component';

import { Skill } from '@/payload-types';

import ReactSVG from '@/stories/assets/skills/React.svg'
import NextSVG from '@/stories/assets/skills/Nextjs.svg'

const meta = {
    title: 'Blocks/SkillsCardBlock',
    component: SkillsCardBlock,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#111827' }
            ]
        }
    }
} satisfies Meta<typeof SkillsCardBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const reactSkill: Skill = {
    id: 1,
    name: 'React',
    url: 'https://react.dev',
    updatedAt: '2021-01-01',
    createdAt: '2021-01-01',
    icon: {
        id: 1,
        url: ReactSVG.src,
        alt: 'React',
        type: 'svg',
        updatedAt: '2021-01-01',
        createdAt: '2021-01-01'
    }
}

const nextSkill: Skill = {
    id: 2,
    name: 'Next.js',
    url: 'https://nextjs.org',
    updatedAt: '2021-01-01',
    createdAt: '2021-01-01',
    icon: {
        id: 2,
        url: NextSVG.src,
        alt: 'Next.js',
        type: 'svg',
        updatedAt: '2021-01-01',
        createdAt: '2021-01-01'
    }
}

const skills: Skill[] = [
    reactSkill,
    nextSkill,
    reactSkill,
    nextSkill,
    reactSkill,
    nextSkill,
    reactSkill,
    nextSkill
]

export const ScrollingSkillList: Story = {
    args: {
        title: 'Skills',
        description: undefined,
        'skill-lists': [
            {
                skills: skills,
                isScrolling: true,
                scrollDirection: 'left',
                blockType: 'skill-list'
            }
        ],
        blockType: 'skills-card'
    }
}
