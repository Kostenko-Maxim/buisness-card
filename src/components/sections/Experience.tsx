import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFilePdf, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from './About';
import { useLang } from '../../hooks/useLang';
import type { TranslationKey } from '../../i18n/translations';

interface ExpEntry {
  companyKey:  TranslationKey;
  positionKey: TranslationKey;
  periodKey:   TranslationKey;
  descKey:     TranslationKey;
  tagKeys:     TranslationKey[];
  accent:      'blue' | 'purple';
  current:     boolean;
  certificates?: { labelKey: TranslationKey; href: string }[];
}

const ENTRIES: ExpEntry[] = [
  {
    companyKey:  'exp1.company',
    positionKey: 'exp1.position',
    periodKey:   'exp1.period',
    descKey:     'exp1.desc',
    tagKeys:     ['exp1.tag1', 'exp1.tag2', 'exp1.tag3', 'exp1.tag4', 'exp1.tag5', 'exp1.tag6'],
    accent:      'blue',
    current:     true,
  },
  {
    companyKey:  'exp2.company',
    certificates: [
      { labelKey: 'exp.certificateRu', href: '/certificates/yandex-practicum-data-science-ru.pdf' },
      { labelKey: 'exp.certificateEn', href: '/certificates/yandex-practicum-data-science-en.pdf' },
    ],
    positionKey: 'exp2.position',
    periodKey:   'exp2.period',
    descKey:     'exp2.desc',
    tagKeys:     ['exp2.tag1', 'exp2.tag2', 'exp2.tag3', 'exp2.tag4', 'exp2.tag5', 'exp2.tag6'],
    accent:      'purple',
    current:     false,
  },
  {
    companyKey:  'exp3.company',
    positionKey: 'exp3.position',
    periodKey:   'exp3.period',
    descKey:     'exp3.desc',
    tagKeys:     ['exp3.tag1', 'exp3.tag2', 'exp3.tag3', 'exp3.tag4', 'exp3.tag5', 'exp3.tag6'],
    accent:      'blue',
    current:     true,
  },
];

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <SectionHeading text={t('nav.experience')} />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, rgba(6,255,165,0.5), rgba(247,37,133,0.5), transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {ENTRIES.map((entry, i) => {
              const color    = entry.accent === 'blue' ? '#00a6ff' : '#a855f7';
              const bgAlpha  = entry.accent === 'blue' ? 'rgba(0,166,255,0.1)' : 'rgba(168,85,247,0.1)';
              const borderH  = entry.accent === 'blue' ? 'rgba(0,166,255,0.4)' : 'rgba(168,85,247,0.4)';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-6 sm:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 mt-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{ background: bgAlpha, border: `1px solid ${color}` }}
                    >
                      <FontAwesomeIcon icon={faBriefcase} style={{ color, fontSize: '0.85rem' }} />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      borderColor: borderH,
                      boxShadow: `0 8px 32px ${bgAlpha}`,
                      transition: { duration: 0.25 },
                    }}
                    className="flex-1 rounded-2xl p-6 sm:p-7"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-slate-100">
                            {t(entry.companyKey)}
                          </h3>
                          {entry.current && (
                            <span
                              className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full"
                              style={{ background: 'rgba(6,255,165,0.12)', color: '#06ffa5', border: '1px solid rgba(6,255,165,0.35)' }}
                            >
                              сейчас
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium mt-0.5" style={{ color }}>
                          {t(entry.positionKey)}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 font-mono whitespace-nowrap flex-shrink-0">
                        {t(entry.periodKey)}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {t(entry.descKey)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {entry.tagKeys.map((tagKey) => (
                        <span
                          key={tagKey}
                          className="font-mono text-[0.68rem] px-2 py-[3px] rounded"
                          style={{
                            background: bgAlpha,
                            border: `1px solid ${color}33`,
                            color,
                          }}
                        >
                          {t(tagKey)}
                        </span>
                      ))}
                    </div>
                    {entry.certificates && (
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <h4 className="text-sm font-semibold text-slate-200 mb-3">
                          {t('exp.certificates')}
                        </h4>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                          {entry.certificates.map(({ labelKey, href }) => (
                            <a
                              key={href}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-3 rounded-lg border border-purple-500/30 bg-purple-500/5 px-4 py-3 text-sm text-purple-300 transition-colors hover:border-purple-400/60 hover:bg-purple-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
                            >
                              <FontAwesomeIcon icon={faFilePdf} />
                              <span>{t(labelKey)}</span>
                              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                            </a>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-slate-500">{t('exp.certificateHint')}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
