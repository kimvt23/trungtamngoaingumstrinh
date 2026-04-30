import { useState } from "react";
import { z } from "zod";
import { Phone, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/i18n/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  const schema = z.object({
    name: z.string().trim().min(1, t("contact.toast.name")).max(80),
    phone: z.string().trim().min(8, t("contact.toast.phone")).max(20),
    message: z.string().trim().min(1, t("contact.toast.message")).max(800),
  });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? t("contact.toast.name"));
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("contact.toast.success"));
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="blob h-72 w-72 -top-10 -right-10 bg-secondary animate-blob-move opacity-25" />
      <div className="blob h-72 w-72 bottom-0 -left-10 bg-accent animate-blob-move opacity-25" style={{ animationDelay: "3s" }} />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("contact.kicker")}</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
              {t("contact.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("contact.title.accent")}</span>{t("contact.title.tail")}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              {t("contact.desc")}
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:0966802457"
                className="flex items-center gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card hover:border-secondary"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("contact.call")}</div>
                  <div className="font-display text-xl font-bold">0966 802 457</div>
                </div>
              </a>
              <a
                href="https://zalo.me/0966802457"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card hover:border-secondary"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("contact.message")}</div>
                  <div className="font-display text-xl font-bold">{t("contact.zalo")}</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card"
          >
            <h3 className="font-display text-2xl font-bold">{t("contact.form.title")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("contact.form.subtitle")}</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold">{t("contact.form.name")}</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  maxLength={80}
                  placeholder={t("contact.form.name.placeholder")}
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{t("contact.form.phone")}</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  maxLength={20}
                  placeholder="0966 802 457"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{t("contact.form.message")}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  maxLength={800}
                  rows={4}
                  placeholder={t("contact.form.message.placeholder")}
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-[1.02] disabled:opacity-70"
              >
                {submitting ? t("contact.form.sending") : t("contact.form.send")}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
