import { Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageContext";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21Z"/>
  </svg>
);

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-8 mt-10">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="English Center" className="h-12 w-12 object-contain" />
              <span className="font-display text-lg font-extrabold">English Center</span>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/tienganhcotrinh.asara" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@mstrinhenglishcenter" target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">{t("footer.quicklinks")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[
                [t("nav.about"), "#about"],
                [t("nav.courses"), "#courses"],
                [t("nav.ielts"), "#ielts"],
                [t("nav.gallery"), "#gallery"],
                [t("nav.videos"), "#videos"],
                [t("nav.branches"), "#branches"],
                [t("nav.contact"), "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-secondary transition-smooth">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">{t("footer.courses")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[t("courses.1.title"), t("courses.2.title"), t("courses.3.title"), t("courses.4.title"), t("courses.5.title"), t("courses.6.title")].map((c) => (
                <li key={c}><a href="#courses" className="hover:text-secondary transition-smooth">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-secondary" /> 0966 802 457</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /> {t("branches.cn1.address")}, {t("branches.cn1.city")}</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /> {t("branches.cn2.address")}, {t("branches.cn2.city")}</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /> {t("branches.cn3.address")}, {t("branches.cn3.city")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} English Center. {t("footer.rights")}</p>
          <p>{t("footer.love")}</p>
        </div>
      </div>
    </footer>
  );
};
