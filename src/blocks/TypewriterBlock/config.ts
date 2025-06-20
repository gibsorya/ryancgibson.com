import { Block } from "payload";

export const TypewriterBlock: Block = {
    slug: 'typewriter',
    interfaceName: 'TypewriterBlock',
    fields: [
        {
            name: 'content',
            type: 'array',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true
                }
            ],
            required: true
        },
        {
            name: 'prefix',
            type: 'text',
            required: false
        },
        {
            name: 'suffix',
            type: 'text',
            required: false
        },
        {
            name: 'text-type',
            type: 'select',
            options: [
                {
                    label: 'H1',
                    value: 'h1'
                },
                {
                    label: 'H2',
                    value: 'h2'
                },
                {
                    label: 'H3',
                    value: 'h3'
                },
                {
                    label: 'H4',
                    value: 'h4'
                },
                {
                    label: 'H5',
                    value: 'h5'
                },
                {
                    label: 'H6',
                    value: 'h6'
                },
                {
                    label: 'P',
                    value: 'p'
                }
            ]
        },
        {
            name: 'typed-text-color',
            type: 'select',
            options: [
                {
                    label: 'Default',
                    value: 'default'
                },
                {
                    label: 'White',
                    value: 'white'
                },
                {
                    label: 'Black',
                    value: 'black'
                },
                {
                    label: 'Tomato Red',
                    value: 'tomato'
                },
                {
                    label: 'Light Blue',
                    value: 'light-blue'
                }
            ],
            defaultValue: 'default',
            required: false
        },
        {
            name: 'speed',
            type: 'number',
            required: true,
            defaultValue: 100
        },
        {
            name: 'delay',
            type: 'number',
            required: true,
            defaultValue: 1000
        },
        {
            name: 'loop',
            type: 'checkbox',
            required: true,
            defaultValue: true
        }
    ]
}