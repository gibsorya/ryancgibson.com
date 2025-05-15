import { defineType, defineField } from "sanity";

export const sectionBlockTextType = defineType({
  name: 'sectionBlockText',
  title: 'Section: Block Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'rich_text',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'text',
      type: 'markdown'
    })
  ]
})
