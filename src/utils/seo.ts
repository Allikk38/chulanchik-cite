import { site } from '@/content/site';

// =========================================================
// base из astro.config.mjs попадает в import.meta.env.BASE_URL
// в виде '/chulanchik-cite/' (со слэшем на конце). Нормализуем.
// =========================================================
const RAW_BASE = import.meta.env.BASE_URL ?? '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/**
 * Приклеивает base к абсолютному пути.
 *   withBase('/about')              → '/chulanchik-cite/about'
 *   withBase('/')                   → '/chulanchik-cite/'
 *   withBase('#anchor')             → '#anchor'         (не трогаем)
 *   withBase('https://example.com') → 'https://example.com' (не трогаем)
 *   withBase('mailto:hi@x.ru')      → 'mailto:hi@x.ru'  (не трогаем)
 */
export function withBase(path: string): string {
  if (!path) return BASE || '/';
  if (/^[a-z]+:/i.test(path)) return path;
  if (path.startsWith('#')) return path;
  if (!path.startsWith('/')) return path;
  if (path === '/') return BASE ? `${BASE}/` : '/';
  return `${BASE}${path}`;
}

export interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
}

const DEFAULT_IMAGE = '/og-image.png';

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return `${site.name} — ${site.tagline}`;
  return `${pageTitle} — ${site.name}`;
}

export function buildDescription(desc?: string): string {
  return desc ?? site.description;
}

export function absoluteUrl(path: string): string {
  if (/^https?:/i.test(path)) return path;
  const base = site.url.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function buildOgImage(image?: string): string {
  return absoluteUrl(withBase(image ?? DEFAULT_IMAGE));
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressCountry: 'RU',
    },
    openingHours: site.hours,
  };
}