import { defineField, defineType } from "sanity";

export const pageType = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'page'
                        },
                    ]
                }
            ]
        })
    ]
})