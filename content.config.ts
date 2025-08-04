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
    wcars: defineCollection({
      type: 'data',
      source: 'wcars/**.yml',
      schema: z.object({
        meta: z.object({
          path: z.string(),
          body: z.object({
            id: z.number(),
            title: z.string(),
            city: z.string(),
            date: z.string(),
            img: z.string(),
            desc: z.string(),
            about: z.array(z.object({
              url: z.string(),
              label: z.string(),
            })),
            note: z.array(z.object({
              url: z.string(),
              label: z.string(),
            })),
            presentations: z.array(z.object({
              session: z.string(),
              list: z.array(z.object({
                presenters: z.string(),
                presentations: z.string(),
                video: z.string(),
              })),
            }))
          }),
        })
      })
    }),
  },
})
