export const siteUrl = 'https://maxim-kostenko.ru';
export const pageUrl = (lang) => `${siteUrl}${lang === 'en' ? '/en/' : '/'}`;

const metadata = {
  ru: {
    name: 'Максим Костенко',
    title: 'Максим Костенко — Data Engineer | Python, SQL, ETL',
    description: 'Максим Костенко — инженер данных. ETL-пайплайны на Python и Apache Airflow, PostgreSQL, ClickHouse и OpenMetadata. Опыт работы, проекты и контакты.',
    locale: 'ru_RU',
  },
  en: {
    name: 'Maxim Kostenko',
    title: 'Maxim Kostenko — Data Engineer | Python, SQL, ETL',
    description: 'Maxim Kostenko, Data Engineer. Python and Apache Airflow ETL pipelines, PostgreSQL, ClickHouse and OpenMetadata. Explore work experience, projects and contacts.',
    locale: 'en_US',
  },
};

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function seoHead(lang) {
  const { name, title, description, locale } = metadata[lang];
  const url = pageUrl(lang);
  const personId = `${siteUrl}/#person`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': personId, name,
        alternateName: lang === 'ru' ? 'Maxim Kostenko' : 'Максим Костенко',
        url: `${siteUrl}/`, image: `${siteUrl}/avatar.png`, jobTitle: 'Data Engineer',
        knowsAbout: ['Python', 'SQL', 'ETL', 'Apache Airflow', 'PostgreSQL', 'ClickHouse', 'OpenMetadata', 'Data Science'],
        sameAs: ['https://github.com/Kostenko-Maxim', 'https://www.linkedin.com/in/maxim-kostenko-8a8b433a9/', 'https://t.me/maksimkostenk0'],
      },
      {
        '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`,
        name: 'Maxim Kostenko — Data Engineer', inLanguage: ['ru', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage', '@id': `${url}#webpage`, url, name: title, description,
        inLanguage: lang, mainEntity: { '@id': personId },
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  };
  return `
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <meta name="author" content="${escape(name)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="ru" href="${pageUrl('ru')}" />
    <link rel="alternate" hreflang="en" href="${pageUrl('en')}" />
    <link rel="alternate" hreflang="x-default" href="${pageUrl('ru')}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escape(name)} — Data Engineer" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${lang === 'ru' ? 'en_US' : 'ru_RU'}" />
    <meta property="og:image" content="${siteUrl}/avatar.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="333" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content="${escape(name)} — Data Engineer" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />
    <meta name="twitter:image" content="${siteUrl}/avatar.png" />
    <meta name="twitter:image:alt" content="${escape(name)} — Data Engineer" />
    <script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>
  `;
}
