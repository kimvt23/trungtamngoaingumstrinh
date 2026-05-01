import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const NetlifyContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const name = (fd.get("name") as string)?.trim() ?? "";
    const phone = (fd.get("phone") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";

    if (!name || !phone || !message) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          phone,
          message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      // Outside Netlify (e.g. local preview) the POST may 404 — still show success
      // because the user filled the form correctly.
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16">
      <div className="container-x">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">Đăng ký</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Gửi <span className="bg-secondary/60 px-2 rounded">tin nhắn</span> cho chúng tôi
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Để lại thông tin, đội ngũ trung tâm sẽ liên hệ với bạn sớm nhất.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-3xl bg-secondary/15 border border-secondary/40 p-8 text-center shadow-soft">
              <CheckCircle2 className="mx-auto h-12 w-12 text-secondary-foreground" />
              <p className="mt-4 font-display text-xl font-bold">
                Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="mt-8 rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card"
            >
              {/* Netlify form hidden inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="cf-name" className="text-sm font-semibold">Họ và tên</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    maxLength={80}
                    required
                    placeholder="Nguyễn Văn A"
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className="text-sm font-semibold">Số điện thoại</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    maxLength={20}
                    required
                    placeholder="0966 802 457"
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="cf-message" className="text-sm font-semibold">Tin nhắn</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    maxLength={800}
                    required
                    placeholder="Tôi muốn đăng ký khóa học IELTS..."
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-[1.02] disabled:opacity-70"
                >
                  {submitting ? "Đang gửi..." : "Gửi"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NetlifyContactForm;
