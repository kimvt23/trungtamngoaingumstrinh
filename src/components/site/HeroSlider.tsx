import { useEffect, useState } from "react";
import { Sparkles, Megaphone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import s1 from "@/assets/hero-slide-1.jpg";
import s2 from "@/assets/hero-slide-2.jpg";
import s3 from "@/assets/hero-slide-3.jpg";
import s4 from "@/assets/hero-slide-4.jpg";
import s5 from "@/assets/hero-slide-5.jpg";

const slides = [s1, s2, s3, s4, s5];

export const HeroSlider = () => {
  const { lang } = useLang();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  const announceLines = [
    "Khai giảng khóa hè tháng 6",
    "Khai trương chi nhánh mới",
    "Giảm lên đến 25% tổng khóa học",
    "Free tài liệu",
    "Nhanh tay đăng ký trước 15/6/2026",
  ];

  return (
    <section className="relative pt-24 pb-10 lg:pt-28">
      <div className="container-x">
        <div className="relative mx-auto max-w-6xl">
          {/* Slider */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-secondary/30 aspect-[16/9] sm:aspect-[21/9] bg-muted">
            {slides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`English Center ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
            {/* Glow overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -inset-1 rounded-[2rem] ring-2 ring-secondary/40 shadow-[0_0_60px_-10px_hsl(var(--secondary)/0.55)]" />
            {/* Floating particles */}
            <span className="pointer-events-none absolute top-6 left-10 h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_4px_hsl(var(--secondary))] animate-float" />
            <span className="pointer-events-none absolute bottom-10 right-16 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_4px_hsl(var(--accent))] animate-float" style={{ animationDelay: "1.2s" }} />
            <span className="pointer-events-none absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-secondary shadow-[0_0_14px_3px_hsl(var(--secondary))] animate-float" style={{ animationDelay: "2.4s" }} />

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? "w-8 bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" : "w-2 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Announcement box overlapping bottom */}
          <div className="relative -mt-10 sm:-mt-14 mx-auto max-w-3xl px-4">
            <div className="group relative rounded-2xl border-2 border-secondary/60 bg-card/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_60px_-20px_hsl(var(--secondary)/0.55)] animate-float">
              <div aria-hidden className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 blur-md opacity-70" />
              <div className="relative flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-glow">
                  <Megaphone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground/80">
                      {lang === "vi" ? "Thông báo mới" : "Latest news"}
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm sm:text-base font-semibold text-foreground">
                    {announceLines.map((l, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 animate-fade-in"
                        style={{ animationDelay: `${idx * 120}ms`, animationFillMode: "both" }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;