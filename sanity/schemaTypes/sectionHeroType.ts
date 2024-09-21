import { defineType, defineField } from "sanity";

export const sectionHeroType = defineType({
    name: 'sectionHero',
    title: 'Section: Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'image',
            type: 'image'
        })
    ]
})