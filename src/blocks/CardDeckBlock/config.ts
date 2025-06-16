import type { Block } from 'payload'
import { Project } from '../ProjectBlock/config'

export const CardDeck: Block = {
    slug: 'card_deck',
    labels: {
        singular: 'Card Deck',
        plural: 'Card Decks',
    },
    interfaceName: 'CardDeckBlock',
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
            name: 'infoPosition',
            type: 'select',
            options: [
                { label: 'Top', value: 'top' },
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' }
            ],
            defaultValue: 'top',
            required: true,
        },
        {
            name: 'maxColumns',
            type: 'number',
            min: 1,
            max: 4,
            defaultValue: 3,
            required: true,
        },
        {
            name: 'gap',
            type: 'select',
            options: [
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' }
            ],
            defaultValue: 'medium',
            required: true,
        },
        {
            name: 'cards',
            type: 'blocks',
            blocks: [Project]
        },
        {
            name: 'type',
            type: 'select',
            options: ['cards', 'projects'],
            defaultValue: 'cards',
            required: true,
        }
    ]
}