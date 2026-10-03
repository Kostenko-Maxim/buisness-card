import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { scrollToSection } from '../hooks/useSmoothScroll';
import type { TranslationKey } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

const NAV_LINKS: { key: TranslationKey; href: string }[] = [
  { key: 'nav.about',      href: '#about'      },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills',     href: '#skills'     },
  { key: 'nav.projects',   href: '#projects'   },
  { key: 'nav.contact',    href: '#contact'    },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled,    setScrolled]    = useState(false);
  const [hidden,      setHidden]      = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [lastY,       setLastY]       = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 50);
    setHidden(y > lastY && y > 120);
    setLastY(y);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobile = () => setMobileOpen(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobile();
    scrollToSection(href);
  };

  return (
    <motion.nav
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-400 ${
        scrolled ? 'bg-[rgba(15,23,42,0.9)] backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => smoothScroll(e, '#hero')}
          className="font-mono text-lg font-bold gradient-text select-none"
        >
          MK
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={(e) => smoothScroll(e, href)}
              className="nav-link text-sm font-medium"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + burger */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none gap-[5px]"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-[22px] h-[2px] bg-slate-100 origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-[22px] h-[2px] bg-slate-100"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-[22px] h-[2px] bg-slate-100 origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[rgba(15,23,42,0.97)] backdrop-blur-xl"
          >
            <div className="max-w-container mx-auto py-4 px-2 flex flex-col gap-1">
              {NAV_LINKS.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={(e) => smoothScroll(e, href)}
                  className="py-3 px-4 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1">
      {(['ru', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`font-mono text-[0.72rem] px-[10px] py-1 rounded cursor-pointer transition-all ${
            lang === l
              ? 'text-white'
              : 'text-slate-600 border border-[#334155] hover:text-slate-400 hover:border-slate-500'
          }`}
          style={
            lang === l
              ? { background: 'linear-gradient(135deg,#06ffa5,#f72585)', color: '#08080f' }
              : {}
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
