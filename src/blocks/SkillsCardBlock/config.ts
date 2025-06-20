import { Block } from "payload";

export const SkillsCard: Block = {
    slug: 'skills-card',
    interfaceName: 'SkillsCardBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'skill-lists',
            type: 'blocks',
            maxRows: 3,
            blocks: [
                {
                    slug: 'skill-list',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                        },
                        {
                            name: 'skills',
                            type: 'relationship',
                            relationTo: 'skills',
                            hasMany: true,
                        },
                        {
                            name: 'isScrolling',
                            type: 'checkbox',
                            defaultValue: false,
                        },
                        {
                            name: 'scrollDirection',
                            type: 'select',
                            options: [
                                {
                                    label: 'Left',
                                    value: 'left',
                                },
                                {
                                    label: 'Right',
                                    value: 'right',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}