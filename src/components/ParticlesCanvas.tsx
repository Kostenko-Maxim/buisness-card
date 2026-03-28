import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  hue: number; // 0=mint, 1=pink
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      if (!canvas) return;
      const count = Math.floor((canvas.width * canvas.height) / 13000);
      particles = Array.from({ length: count }, () => ({
        x:     Math.random() * canvas!.width,
        y:     Math.random() * canvas!.height,
        vx:    (Math.random() - 0.5) * 0.4,
        vy:    (Math.random() - 0.5) * 0.4,
        r:     Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.55 + 0.1,
        hue:   Math.random(),  // blend between mint and pink
      }));
    }

    function particleColor(p: Particle, alpha: number): string {
      // Interpolate between mint (#06ffa5) and pink (#f72585) based on hue
      const r = Math.round(6   + (247 - 6)   * p.hue);
      const g = Math.round(255 + (37  - 255) * p.hue);
      const b = Math.round(165 + (133 - 165) * p.hue);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const a   = (1 - dist / 120) * 0.2;
            const midH = (particles[i].hue + particles[j].hue) / 2;
            const r = Math.round(6   + (247 - 6)   * midH);
            const g = Math.round(255 + (37  - 255) * midH);
            const b = Math.round(165 + (133 - 165) * midH);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
            ctx.lineWidth   = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor(p, p.alpha);
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas!.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      cancelAnimationFrame(animId);
      resize(); createParticles(); draw();
    };

    resize(); createParticles(); draw();
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
