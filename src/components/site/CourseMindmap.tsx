import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Sparkles, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const courseNodes = [
  { vi: "GT KIDS", en: "KIDS COMM", color: "from-pink-400 to-rose-500", glow: "rgba(244,114,182,0.55)" },
  { vi: "GT MẦM NON", en: "PRESCHOOL COMM", color: "from-amber-300 to-yellow-500", glow: "rgba(250,204,21,0.6)" },
  { vi: "GT TEEN", en: "TEEN COMM", color: "from-sky-400 to-cyan-500", glow: "rgba(56,189,248,0.55)" },
  { vi: "IELTS", en: "IELTS", color: "from-violet-400 to-purple-600", glow: "rgba(167,139,250,0.55)" },
  { vi: "NGỮ PHÁP", en: "GRAMMAR", color: "from-emerald-400 to-green-600", glow: "rgba(52,211,153,0.55)" },
  { vi: "GT NGƯỜI LỚN", en: "ADULT COMM", color: "from-orange-400 to-red-500", glow: "rgba(251,146,60,0.55)" },
];

const addresses = [
  { label: "CN1", text: "492 Điện Biên Phủ, Long Toàn, Bà Rịa" },
  { label: "CN2", text: "218 Nguyễn Hữu Thọ, Bà Rịa" },
  { label: "CN3", text: "420 Trương Công Định, Vũng Tàu" },
];

// Cloud bubble shape using SVG mask
const CloudShape = ({ className = "", color }: { className?: string; color: string }) => (
  <svg viewBox="0 0 200 130" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id={`cg-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    <path
      d="M50 100 Q20 100 20 75 Q5 70 15 50 Q15 30 40 32 Q45 10 75 18 Q90 0 115 12 Q140 0 155 25 Q185 25 185 55 Q200 70 180 90 Q180 110 150 105 Q130 125 100 110 Q70 125 50 100 Z"
      fill={`url(#cg-${color})`}
    />
  </svg>
);

export const CourseMindmap = () => {
  const { lang } = useLang();
  const radius = 220;
  const center = { x: 320, y: 240 };
  const positions = courseNodes.map((_, i) => {
    const angle = (Math.PI * 2 * i) / courseNodes.length - Math.PI / 2;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
  });

  return (
    <section id="mindmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="blob h-72 w-72 top-10 -left-10 bg-secondary opacity-25" />
      <div className="blob h-72 w-72 bottom-10 -right-10 bg-accent opacity-30" />
      {/* Floating decorations */}
      <Star className="absolute top-20 right-[12%] h-4 w-4 text-secondary animate-float" />
      <Sparkles className="absolute bottom-32 left-[10%] h-5 w-5 text-accent animate-float" style={{ animationDelay: "1.2s" }} />

      <div className="container-x">
        <Reveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground">
              <Sparkles className="h-3.5 w-3.5" /> {lang === "vi" ? "Hệ sinh thái khóa học" : "Course ecosystem"}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              {lang === "vi" ? "Bản đồ chương trình học" : "Programs mindmap"}
            </h2>
          </div>
        </Reveal>

        <Reveal variant="zoom">
          <div className="relative mx-auto max-w-3xl aspect-[4/3] sm:aspect-[640/480]">
            <svg viewBox="0 0 640 480" className="w-full h-full">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(47 96% 55%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {positions.map((p, i) => (
                <path
                  key={i}
                  d={`M ${center.x} ${center.y} Q ${(center.x + p.x) / 2 + (i % 2 ? 30 : -30)} ${(center.y + p.y) / 2 + (i % 2 ? -30 : 30)} ${p.x} ${p.y}`}
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  style={{ animation: `dash 6s linear infinite`, animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </svg>

            {/* Center cloud */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
              style={{ left: `${(center.x / 640) * 100}%`, top: `${(center.y / 480) * 100}%`, width: "44%", maxWidth: 260 }}
            >
              <div className="relative aspect-[200/130]">
                <CloudShape color="center" className="absolute inset-0 w-full h-full drop-shadow-[0_10px_30px_hsl(var(--secondary)/0.7)]" />
                <div className="absolute inset-0 grid place-items-center text-center px-6">
                  <div>
                    <Sparkles className="h-4 w-4 mx-auto text-secondary mb-1" />
                    <div className="font-display text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                      {lang === "vi" ? "Trung tâm" : "Center"}
                    </div>
                    <div className="font-display text-sm sm:text-lg font-extrabold leading-tight">
                      Ms TRINH
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-foreground/70">
                      English Center
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course cloud nodes */}
            {positions.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float group cursor-pointer"
                style={{
                  left: `${(p.x / 640) * 100}%`,
                  top: `${(p.y / 480) * 100}%`,
                  width: "28%",
                  maxWidth: 170,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <div
                  className="relative aspect-[200/130] transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 12px 24px ${courseNodes[i].glow})` }}
                >
                  <CloudShape color={`n${i}`} className="absolute inset-0 w-full h-full" />
                  <div className={`absolute inset-[18%] rounded-full bg-gradient-to-br ${courseNodes[i].color} opacity-90`} />
                  <div className="absolute inset-0 grid place-items-center text-center px-2">
                    <span className="font-display text-[11px] sm:text-sm font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] leading-tight">
                      {courseNodes[i][lang]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Address table */}
        <Reveal variant="fade-up">
          <div className="mt-16 max-w-4xl mx-auto rounded-3xl border-2 border-secondary/40 bg-card p-6 sm:p-8 shadow-[0_24px_60px_-24px_hsl(var(--secondary)/0.45)]">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-center mb-6">
              {lang === "vi" ? "Hệ thống cơ sở" : "Our branches"}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {addresses.map((a) => (
                <div
                  key={a.label}
                  className="group relative rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_16px_40px_-16px_hsl(var(--secondary)/0.6)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-glow">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="font-display font-extrabold text-lg">{a.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`@keyframes dash { to { stroke-dashoffset: -100; } }`}</style>
    </section>
  );
};

export default CourseMindmap;