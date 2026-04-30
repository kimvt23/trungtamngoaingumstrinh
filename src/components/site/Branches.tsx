import { MapPin, Navigation } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Branches = () => {
  const { t } = useLang();
  const branches = [
    { code: "CN1", address: t("branches.cn1.address"), city: t("branches.cn1.city") },
    { code: "CN2", address: t("branches.cn2.address"), city: t("branches.cn2.city") },
    { code: "CN3", address: t("branches.cn3.address"), city: t("branches.cn3.city") },
  ];
  return (
    <section id="branches" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("branches.kicker")}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("branches.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("branches.title.accent")}</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            {t("branches.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <article
              key={b.code}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card hover:border-secondary animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-secondary opacity-15 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow">
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="font-display text-3xl font-extrabold">{b.code}</div>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{b.address}</h3>
              <p className="mt-1 text-muted-foreground">{b.city}</p>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(`${b.address}, ${b.city}, Vietnam`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground hover:gap-3 transition-all"
              >
                <Navigation className="h-4 w-4" /> {t("branches.directions")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
