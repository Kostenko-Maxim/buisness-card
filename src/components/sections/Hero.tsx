import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../../hooks/useLang';
import { scrollToSection } from '../../hooks/useSmoothScroll';
import ParticlesCanvas from '../ParticlesCanvas';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const { t, lang } = useLang();
  const typedRef  = useRef<HTMLSpanElement>(null);
  const typedInst = useRef<Typed | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    typedInst.current?.destroy();
    typedInst.current = new Typed(typedRef.current, {
      strings:        t('hero.typedStrings').split('|'),
      typeSpeed:      60,
      backSpeed:      35,
      backDelay:      1800,
      loop:           true,
      smartBackspace: true,
    });
    return () => { typedInst.current?.destroy(); };
  }, [lang]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <ParticlesCanvas />

      {/* Dramatic glow blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #06ffa5, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #f72585, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03] blur-[80px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, #f72585, #06ffa5, transparent 70%)' }} />

      <div className="relative z-10 max-w-container mx-auto px-6 pt-24 pb-32 text-center">

        <motion.div {...fade()} className="mb-8 flex justify-center">
          <div className="avatar-ring shadow-[0_0_40px_rgba(6,255,165,0.12)]">
            <img
              src="/avatar.png"
              alt={lang === 'ru' ? 'Максим Костенко' : 'Maxim Kostenko'}
              width={208}
              height={208}
              fetchPriority="high"
              className="h-44 w-44 sm:h-52 sm:w-52 rounded-full object-cover object-[50%_20%]"
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          {...fade(0.1)}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase"
          style={{ border: '1px solid rgba(6,255,165,0.35)', color: '#06ffa5', background: 'rgba(6,255,165,0.05)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#06ffa5' }} />
          {t('hero.available')}
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fade(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
        >
          {lang === 'ru' ? 'Максим' : 'Maxim'}{' '}
          <span className="gradient-text" style={{ filter: 'drop-shadow(0 0 30px rgba(6,255,165,0.3))' }}>
            {lang === 'ru' ? 'Костенко' : 'Kostenko'}
          </span>
        </motion.h1>

        {/* Typed role */}
        <motion.div
          {...fade(0.35)}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-slate-300 h-10 flex items-center justify-center gap-3"
        >
          <span className="font-mono text-lg" style={{ color: '#f72585' }}>&gt;</span>
          <span className="sr-only">Data Engineer · ETL Developer · Python Developer</span>
          <span ref={typedRef} aria-hidden="true">Data Engineer</span>
        </motion.div>

        {/* Description */}
        <motion.p {...fade(0.5)} className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.desc')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.65)} className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm text-[#08080f] transition-all"
            style={{ background: 'linear-gradient(135deg, #06ffa5, #f72585)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(6,255,165,0.4), 0 4px 16px rgba(247,37,133,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ''; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {t('hero.btnContact')}
          </a>
          <button
            onClick={() => scrollToSection('#projects')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all"
            style={{ border: '1px solid rgba(6,255,165,0.5)', color: '#06ffa5' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = 'rgba(6,255,165,0.08)';
              el.style.boxShadow    = '0 0 24px rgba(6,255,165,0.25)';
              el.style.transform    = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = '';
              el.style.boxShadow    = '';
              el.style.transform    = '';
            }}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            {t('hero.btnProjects')}
          </button>
        </motion.div>

      </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'rgba(6,255,165,0.4)' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">{t('hero.scroll')}</span>
          <div className="w-5 h-9 rounded-full border flex items-start justify-center pt-1"
               style={{ borderColor: 'rgba(6,255,165,0.3)' }}>
            <div className="w-1 h-2 rounded-full scroll-dot" style={{ background: 'rgba(6,255,165,0.6)' }} />
          </div>
        </motion.div>
    </section>
  );
}
