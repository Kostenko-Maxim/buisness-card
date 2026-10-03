import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from './About';
import { useLang } from '../../hooks/useLang';

export default function TelegramChannel() {
  const { t } = useLang();

  return (
    <section id="telegram-channel" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <SectionHeading text={t('channel.heading')} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#0f0f1e] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left"
        >
          <div className="avatar-ring shrink-0">
            <img
              src="/telegram-channel.jpg"
              alt={t('channel.avatarAlt')}
              width={144}
              height={144}
              loading="lazy"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover block"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-mono text-[#06ffa5] inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faTelegram} />
              @madataengineer
            </p>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-100">
              {t('channel.title')}
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl">
              {t('channel.desc')}
            </p>
            <a
              href="https://t.me/madataengineer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg border border-[#06ffa5]/45 px-6 py-3 text-sm font-semibold text-[#06ffa5] transition-colors hover:bg-[#06ffa5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06ffa5]"
            >
              <FontAwesomeIcon icon={faTelegram} />
              {t('channel.cta')}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
