import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { CallToActionBlock } from './Component';

const meta = {
    title: 'Blocks/CallToActionBlock',
    component: CallToActionBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CallToActionBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        cta: {
            text: 'Primary',
            type: 'primary',
            id: 1,
            updatedAt: '2021-01-01',
            createdAt: '2021-01-01',
        },
        blockType: 'callToAction',
    },
}

export const Secondary: Story = {
    args: {
        cta: {
            text: 'Secondary',
            type: 'secondary',
            id: 1,
            updatedAt: '2021-01-01',
            createdAt: '2021-01-01',
        },
        blockType: 'callToAction',
    },
}

export const Tertiary: Story = {
    args: {
        cta: {
            text: 'Tertiary',
            type: 'tertiary',
            id: 1,
            updatedAt: '2021-01-01',
            createdAt: '2021-01-01',
        },
        blockType: 'callToAction',
    },
}