import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { seoHead } from './scripts/seo.mjs';

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-seo',
    transformIndexHtml(html, context) {
      const lang = context.originalUrl?.startsWith('/en') ? 'en' : 'ru';
      return html.replace('<html lang="ru">', `<html lang="${lang}">`)
        .replace('<!-- seo-head -->', `<!-- seo:start -->${seoHead(lang)}<!-- seo:end -->`);
    },
  }],
});
