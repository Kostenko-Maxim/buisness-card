import { motion } from 'framer-motion';
import {
  faGamepad, faEarthAmericas, faUsersGear, faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCard, { type Project } from '../ui/ProjectCard';
import { SectionHeading } from './About';
import { useLang } from '../../hooks/useLang';

export default function Projects() {
  const { t } = useLang();

  const PROJECTS: Project[] = [
    {
      icon:   faGamepad,
      title:  t('proj1.title'),
      desc:   t('proj1.desc'),
      tags:   ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
      url:    'https://github.com/Kostenko-Maxim/Games_EDA',
      accent: 'blue',
    },
    {
      icon:   faEarthAmericas,
      title:  t('proj2.title'),
      desc:   t('proj2.desc'),
      tags:   ['Python', 'NumPy', 'Seaborn', 'SciPy', 'Geo-анализ'],
      url:    'https://github.com/Kostenko-Maxim/Oil_drilling_locations',
      accent: 'purple',
    },
    {
      icon:   faUsersGear,
      title:  t('proj3.title'),
      desc:   t('proj3.desc'),
      tags:   ['Python', 'scikit-learn', 'Pandas', 'ML', 'Classification'],
      url:    'https://github.com/Kostenko-Maxim/HR_analysis',
      accent: 'blue',
    },
    {
      icon:   faChartBar,
      title:  t('proj4.title'),
      desc:   t('proj4.desc'),
      tags:   ['Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Visualization'],
      url:    'https://github.com/Kostenko-Maxim/Online-Sales-Visualization',
      accent: 'purple',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <SectionHeading text={t('nav.projects')} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-slate-500 text-sm mt-4 mb-14"
        >
          {t('projects.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kostenko-Maxim"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(6,255,165,0.45)', color: '#06ffa5' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = 'rgba(6,255,165,0.08)';
              el.style.boxShadow   = '0 0 28px rgba(6,255,165,0.25)';
              el.style.transform   = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = '';
              el.style.boxShadow   = '';
              el.style.transform   = '';
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
            {t('projects.more')}
            <span className="text-xs">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
