import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const GeneralBenefits = () => {
  const { t } = useLang();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`gbenefits.${n}`));
  return (
    <section className="py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
            {t("gbenefits.kicker")}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("gbenefits.title.main")}{" "}
            <span className="bg-secondary/60 px-2 rounded">{t("gbenefits.title.accent")}</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-secondary mt-0.5" />
              <p className="text-sm font-medium leading-relaxed">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};