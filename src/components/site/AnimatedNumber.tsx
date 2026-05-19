import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedNumber = ({ value, suffix = "", duration = 1800, className }: Props) => {
  const target = Math.max(0, Number.isFinite(value) ? Math.floor(value) : 0);
  const [n, setN] = useState(target === 0 ? 0 : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    started.current = false;
    setN(0);

    const runAnim = () => {
      if (started.current) return;
      started.current = true;
      const dur = Math.max(200, duration);
      const start = performance.now();
      const tick = (t: number) => {
        const elapsed = Math.max(0, t - start);
        const p = Math.min(1, elapsed / dur);
        const eased = Math.min(1, Math.max(0, 1 - Math.pow(1 - p, 3)));
        const next = Math.max(0, Math.min(target, Math.round(target * eased)));
        setN(next);
        if (p < 1) {
          rafId.current = requestAnimationFrame(tick);
        } else {
          setN(target);
        }
      };
      rafId.current = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      runAnim();
      return () => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) runAnim();
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.max(0, n)}
      {suffix}
    </span>
  );
};