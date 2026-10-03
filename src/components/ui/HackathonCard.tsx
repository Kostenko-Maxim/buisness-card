import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faDownload, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../../hooks/useLang';

const TECHNOLOGIES = ['Python', 'Go', 'Dart', 'PostgreSQL', 'ClickHouse', 'OpenStreetMap'];

export default function HackathonCard() {
  const { t } = useLang();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-8 rounded-2xl border border-[#06ffa5]/20 bg-[#0f0f1e] p-6 sm:p-8"
    >
      <div className="flex items-center gap-3 text-[#06ffa5]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06ffa5]/10 text-xl">
          <FontAwesomeIcon icon={faRoute} />
        </div>
        <p className="font-mono text-xs sm:text-sm">{t('hackathon.event')}</p>
      </div>
      <h3 className="mt-5 text-xl sm:text-2xl font-bold text-slate-100">{t('hackathon.title')}</h3>
      <p className="mt-2 text-sm text-[#06ffa5]">{t('hackathon.role')}</p>
      <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">{t('hackathon.task')}</p>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-400">{t('hackathon.desc')}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {TECHNOLOGIES.map((technology) => (
          <span key={technology} className="rounded border border-[#06ffa5]/20 bg-[#06ffa5]/5 px-2 py-1 font-mono text-xs text-[#06ffa5]">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href="/presentations/lct-restoratory.pptx"
          download="LCT-RESToratory.pptx"
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#06ffa5] px-5 py-3 text-sm font-semibold text-[#08080f] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06ffa5]"
        >
          <FontAwesomeIcon icon={faDownload} />
          {t('hackathon.presentation')}
          <span className="text-xs font-normal">PPTX · 22 MB</span>
        </a>
        <a
          href="https://i.moscow/lct"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-300 transition-colors hover:border-[#06ffa5]/40 hover:text-[#06ffa5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06ffa5]"
        >
          {t('hackathon.website')}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
        </a>
      </div>
    </motion.article>
  );
}
