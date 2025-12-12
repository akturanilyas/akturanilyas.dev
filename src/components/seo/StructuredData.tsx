import type { FC } from 'react';
import { ABOUT_LINKS } from '../../constants/link.constant';

export const StructuredData: FC = () => {
  const socialLinks = ABOUT_LINKS.map(link => link.link).filter(link => !link.startsWith('mailto:'));

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'İlyas AKTURAN',
    jobTitle: 'Software Engineer',
    url: 'https://akturanilyas.dev',
    image: 'https://akturanilyas.dev/assets/img/akturanilyas.png',
    email: 'akturanilyas@gmail.com',
    sameAs: socialLinks,
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'Flutter',
      'TailwindCSS',
      'TypeORM',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'akturanilyas.dev',
    url: 'https://akturanilyas.dev',
    author: {
      '@type': 'Person',
      name: 'İlyas AKTURAN',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

