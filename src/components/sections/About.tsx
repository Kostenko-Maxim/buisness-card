import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useLang } from '../../hooks/useLang';
import type { TranslationKey } from '../../i18n/translations';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const STATS: { valueKey: TranslationKey; labelKey: TranslationKey }[] = [
  { valueKey: 'about.stat1', labelKey: 'about.stat1label' },
  { valueKey: 'about.stat2', labelKey: 'about.stat2label' },
  { valueKey: 'about.stat3', labelKey: 'about.stat3label' },
  { valueKey: 'about.stat4', labelKey: 'about.stat4label' },
];

const SOCIALS = [
  { icon: faGithub,    href: 'https://github.com/Kostenko-Maxim',                       label: 'GitHub'   },
  { icon: faLinkedinIn,href: 'https://www.linkedin.com/in/maxim-kostenko-8a8b433a9/',  label: 'LinkedIn' },
  { icon: faTelegram,  href: 'https://t.me/maksimkostenk0',                             label: 'Telegram' },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <SectionHeading text={t('nav.about')} />

        <div className="flex flex-col lg:flex-row items-center gap-14 mt-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-5"
          >
            <div className="avatar-ring">
              <img
                src="/avatar.png"
                alt="Максим Костенко"
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover block"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            <div className="flex gap-4">
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-slate-400 hover:text-white text-lg transition-all hover:-translate-y-1"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#06ffa5';
                    el.style.boxShadow   = '0 0 20px rgba(6,255,165,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '';
                    el.style.boxShadow   = '';
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Text + stats */}
          <div className="flex-1">
            <motion.p {...fadeUp(0)} className="text-slate-300 leading-relaxed text-base sm:text-lg mb-5">
              {t('about.p1')}
            </motion.p>
            <motion.p {...fadeUp(0.12)} className="text-slate-400 leading-relaxed text-base mb-8">
              {t('about.p2')}
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map(({ valueKey, labelKey }, i) => (
                <motion.div
                  key={labelKey}
                  {...fadeUp(0.08 * i)}
                  whileHover={{ y: -3, borderColor: 'rgba(168,85,247,0.4)', transition: { duration: 0.2 } }}
                  className="rounded-xl p-4 text-center transition-colors"
                  style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="text-2xl font-bold gradient-text">{t(valueKey)}</div>
                  <div className="text-xs text-slate-500 mt-1">{t(labelKey)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ text }: { text: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-3xl sm:text-4xl font-bold text-center after:block after:w-[60px] after:h-[3px] after:mx-auto after:mt-3 after:rounded-full"
      style={{
        // The pseudo-element gradient is set via a workaround with a box-shadow on an inline element below
      }}
    >
      {text}
      <span
        className="block w-[60px] h-[3px] mx-auto mt-3 rounded-full"
        style={{ background: 'linear-gradient(90deg,#00a6ff,#a855f7)' }}
        aria-hidden
      />
    </motion.h2>
  );
}
