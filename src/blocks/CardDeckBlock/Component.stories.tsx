import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { CardDeckBlock } from './Component';

import { CardBlock } from '../CardBlock/Component';

const meta = {
    title: 'Blocks/CardDeckBlock',
    component: CardDeckBlock,
    subcomponents: {
        CardBlock,
    }
} satisfies Meta<typeof CardDeckBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullWidthCards: Story = {
    args: {
        blockType: 'card_deck',
        title: null,
        description: null,
        type: 'full-width-cards',
        infoPosition: 'top',
        maxColumns: 2,
        gap: 'medium',
        cards: [
            {
                blockType: 'card',
                title: 'About Me',
                description: {
                    root: {
                        type: 'root',
                        children: [
                            { type: 'paragraph', children: [{ type: 'text', text: 'Hello! My name is Ryan, and I am a software engineer who enjoys the ins and outs of the world of computer science.', version: 1 }], version: 1 }, {
                                type: 'newline',
                                version: 1
                            }, {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'I’ve worked with both frontend and backend technologies, and I’ve helped architect systems that connect both ends of the tech stack. I also enjoy the design aspect of web dev, and have dabbled with tools like Figma to make my own creations.', version: 1 }],
                            version: 1
                        }, {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'Outside of dev, I enjoy spending time with friends, coffee, chess, messing around on the guitar, and playing different types of games.', version: 1 }],
                            version: 1
                        }],
                        direction: null,
                        format: '',
                        indent: 0,
                        version: 1
                    }
                },
                background: 'light-blue'
            }
        ]
    }
}

const AboutCard = () => {
    return (
        <CardBlock
            title='About'
            blockType='card'
            description={null}
            background='light'
        />
    )
}