import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let scrollController: Lenis | null = null;

export function scrollToSection(selector: string) {
  const target = document.querySelector<HTMLElement>(selector);
  if (!target) return;

  if (scrollController) {
    scrollController.scrollTo(target, { offset: selector === '#hero' ? 0 : -80 });
  } else {
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const configure = () => {
      scrollController?.destroy();
      scrollController = reducedMotion.matches ? null : new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.14,
        anchors: { offset: -80 },
      });
    };

    configure();
    reducedMotion.addEventListener('change', configure);
    return () => {
      reducedMotion.removeEventListener('change', configure);
      scrollController?.destroy();
      scrollController = null;
    };
  }, []);
}
