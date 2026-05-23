import { Sparkles, Megaphone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import s1 from "@/assets/hero-slide-1.jpg";
import s2 from "@/assets/hero-slide-2.jpg";
import s3 from "@/assets/hero-slide-3.jpg";
import s4 from "@/assets/hero-slide-4.jpg";
import s5 from "@/assets/hero-slide-5.jpg";
import logo from "@/assets/logo.png";

const slides = [s1, s2, s3, s4, s5, s1, s2, s3];

export const HeroSlider = () => {
  const { lang, t } = useLang();

  const announceLinesVi = [
    "Khai giảng khóa hè tháng 6",
    "Khai trương chi nhánh mới",
    "Giảm lên đến 25% tổng khóa học",
    "Free tài liệu",
    "Nhanh tay đăng ký trước 15/6/2026",
  ];
  const announceLinesEn = [
    "Summer course opens this June",
    "New branch grand opening",
    "Up to 25% off the whole course",
    "Free learning materials",
    "Hurry — register before June 15, 2026",
  ];
  const announceLines = lang === "vi" ? announceLinesVi : announceLinesEn;

  // Circular layout
  const count = slides.length;
  const radius = 230; // px
  const items = slides.map((src, i) => {
    const angle = (360 / count) * i;
    return { src, angle };
  });

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="blob h-72 w-72 -top-10 -left-10 bg-secondary opacity-30 animate-blob-move" />
      <div className="blob h-80 w-80 top-40 -right-10 bg-accent opacity-30 animate-blob-move" style={{ animationDelay: "2s" }} />
      {/* Floating sparkles */}
      <span className="pointer-events-none absolute top-24 left-[12%] h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_18px_4px_hsl(var(--secondary))] animate-float" />
      <span className="pointer-events-none absolute top-32 right-[18%] h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_4px_hsl(var(--accent))] animate-float" style={{ animationDelay: "1.5s" }} />
      <span className="pointer-events-none absolute bottom-20 left-[20%] h-1 w-1 rounded-full bg-secondary shadow-[0_0_14px_3px_hsl(var(--secondary))] animate-float" style={{ animationDelay: "2.4s" }} />

      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Spinning wheel */}
          <div className="relative mx-auto flex items-center justify-center w-full max-w-[520px] aspect-square">
            {/* Glow ring */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-secondary/30 via-accent/20 to-secondary/30 blur-2xl animate-pulse" />
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-secondary/40" />

            {/* Rotating ring */}
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                animation: "spin-wheel 38s linear infinite",
                transformStyle: "preserve-3d",
              }}
            >
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%,-50%) rotate(${it.angle}deg) translateY(-${radius}px)`,
                  }}
                >
                  {/* Counter-rotate so images stay upright */}
                  <div
                    className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden shadow-[0_18px_40px_-12px_hsl(var(--secondary)/0.55)] ring-2 ring-secondary/40 bg-card"
                    style={{
                      animation: "spin-wheel-rev 38s linear infinite",
                    }}
                  >
                    <img src={it.src} alt={`Photo ${idx + 1}`} loading={idx < 2 ? "eager" : "lazy"} className="h-full w-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center hub */}
            <div className="relative z-10 grid place-items-center h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-card shadow-[0_0_60px_-10px_hsl(var(--secondary)/0.7)] ring-4 ring-secondary/60 animate-float">
              <img src={logo} alt="Ms Trinh English Center" className="h-20 w-20 object-contain" />
            </div>

            {/* Sparkles around */}
            <Sparkles className="absolute top-2 right-10 h-5 w-5 text-secondary animate-pulse" />
            <Sparkles className="absolute bottom-6 left-6 h-4 w-4 text-accent animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Announcement box */}
          <div className="relative">
            <div className="relative rounded-3xl border-2 border-secondary/60 bg-card/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_60px_-20px_hsl(var(--secondary)/0.55)] animate-float">
              <div aria-hidden className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-secondary/10 via-secondary/40 to-accent/30 blur-md opacity-70" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-glow">
                    <Megaphone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground/80">
                        {lang === "vi" ? "Thông báo mới" : "Latest news"}
                      </span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold mt-0.5">
                      {lang === "vi" ? "Ưu đãi đặc biệt 2026" : "Special offer 2026"}
                    </h2>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base font-semibold text-foreground">
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
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-105"
                >
                  <Sparkles className="h-4 w-4" />
                  {t("nav.enroll")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-wheel { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-wheel-rev { from { transform: rotate(0deg);} to { transform: rotate(-360deg);} }
      `}</style>
    </section>
  );
};

export default HeroSlider;