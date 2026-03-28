import { motion } from 'framer-motion';
import {
  faPython, faGitAlt, faDocker,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faTableCells, faBrain,
  faBolt, faWind, faStream,
} from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import SkillCard from '../ui/SkillCard';
import { SectionHeading } from './About';
import { useLang } from '../../hooks/useLang';
import type { TranslationKey } from '../../i18n/translations';

interface SkillDef {
  icon: IconProp;
  name: string;
  descKey: TranslationKey;
  progress: number;
  accent: 'blue' | 'purple';
}

const SKILLS: SkillDef[] = [
  { icon: faPython,     name: 'Python',                  descKey: 'skill.python',  progress: 92, accent: 'blue'   },
  { icon: faDatabase,   name: 'SQL / PostgreSQL / CH',   descKey: 'skill.sql',     progress: 85, accent: 'purple' },
  { icon: faWind,       name: 'Apache Airflow',          descKey: 'skill.airflow', progress: 82, accent: 'blue'   },
  { icon: faBolt,       name: 'Apache Spark / Hadoop',   descKey: 'skill.spark',   progress: 68, accent: 'purple' },
  { icon: faDocker,     name: 'Docker / Linux',          descKey: 'skill.docker',  progress: 72, accent: 'blue'   },
  { icon: faStream,     name: 'Apache Kafka',            descKey: 'skill.kafka',   progress: 62, accent: 'purple' },
  { icon: faBrain,      name: 'ML / PyTorch / TF',       descKey: 'skill.ml',      progress: 78, accent: 'blue'   },
  { icon: faTableCells, name: 'Pandas / NumPy',          descKey: 'skill.pandas',  progress: 90, accent: 'purple' },
  { icon: faGitAlt,     name: 'Git / OpenMetadata',      descKey: 'skill.openmd',  progress: 80, accent: 'blue'   },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <SectionHeading text={t('nav.skills')} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-slate-500 text-sm mt-4 mb-14"
        >
          {t('skills.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              desc={t(skill.descKey)}
              progress={skill.progress}
              accent={skill.accent}
              index={i}
            />
          ))}
        </div>

        {/* Extra tags row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {[
            'ETL', 'ClickHouse', 'SAP HANA', 'OpenMetadata',
            'Visiology', 'Loginom', 'A/B тесты', 'DWH',
            'Apache Parquet', 'TensorFlow', 'PyTorch', 'Hadoop',
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.7rem] px-3 py-1 rounded-full transition-all hover:scale-105"
              style={{
                background: 'rgba(247,37,133,0.07)',
                border: '1px solid rgba(247,37,133,0.2)',
                color: '#f72585',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
