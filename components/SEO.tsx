import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, schema }) => {
  useEffect(() => {
    document.title = `${title} | Vishali Enterprises`;
    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
        document.head.appendChild(el);
      }
      if (attrs.content) {
        el.setAttribute('content', attrs.content);
      }
    };

    const canonicalUrl = window.location.href;
    const siteName = 'Vishali Enterprises';
    const descriptionContent = description ?? 'Premium RO Water Purifier sales and service provider.';

    const setCanonical = (href: string) => {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: descriptionContent });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: `${title} | ${siteName}` });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: descriptionContent });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    if (image) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    }
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: image ? 'summary_large_image' : 'summary',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: `${title} | ${siteName}` });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: descriptionContent });
    if (image) {
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    }
    setCanonical(canonicalUrl);

    // Structured Data (JSON-LD)
    if (schema) {
      let script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      const script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
      if (script) script.remove();
    }

    // Scroll to top on route change (basic SEO/UX requirement)
    window.scrollTo(0, 0);
  }, [title, description, image, schema]);

  return null;
};

export default SEO;
