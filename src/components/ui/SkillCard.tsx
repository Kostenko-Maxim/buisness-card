import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import ProgressBar from './ProgressBar';

interface Props {
  icon: IconProp;
  name: string;
  desc: string;
  progress: number;
  accent: 'blue' | 'purple';
  index: number;
}

// 'blue' = primary (mint), 'purple' = secondary (hot pink)
export default function SkillCard({ icon, name, desc, progress, accent, index }: Props) {
  const color       = accent === 'blue' ? '#06ffa5' : '#f72585';
  const bgAlpha     = accent === 'blue' ? 'rgba(6,255,165,0.1)'  : 'rgba(247,37,133,0.1)';
  const glowColor   = accent === 'blue' ? 'rgba(6,255,165,0.18)' : 'rgba(247,37,133,0.18)';
  const borderHover = accent === 'blue' ? 'rgba(6,255,165,0.45)' : 'rgba(247,37,133,0.45)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: `0 8px 36px ${glowColor}, 0 0 0 1px ${borderHover}`,
        borderColor: borderHover,
        transition: { duration: 0.22 },
      }}
      className="rounded-xl p-6 cursor-default"
      style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: bgAlpha }}
        >
          <FontAwesomeIcon icon={icon} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-100 truncate">{name}</div>
          <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
        </div>
        <span className="text-xs font-mono flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {progress}%
        </span>
      </div>
      <ProgressBar value={progress} />
    </motion.div>
  );
}
