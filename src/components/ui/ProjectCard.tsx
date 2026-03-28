import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export interface Project {
  icon: IconProp;
  title: string;
  desc: string;
  tags: string[];
  url: string;
  accent: 'blue' | 'purple';
}

interface Props extends Project { index: number; }

export default function ProjectCard({ icon, title, desc, tags, url, accent, index }: Props) {
  const color    = accent === 'blue' ? '#06ffa5' : '#f72585';
  const bgAlpha  = accent === 'blue' ? 'rgba(6,255,165,0.1)'  : 'rgba(247,37,133,0.1)';
  const glow     = accent === 'blue' ? 'rgba(6,255,165,0.15)' : 'rgba(247,37,133,0.15)';
  const borderH  = accent === 'blue' ? 'rgba(6,255,165,0.5)'  : 'rgba(247,37,133,0.5)';
  const tagBg    = accent === 'blue' ? 'rgba(6,255,165,0.08)' : 'rgba(247,37,133,0.08)';
  const tagBrd   = accent === 'blue' ? 'rgba(6,255,165,0.2)'  : 'rgba(247,37,133,0.2)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 60px ${glow}, 0 0 0 1px ${borderH}`,
        borderColor: borderH,
        transition: { duration: 0.28 },
      }}
      className="rounded-2xl p-7 flex flex-col"
      style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: bgAlpha }}
        >
          <FontAwesomeIcon icon={icon} style={{ color }} />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono transition-colors"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = color; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
          aria-label="GitHub repository"
        >
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.6rem]" />
        </a>
      </div>

      <h3 className="text-lg font-semibold text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{desc}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.68rem] px-2 py-[3px] rounded"
            style={{ background: tagBg, border: `1px solid ${tagBrd}`, color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
