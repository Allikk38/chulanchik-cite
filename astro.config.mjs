import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// =========================================================
// GitHub Pages, project-сайт: https://allikk38.github.io/chulanchik-cite/
// При смене репозитория/домена — обновить здесь и в public/robots.txt
// =========================================================
export const SITE_URL  = 'https://allikk38.github.io';
export const SITE_BASE = '/chulanchik-cite';

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['cyrillic', 'latin'],
        fallbacks: ['system-ui', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Lobster',
        cssVariable: '--font-lobster',
        weights: [400],
        styles: ['normal'],
        subsets: ['cyrillic', 'latin'],
        fallbacks: ['cursive'],
      },
    ],
  },
});