import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://foldedlogic.ca',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Tells Google this is the most important page
    },
    {
      url: 'https://foldedlogic.ca/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // High priority for SEO keywords
    },
    {
      url: 'https://foldedlogic.ca/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://foldedlogic.ca/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}