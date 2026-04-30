import { ArrowRight, PhoneCall, Star, Users, GraduationCap } from "lucide-react";
import heroImg from "@/assets/photo-w1.jpg";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 gradient-hero">
      <div className="blob h-72 w-72 -top-10 -left-10 bg-secondary animate-blob-move opacity-30" />
      <div className="blob h-80 w-80 top-40 -right-20 bg-accent animate-blob-move opacity-25" style={{ animationDelay: "2s" }} />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <img src={logo} alt="English Center" className="h-12 w-12 object-contain" />
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-semibold text-foreground">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              {t("hero.badge")}
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            {t("hero.title.main")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t("hero.title.accent")}</span>
              <span className="absolute inset-x-0 bottom-2 h-4 bg-secondary/60 -z-0 rounded" />
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              {t("hero.cta.courses")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-smooth hover:border-secondary"
            >
              <PhoneCall className="h-5 w-5" />
              {t("hero.cta.contact")}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { icon: Users, value: "300+", label: t("hero.stat.students") },
              { icon: GraduationCap, value: "3+", label: t("hero.stat.years") },
              { icon: Star, value: "4.9★", label: t("hero.stat.rating") },
            ].map((s, i) => (
              <div key={s.label} className="animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="font-display text-3xl font-extrabold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/40 rounded-[2.5rem] blur-2xl opacity-40" />
            <img
              src={heroImg}
              alt="Students at English Center"
              width={1536}
              height={1152}
              className="relative rounded-[2rem] shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -left-4 top-12 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card animate-float border border-border">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">{t("hero.float.ielts.label")}</div>
                <div className="font-display font-bold">{t("hero.float.ielts.value")}</div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card animate-float border border-border" style={{ animationDelay: "1.5s" }}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">{t("hero.float.parent.label")}</div>
                <div className="font-display font-bold">{t("hero.float.parent.value")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
