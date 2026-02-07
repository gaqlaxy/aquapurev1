import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  useEffect(() => {
    document.title = `${title} | AquaPure Systems`;
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
    const siteName = 'AquaPure Systems';
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

    // Scroll to top on route change (basic SEO/UX requirement)
    window.scrollTo(0, 0);
  }, [title, description, image]);

  return null;
};

export default SEO;
