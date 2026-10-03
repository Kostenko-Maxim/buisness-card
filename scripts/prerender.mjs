import { build } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { pageUrl, seoHead, siteUrl } from './seo.mjs';

// Keep the server bundle in an ignored cache, outside the published dist directory.
const serverDir = resolve('node_modules/.cache/portfolio-seo');
await build({
  build: {
    ssr: 'src/entry-server.tsx', outDir: serverDir, emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});
const { render } = await import(pathToFileURL(resolve(serverDir, 'entry-server.mjs')).href);
const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>') || !template.includes('<!-- seo:start -->')) {
  throw new Error('Prerender template is missing the root or SEO markers.');
}

for (const lang of ['ru', 'en']) {
  const html = template
    .replace('<html lang="ru">', `<html lang="${lang}">`)
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, () => `<!-- seo:start -->${seoHead(lang)}<!-- seo:end -->`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(lang)}</div>`);
  const directory = lang === 'en' ? 'dist/en' : 'dist';
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}

const alternateLinks = ['ru', 'en'].map((lang) =>
  `    <xhtml:link rel="alternate" hreflang="${lang}" href="${pageUrl(lang)}" />`
).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['ru', 'en'].map((lang) => `  <url>
    <loc>${pageUrl(lang)}</loc>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('ru')}" />
  </url>`).join('\n')}
</urlset>
`;
await writeFile('dist/sitemap.xml', sitemap);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log('SEO: prerendered Russian and English pages, sitemap.xml and robots.txt.');
