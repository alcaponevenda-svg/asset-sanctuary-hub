import { useEffect, useRef, useState } from "react";

/** Brilho radial azul muito discreto que acompanha o cursor na seção pai. */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;
    let targetX = 50;
    let targetY = 50;
    let x = 50;
    let y = 50;

    const tick = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.setProperty("--gx", `${x}%`);
      el.style.setProperty("--gy", `${y}%`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="about-mouse-glow" aria-hidden="true" />;
}

const PARTICLES = [
  { left: 8, top: 18, size: 3, delay: 0, duration: 26 },
  { left: 21, top: 62, size: 2, delay: 4, duration: 32 },
  { left: 34, top: 30, size: 2.5, delay: 8, duration: 29 },
  { left: 44, top: 78, size: 2, delay: 2, duration: 34 },
  { left: 56, top: 14, size: 3, delay: 6, duration: 28 },
  { left: 63, top: 52, size: 2, delay: 10, duration: 36 },
  { left: 72, top: 26, size: 2.5, delay: 3, duration: 30 },
  { left: 80, top: 70, size: 2, delay: 7, duration: 33 },
  { left: 88, top: 40, size: 3, delay: 1, duration: 27 },
  { left: 94, top: 84, size: 2, delay: 9, duration: 35 },
];

/** Partículas de poeira azul, quase imperceptíveis. */
export function DustParticles() {
  return (
    <div className="about-particles" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="about-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/** Card de estatística com contador animado (1.5s, ease-out) e hover premium. */
export function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const prefix = value.replace(/[\d]/g, "");
  const target = Number(value.replace(/\D/g, "")) || 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className={`stat-card rounded-md border border-border bg-card px-2 py-5 text-center sm:px-4 sm:py-6 ${
        inView ? "is-visible" : ""
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <p className="stat-card__value text-xl font-semibold text-blue sm:text-3xl">
        {prefix}
        {count}
      </p>
      <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
        {label}
      </p>
    </div>
  );
}

/** Título animado palavra por palavra. */
export function AnimatedWords({
  text,
  startDelay = 0,
  className = "",
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`about-word ${className}`}
          style={{ animationDelay: `${startDelay + i * 60}ms` }}
        >
          {word}
          {i < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}
