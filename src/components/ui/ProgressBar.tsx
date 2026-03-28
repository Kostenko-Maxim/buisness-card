import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  value: number; // 0–100
}

export default function ProgressBar({ value }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) setWidth(value);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="h-[6px] rounded-full overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.07)' }}
    >
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
}
