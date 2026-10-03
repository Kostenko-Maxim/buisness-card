import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SectionHeading } from './About';
import { useLang } from '../../hooks/useLang';
import ContactForm from '../ui/ContactForm';

interface ContactLink {
  icon: IconProp;
  label: string;
  href: string;
}

const LINKS: ContactLink[] = [
  { icon: faGithub,     label: 'GitHub',   href: 'https://github.com/Kostenko-Maxim'                      },
  { icon: faLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxim-kostenko-8a8b433a9/'  },
  { icon: faTelegram,   label: 'Telegram', href: 'https://t.me/maksimkostenk0'                            },
  { icon: faEnvelope,   label: 'Email',    href: 'mailto:maxim.kostenkoo@yandex.ru'                        },
];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading text={t('nav.contact')} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 mt-4 mb-12"
        >
          {t('contact.subtitle')}
        </motion.p>

        <ContactForm />

        {/* Contact cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {LINKS.map(({ icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.34, 1.3, 0.64, 1] }}
              whileHover={{
                y: -4,
                borderColor: '#06ffa5',
                boxShadow: '0 0 24px rgba(6,255,165,0.3)',
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl p-5 flex flex-col items-center gap-3 group"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-slate-400 group-hover:text-white transition-colors text-xl"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <FontAwesomeIcon icon={icon} />
              </div>
              <span className="text-xs text-slate-500 font-mono group-hover:text-slate-300 transition-colors">
                {label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Email direct link */}
        <motion.a
          href="mailto:maxim.kostenkoo@yandex.ru"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-500 hover:text-slate-200 transition-colors text-sm font-mono border-b border-slate-700 hover:border-slate-400 pb-1"
        >
          maxim.kostenkoo@yandex.ru
        </motion.a>
      </div>
    </section>
  );
}
