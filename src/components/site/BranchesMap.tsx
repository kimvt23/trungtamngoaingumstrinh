import { MapPin, Navigation } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

type Branch = {
  code: string;
  address: string;
};

const BRANCHES: Branch[] = [
  { code: "CN1", address: "218 Nguyễn Hữu Thọ, Bà Rịa" },
  { code: "CN2", address: "492 Điện Biên Phủ, Long Toàn, Bà Rịa" },
  { code: "CN3", address: "420 Trương Công Định, Vũng Tàu" },
];

export const BranchesMap = () => {
  const { t } = useLang();
  return (
    <section id="branches-map" className="py-16">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
            {t("bmap.kicker")}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("bmap.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("bmap.title.accent")}</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {t("bmap.desc")}
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((b) => {
            const query = encodeURIComponent(b.address);
            return (
              <article
                key={b.code}
                className="rounded-3xl bg-card border border-border overflow-hidden shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card hover:border-secondary"
              >
                <div className="aspect-[4/3] w-full bg-muted">
                  <iframe
                    title={`${t("bmap.maptitle")} ${b.code}`}
                    src={`https://www.google.com/maps?q=${query}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="font-display text-2xl font-extrabold">{b.code}</div>
                  </div>
                  <p className="mt-3 font-semibold leading-snug">{b.address}</p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-[1.03]"
                  >
                    <Navigation className="h-4 w-4" />
                    {t("branches.directions")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchesMap;
