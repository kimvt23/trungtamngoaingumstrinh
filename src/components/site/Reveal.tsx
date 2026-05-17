import { useEffect, useRef, useState, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "zoom" | "slide-right";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  delay?: number;
  children: ReactNode;
  sparkle?: boolean;
}

const variantClasses: Record<Variant, { hidden: string; shown: string }> = {
  "fade-up": { hidden: "opacity-0 translate-y-8", shown: "opacity-100 translate-y-0" },
  fade: { hidden: "opacity-0", shown: "opacity-100" },
  zoom: { hidden: "opacity-0 scale-95", shown: "opacity-100 scale-100" },
  "slide-right": { hidden: "opacity-0 -translate-x-8", shown: "opacity-100 translate-x-0" },
};

export const Reveal = ({ variant = "fade-up", delay = 0, className, children, sparkle = true, ...rest }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const [sparkleKey, setSparkleKey] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setShown((prev) => {
            if (e.isIntersecting && !prev) {
              setSparkleKey((k) => k + 1);
            }
            return e.isIntersecting;
          });
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const v = variantClasses[variant];
  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={cn(
        "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        shown ? v.shown : v.hidden,
        className
      )}
      {...rest}
    >
      {sparkle && shown && (
        <div
          key={sparkleKey}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden z-[1]"
        >
          <span className="reveal-streak absolute top-6 -left-20 h-px w-40 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80" />
          <span className="reveal-sparkle absolute top-10 left-[12%] h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_12px_2px_hsl(var(--secondary))]" style={{ animationDelay: "120ms" }} />
          <span className="reveal-sparkle absolute top-20 right-[18%] h-1 w-1 rounded-full bg-secondary shadow-[0_0_10px_2px_hsl(var(--secondary))]" style={{ animationDelay: "260ms" }} />
          <span className="reveal-sparkle absolute top-32 left-[60%] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_hsl(var(--accent))]" style={{ animationDelay: "420ms" }} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Reveal;