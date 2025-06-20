import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypewriterBlock } from './Component';

const meta = {
    title: 'Blocks/TypewriterBlock',
    component: TypewriterBlock,
} satisfies Meta<typeof TypewriterBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: [
            { text: 'Frontend Development' },
            { text: 'Backend Development' },
            { text: 'Full Stack Development' },
            { text: 'Database Management' },
            { text: 'Infrastructure' }
        ],
        speed: 100,
        delay: 1000,
        loop: true,
        blockType: 'typewriter'
    }
}