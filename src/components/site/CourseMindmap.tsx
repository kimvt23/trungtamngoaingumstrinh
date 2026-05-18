import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const nodes = ["GT KIDS", "GT MẦM NON", "GT TEEN", "IELTS", "NGỮ PHÁP", "GT NGƯỜI LỚN"];

const addresses = [
  { label: "CN1", text: "492 Điện Biên Phủ, Long Toàn, Bà Rịa" },
  { label: "CN2", text: "218 Nguyễn Hữu Thọ, Bà Rịa" },
  { label: "CN3", text: "420 Trương Công Định, Vũng Tàu" },
];

export const CourseMindmap = () => {
  const { lang } = useLang();
  // 6 nodes around the center
  const radius = 220;
  const center = { x: 320, y: 240 };
  const positions = nodes.map((_, i) => {
    const angle = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
  });

  return (
    <section id="mindmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/5 to-background" />

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
                  <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1={center.x}
                  y1={center.y}
                  x2={p.x}
                  y2={p.y}
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  filter="url(#glow)"
                  style={{ animation: `dash 8s linear infinite`, animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </svg>

            {/* Center node */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-secondary text-secondary-foreground px-5 py-3 font-display font-extrabold text-center shadow-[0_0_40px_-5px_hsl(var(--secondary))] animate-float text-sm sm:text-base max-w-[200px]"
              style={{ left: `${(center.x / 640) * 100}%`, top: `${(center.y / 480) * 100}%` }}
            >
              Trung Tâm Ngoại Ngữ<br />Ms TRINH
            </div>

            {/* Surrounding nodes */}
            {positions.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl bg-card border-2 border-secondary/60 px-3 py-2 text-xs sm:text-sm font-bold shadow-[0_10px_30px_-10px_hsl(var(--secondary)/0.7)] hover:scale-110 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 animate-float"
                style={{
                  left: `${(p.x / 640) * 100}%`,
                  top: `${(p.y / 480) * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {nodes[i]}
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