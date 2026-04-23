import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso da animação (útil para listas em escada). */
  delayMs?: number;
  /** Margem extra do viewport antes de disparar. */
  rootMargin?: string;
};

export function Reveal({ children, className = "", delayMs = 0, rootMargin = "0px 0px -8% 0px" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.06 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  const style: CSSProperties | undefined =
    delayMs > 0 ? ({ ["--reveal-delay" as string]: `${delayMs}ms` } as CSSProperties) : undefined;

  const cls = ["scroll-reveal", visible ? "scroll-reveal-visible" : "", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  );
}
