import { business } from "../lib/business";

// LocalBusiness structured data so Google can tie the site to the Business Profile.
export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${business.url}/#business`,
    name: business.name,
    url: business.url,
    logo: `${business.url}/icon.png`,
    image: `${business.url}/opengraph-image.png`,
    description: business.description,
    email: business.email,
    telephone: business.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: business.areasServed.map((city) => ({
      "@type": "City",
      name: `${city}, ${business.region}`,
    })),
    knowsAbout: [
      "Web design",
      "Web development",
      "E-commerce",
      "Search engine optimization",
      "Local SEO",
      "Website hosting and maintenance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
