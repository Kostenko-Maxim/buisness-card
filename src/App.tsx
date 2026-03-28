import { LangContext, useLangState } from './hooks/useLang';
import { useLang } from './hooks/useLang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Navbar     from './components/Navbar';
import Hero       from './components/sections/Hero';
import About      from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills     from './components/sections/Skills';
import Projects   from './components/sections/Projects';
import Contact    from './components/sections/Contact';
import { Analytics } from "@vercel/analytics/next"

function Divider() {
  return <div className="section-divider" />;
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm gradient-text font-bold">MK</span>
        <p className="text-slate-600 text-xs font-mono">{t('footer.copy')}</p>
        <div className="flex gap-5 text-slate-600 text-sm">
          <a href="https://github.com/Kostenko-Maxim"                     target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/maxim-kostenko-8a8b433a9/" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://t.me/maksimkostenk0"                           target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors"><FontAwesomeIcon icon={faTelegram} /></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const langState = useLangState();

  return (
    <LangContext.Provider value={langState}>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
