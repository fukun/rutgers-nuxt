import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    courses: defineCollection({
      type: 'data',
      source: 'courses/**.csv',
      schema: z.object({
        meta: z.object({
          path: z.string(),
          body: z.array(z.object({
            category: z.string(),
            lecture: z.string(),
            lecturer: z.string(),
            link: z.string(),
          })),
        })
      })
    }),
  },
})
