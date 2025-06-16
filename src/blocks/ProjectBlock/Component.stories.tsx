import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { ProjectBlock } from './Component';

import { Project } from '@/payload-types';

const meta = {
    title: 'Blocks/ProjectBlock',
    component: ProjectBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProjectBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        project: {
            id: 1,
            title: "Join the Journey",
            description: {
                root: {
                    type: "root",
                    children: [{ type: "paragraph", children: [{ type: "text", text: "Join The Journey (JTJ) is a daily Bible-reading plan from Watermark Community Church. In 2023, JTJ received a brand new look, and with it, a brand new website. I helped build the new site from scratch and implemented many of its features, many of which made its way to other Watermark products.", version: 1 }], version: 1 }],
                    direction: null,
                    format: "",
                    indent: 0,
                    version: 1
                }
            },
            featuredImage: null,
            updatedAt: "2025-06-15T00:27:24.829Z",
            createdAt: "2025-06-15T00:27:24.829Z",
            tags: [
                {
                    id: 1,
                    name: 'Web Development',
                    updatedAt: "2025-06-15T00:27:24.829Z",
                    createdAt: "2025-06-15T00:27:24.829Z"
                }
            ]
        },
        fullWidth: false,
        blockType: 'project'
    },
};