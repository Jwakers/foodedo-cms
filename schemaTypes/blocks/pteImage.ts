import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const pteImage = defineType({
  name: 'pteImage',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Important for accessibility',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      alt: 'alt',
      media: 'image',
    },
    prepare({title, alt, media}) {
      return {
        title: title || alt || 'Image',
        media,
      }
    },
  },
})
