import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    faculty: defineCollection({
      type: 'data',
      source: 'faculty/**.yml',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
      })
    }),
    courses: defineCollection({
      type: 'data',
      source: 'courses/**.csv',
      schema: z.object({
        category: z.string(),
        lecture: z.string(),
        lecturer: z.string(),
        link: z.string()
      })
    }),
  },
})
