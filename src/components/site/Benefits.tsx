import { BadgePercent, BookOpen, ClipboardCheck, GraduationCap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Benefits = () => {
  const { t } = useLang();
  const benefits = [
    { icon: BadgePercent, title: t("benefits.1.title"), desc: t("benefits.1.desc") },
    { icon: BookOpen, title: t("benefits.2.title"), desc: t("benefits.2.desc") },
    { icon: ClipboardCheck, title: t("benefits.3.title"), desc: t("benefits.3.desc") },
    { icon: GraduationCap, title: t("benefits.4.title"), desc: t("benefits.4.desc") },
  ];
  return (
    <section id="benefits" className="relative py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("benefits.kicker")}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("benefits.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("benefits.title.accent")}</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            {t("benefits.desc")}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
