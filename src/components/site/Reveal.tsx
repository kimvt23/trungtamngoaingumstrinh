import { useEffect, useRef, useState, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "zoom" | "slide-right";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  delay?: number;
  children: ReactNode;
}

const variantClasses: Record<Variant, { hidden: string; shown: string }> = {
  "fade-up": { hidden: "opacity-0 translate-y-8", shown: "opacity-100 translate-y-0" },
  fade: { hidden: "opacity-0", shown: "opacity-100" },
  zoom: { hidden: "opacity-0 scale-95", shown: "opacity-100 scale-100" },
  "slide-right": { hidden: "opacity-0 -translate-x-8", shown: "opacity-100 translate-x-0" },
};

export const Reveal = ({ variant = "fade-up", delay = 0, className, children, ...rest }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

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
          setShown(e.isIntersecting);
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
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        shown ? v.shown : v.hidden,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;