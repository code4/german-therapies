import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords = "German therapies, anti-aging, regenerative medicine, Dr. Shams Scheik, Juventas Protocol, hormone therapy, IV therapy, medical treatments, wellness, healthcare",
  ogType = "website",
  ogImage = "/attached_assets/400dpiLogo_1757363177677.jpg",
  canonicalUrl,
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Open Graph tags
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:image', `${window.location.origin}${ogImage}`, 'property');
    setMetaTag('og:url', canonicalUrl || window.location.href, 'property');
    setMetaTag('og:site_name', 'German Therapies - Dr. Shams Scheik', 'property');
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${window.location.origin}${ogImage}`);
    
    // Additional meta tags
    setMetaTag('robots', 'index,follow');
    setMetaTag('author', 'German Therapies - Dr. Shams Scheik');
    setMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    // Canonical URL
    if (canonicalUrl) {
      setCanonical(canonicalUrl);
    }
    
    // Structured Data (JSON-LD)
    if (structuredData) {
      setStructuredData(structuredData);
    }
  }, [title, description, keywords, ogType, ogImage, canonicalUrl, structuredData]);
  
  return null;
}

function setMetaTag(name: string, content: string, attribute: string = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.getElementsByTagName('head')[0].appendChild(element);
  }
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = url;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = url;
    document.getElementsByTagName('head')[0].appendChild(element);
  }
}

function setStructuredData(data: object) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.getElementsByTagName('head')[0].appendChild(script);
}