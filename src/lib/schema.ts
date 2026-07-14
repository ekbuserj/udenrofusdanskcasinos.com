import { SITE } from '../config/site';
import type { Casino } from '../config/casinos';

export interface Crumb {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

const abs = (path: string) => `${SITE.url}${path}`;

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const AUTHOR_ID = `${SITE.url}/#author`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.brand,
    url: `${SITE.url}/`,
    logo: { '@type': 'ImageObject', url: abs('/favicon.svg') },
    email: SITE.email,
    description:
      'Uafhængig dansk guide til casinoer uden ROFUS, udenlandske casinoer og spil uden MitID.',
    knowsAbout: [
      'Casino uden ROFUS',
      'Bedste udenlandske casino',
      'Udenlandsk casino',
      'Spil uden ROFUS',
      'Casino uden MitID',
      'Casino uden NemID',
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.brand,
    description: SITE.brandTagline,
    publisher: { '@id': ORG_ID },
    inLanguage: SITE.locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function authorSchema() {
  return {
    '@type': 'Person',
    '@id': AUTHOR_ID,
    name: SITE.author.name,
    jobTitle: SITE.author.role,
    description: SITE.author.bio,
    url: abs('/om-os/'),
    worksFor: { '@id': ORG_ID },
    knowsAbout: [...SITE.author.knowsAbout],
  };
}

export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  headline: string;
}) {
  return {
    '@type': 'Article',
    '@id': `${abs(opts.path)}#article`,
    headline: opts.headline,
    description: opts.description,
    inLanguage: SITE.locale,
    author: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    datePublished: SITE.datePublished,
    dateModified: SITE.dateModified,
    mainEntityOfPage: { '@id': `${abs(opts.path)}#webpage` },
  };
}

export function webPageSchema(opts: { path: string; title: string; description: string }) {
  return {
    '@type': 'WebPage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: SITE.locale,
    datePublished: SITE.datePublished,
    dateModified: SITE.dateModified,
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function casinoItemListSchema(casinos: Casino[], path: string, listName: string) {
  return {
    '@type': 'ItemList',
    name: listName,
    numberOfItems: casinos.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: casinos.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: `${abs(path)}#${c.slug}`,
    })),
  };
}

export function buildGraph(nodes: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
