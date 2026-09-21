// Beefed up Local SEO & Social Sharing Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://foldedlogic.ca'),
  title: "Folded Logic | Custom Web Design & Software Development",
  description: "Custom web design and full-stack software development based in Peachland, BC. Proudly serving West Kelowna, Kelowna, the broader Okanagan, and British Columbia.",
  keywords: [
    "web design", 
    "software development", 
    "Folded Logic", 
    "Peachland", 
    "West Kelowna", 
    "Kelowna", 
    "Central Okanagan", 
    "British Columbia",
    "Next.js developer"
  ],
  openGraph: {
    title: "Folded Logic | Custom Web Design & Software Development",
    description: "Custom web design and full-stack software development based in Peachland, BC.",
    url: 'https://foldedlogic.ca',
    siteName: 'Folded Logic',
    images: [
      {
        url: '/og-image.png', // You will need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Folded Logic - Custom Web Solutions',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Folded Logic | Custom Web Design & Software Development",
    description: "Custom web design and full-stack software development based in Peachland, BC.",
    images: ['/og-image.png'],
  },
};