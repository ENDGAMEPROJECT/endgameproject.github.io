"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function SEOContent({ 
  title, 
  description, 
  keywords,
  ogImage = '/assets/images/og-image.jpg',
  ogType = 'website'
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  
  const baseUrl = 'https://endgameproject.github.io';
  const fullUrl = `${baseUrl}${pathname}`;
  
  useEffect(() => {
    // Establecer el título de la página
    document.title = title;
    
    // Función helper para crear o actualizar meta tags
    const setMetaTag = (attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Función helper para crear o actualizar link tags
    const setLinkTag = (rel, href, hreflang = null) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };
    
    // Meta tags básicos
    setMetaTag('name', 'description', description);
    if (keywords) setMetaTag('name', 'keywords', keywords);
    setMetaTag('http-equiv', 'Content-Language', lang);
    
    // Canonical URL
    setLinkTag('canonical', `${fullUrl}?lang=${lang}`);
    
    // Alternate URLs para cada idioma (hreflang)
    const languages = ['es', 'en', 'fi', 'sr'];
    languages.forEach(l => {
      setLinkTag('alternate', `${fullUrl}?lang=${l}`, l);
    });
    setLinkTag('alternate', fullUrl, 'x-default');
    
    // Open Graph / Facebook
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', `${baseUrl}${ogImage}`);
    const ogLocale = lang === 'es' ? 'es_ES' : lang === 'fi' ? 'fi_FI' : lang === 'sr' ? 'sr_RS' : 'en_US';
    setMetaTag('property', 'og:locale', ogLocale);
    
    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', fullUrl);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', `${baseUrl}${ogImage}`);
    
    // Robots
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'googlebot', 'index, follow');
    
  }, [title, description, keywords, pathname, lang, ogImage, ogType, fullUrl]);

  return null;
}

export default SEOContent;
