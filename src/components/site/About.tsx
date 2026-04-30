import { Heart, Globe2, Target } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const About = () => {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("about.kicker")}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("about.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("about.title.accent")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("about.desc")}
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: t("about.tag.caring") },
              { icon: Target, label: t("about.tag.results") },
              { icon: Globe2, label: t("about.tag.global") },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm">{it.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl bg-secondary p-6 text-secondary-foreground shadow-glow">
                <div className="font-display text-5xl font-black">3+</div>
                <div className="mt-2 text-sm font-medium opacity-90">{t("about.stat.years")}</div>
              </div>
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black">3</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{t("about.stat.branches")}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black">300+</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{t("about.stat.students")}</div>
              </div>
              <div className="rounded-3xl bg-secondary/70 p-6 text-secondary-foreground shadow-soft">
                <div className="font-display text-5xl font-black">98%</div>
                <div className="mt-2 text-sm font-medium opacity-90">{t("about.stat.parents")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
