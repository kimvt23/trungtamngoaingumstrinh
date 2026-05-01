import { useEffect, useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageContext";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21Z"/>
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#courses", label: t("nav.courses") },
    { href: "#ielts", label: t("nav.ielts") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#branches", label: t("nav.branches") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-bold", className)}>
      <button
        onClick={() => setLang("vi")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-smooth",
          lang === "vi" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
      <span className="px-0.5 text-muted-foreground/50">|</span>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-smooth",
          lang === "en" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="English Center logo"
            className="h-11 w-11 object-contain transition-smooth group-hover:scale-110"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold tracking-tight">English Center</span>
            <span className="text-[11px] text-muted-foreground">{t("nav.tagline")}</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://www.facebook.com/tienganhcotrinh.asara" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.tiktok.com/@mstrinhenglishcenter" target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
            <TikTokIcon className="h-4 w-4" />
          </a>
          <LangSwitch />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-glow transition-smooth hover:scale-105"
          >
            {t("nav.enroll")}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LangSwitch />
          <button
            className="rounded-xl p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-muted transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-3 py-2">
              <a href="https://www.facebook.com/tienganhcotrinh.asara" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@mstrinhenglishcenter" target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-glow"
            >
              {t("nav.enroll")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
