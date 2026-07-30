import { useRef, type ComponentType } from "react";

interface AreaCardProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  text: string;
}

export function AreaCard({ icon: Icon, title, text }: AreaCardProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      className="area-card glass-card group relative h-full overflow-hidden rounded-md p-6 sm:p-7"
    >
      <span className="area-card__glow pointer-events-none absolute inset-0" />
      <span className="area-card__icon relative flex h-11 w-11 items-center justify-center rounded-md bg-[var(--gradient-gold)]">
        <Icon className="h-5 w-5 text-background" strokeWidth={1.8} />
      </span>
      <h3 className="area-card__title relative mt-6 text-base font-semibold">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </article>
  );
}
