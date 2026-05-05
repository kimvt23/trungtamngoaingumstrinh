import { Headphones, ExternalLink, BookOpen, Play } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const IeltsCta = () => {
  const { t } = useLang();
  return (
    <section id="ielts" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 lg:p-14 shadow-soft">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-secondary opacity-20 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
                <Headphones className="h-4 w-4" /> {t("ielts.cta.kicker")}
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
                {t("ielts.cta.title")}
              </h2>
              <p className="mt-3 text-muted-foreground">{t("ielts.cta.desc")}</p>
            </div>
            <a
              href="/ielts-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-bold text-secondary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:brightness-105 whitespace-nowrap"
            >
              <Play className="h-4 w-4" /> Bắt đầu luyện tập <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Headphones, title: "IELTS Listening", desc: "4 phần · audio + đáp án chi tiết" },
              { icon: BookOpen, title: "IELTS Reading", desc: "Multiple choice · True/False · Matching" },
            ].map((c) => (
              <a
                key={c.title}
                href="/ielts-practice"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow hover:border-secondary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="font-display font-bold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};