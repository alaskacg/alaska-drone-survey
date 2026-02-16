import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
}

export function SEO({ title, description, keywords, ogImage, path = '' }: SEOProps) {
  const siteUrl = 'https://alaskacg.github.io/alaska-drone-survey';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alaska Drone Survey",
    "image": ogImage || defaultImage,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Anchorage",
      "addressRegion": "AK",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 61.2181,
      "longitude": -149.9003
    },
    "url": fullUrl,
    "telephone": "+1-907-555-3766",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "State",
      "name": "Alaska"
    }
  };

  return (
    <Helmet>
      <title>{title} | Alaska Drone Survey</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      <link rel="canonical" href={fullUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
