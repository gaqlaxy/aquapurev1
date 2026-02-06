import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | AquaPure Systems`;
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    // Scroll to top on route change (basic SEO/UX requirement)
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};

export default SEO;
