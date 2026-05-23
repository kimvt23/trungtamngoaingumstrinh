import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { MindmapLines, PositionType } from "../atomic/molecules/MindmapLines";

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
  const center: PositionType = { x: 320, y: 240 };
  const positions: PositionType[] = nodes.map((_, i) => {
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
          <div className="relative flex items-center justify-center mx-auto max-w-3xl aspect-[4/3] sm:aspect-[640/480]">
            <MindmapLines center={center} positions={positions}/>

            {/* Center node */}
            <div
              className="rounded-[10px] md:rounded-md bg-secondary text-secondary-foreground px-2 md:px-5 py-1 md:py-3 font-display font-extrabold text-center shadow-[0_0_40px_-5px_hsl(var(--secondary))] animate-float text-[10px] md:text-sm max-w-[200px]"
            >
              Trung Tâm Ngoại Ngữ<br />Ms TRINH
            </div>

            {/* Surrounding nodes */}
            {positions.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-[10px] md:rounded-md bg-card border-2 border-secondary/60 px-3 py-2 text-[10px] md:text-sm font-bold shadow-[0_10px_30px_-10px_hsl(var(--secondary)/0.7)] hover:scale-110 hover:bg-secondary hover:text-secondary-foreground transition-all duration-1200 animate-float"
                style={{
                  left: `${(p.x / 640) * 88}%`,
                  top: `${(p.y / 480) * 98}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {nodes[i]}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Address table */}
        {/* <Reveal variant="fade-up">
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
        </Reveal> */}
      </div>

      <style>{`@keyframes dash { to { stroke-dashoffset: -100; } }`}</style>
    </section>
  );
};

export default CourseMindmap;