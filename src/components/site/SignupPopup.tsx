import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "signup_popup_shown_v1";

export const SignupPopup = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", course: "" });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const id = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 10000);
    return () => window.clearTimeout(id);
  }, []);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => setMounted(false), 250);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.phone.trim() || !form.course.trim()) {
      setError(t("popup.error.required"));
      return;
    }
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": "signup-popup",
        name: form.name,
        phone: form.phone,
        course: form.course,
      }).toString();
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      }).catch(() => {});
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 transition-opacity duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative w-full max-w-md rounded-3xl bg-card shadow-glow border border-border overflow-hidden transition-all duration-300",
          open ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        )}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-secondary" />
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-foreground/60 hover:bg-muted hover:text-foreground transition-smooth"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              {t("popup.kicker")}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t("popup.title")}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("popup.desc")}</p>

          {done ? (
            <div className="mt-6 rounded-2xl bg-secondary/30 p-5 text-center">
              <div className="font-display font-bold text-lg">{t("popup.success")}</div>
              <button
                onClick={close}
                className="mt-4 inline-flex items-center rounded-full bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground shadow-glow"
              >
                {t("popup.close")}
              </button>
            </div>
          ) : (
            <form
              name="signup-popup"
              method="POST"
              data-netlify="true"
              onSubmit={onSubmit}
              className="mt-5 space-y-3"
            >
              <input type="hidden" name="form-name" value="signup-popup" />
              <div>
                <label className="text-xs font-semibold text-foreground/80">{t("popup.label.name")}</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-smooth"
                  placeholder={t("popup.placeholder.name")}
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/80">{t("popup.label.phone")}</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-smooth"
                  placeholder="0123 456 789"
                  maxLength={20}
                  inputMode="tel"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/80">{t("popup.label.course")}</label>
                <input
                  name="course"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-smooth"
                  placeholder={t("popup.placeholder.course")}
                  maxLength={120}
                  required
                />
              </div>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-[1.02] disabled:opacity-60"
              >
                {submitting ? t("popup.sending") : t("popup.submit")}
              </button>
              <p className="text-[11px] text-muted-foreground text-center pt-1">
                {t("popup.privacy")}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;