import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        banner: image().or(z.string()),

        // This banner will be shown in blog lists(/posts) if provided.
        banner2: image().or(z.string()).optional(),

        // The article OG cover, if not provided, use summary card, otherwise summary_large_image
        ogImage: image().or(z.string()).optional(),

        category: z.string(),
        pubDate: z.coerce.date(),

        // Should the article be added to SELECTED POSTS? will be displayed on the /posts page if true.
        selected: z.boolean().optional(),

        tags: z.array(z.string()).optional(),

        // not use, just record this value since its from my previous blog system
        updatedDate: z.coerce.date().optional(),
        oldViewCount: z.number().optional(),
    }),
})

const categoryCollection = defineCollection({
    type: 'content',
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
    }),
})

const friendsCollection = defineCollection({
    type: 'data',
    schema: () => z.array(
        z.object({
            title: z.string(),
            name: z.string(),
            description: z.string(),
            avatar: z.string(),
            social: z.object({
                twitter: z.string().optional(),
                blog: z.string().optional(),
                github: z.string().optional(),
            }),
        }),
    ),
})

export const collections = { posts, categories: categoryCollection, friends: friendsCollection }
