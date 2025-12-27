import { Suspense } from 'react';
import SEOContent from './SEO';

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/assets/images/og-image.jpg',
  ogType = 'website'
}) {
  return (
    <Suspense fallback={null}>
      <SEOContent 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogType={ogType}
      />
    </Suspense>
  );
}
