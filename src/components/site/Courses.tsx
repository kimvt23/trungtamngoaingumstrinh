import { Trophy, Mic, Award, Baby, Smile, Users, ArrowRight, Clock, UserRound } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Courses = () => {
  const { t } = useLang();
  const icons = [Trophy, Mic, Award, Baby, Smile, Users];
  const courses = [1, 2, 3, 4, 5, 6].map((n, i) => ({
    icon: icons[i],
    title: t(`courses.${n}.title`),
    tag: t(`courses.${n}.tag`),
    desc: t(`courses.${n}.desc`),
    duration: t(`courses.${n}.duration`),
    age: t(`courses.${n}.age`),
    extra: n === 1 ? t("courses.1.extra") : undefined,
  }));
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("courses.kicker")}</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
              {t("courses.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("courses.title.accent")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t("courses.intro")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card hover:border-secondary animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary opacity-10 blur-2xl transition-smooth group-hover:opacity-25" />

              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="h-7 w-7" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right max-w-[55%]">
                  {c.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                  <Clock className="h-3.5 w-3.5" /> {c.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                  <UserRound className="h-3.5 w-3.5" /> {c.age}
                </span>
              </div>

              {c.extra && (
                <div className="mt-4 flex items-start gap-2 rounded-2xl bg-secondary/30 p-3 text-sm">
                  <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-semibold">{t("courses.bonus")}</span>
                  <span className="text-foreground/80">{c.extra}</span>
                </div>
              )}

              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:gap-3 transition-all">
                {t("courses.cta")} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
