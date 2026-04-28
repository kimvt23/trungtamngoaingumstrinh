import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập họ tên").max(80),
  phone: z.string().trim().min(8, "Vui lòng nhập số điện thoại hợp lệ").max(20),
  message: z.string().trim().min(1, "Vui lòng nhập nội dung tin nhắn").max(800),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Vui lòng kiểm tra lại thông tin");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.");
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="blob h-72 w-72 -top-10 -right-10 bg-accent animate-blob-move" />
      <div className="blob h-72 w-72 bottom-0 -left-10 bg-primary animate-blob-move" style={{ animationDelay: "3s" }} />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Liên hệ</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
              Sẵn sàng <span className="text-gradient">đăng ký</span>? Hãy nhắn chúng tôi.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Bạn có câu hỏi về khóa học, lịch học hay học phí? Hãy gửi tin nhắn — đội ngũ tư vấn sẽ phản hồi trong vài giờ.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:0966802457"
                className="flex items-center gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-warm text-primary-foreground shadow-glow">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Gọi ngay</div>
                  <div className="font-display text-xl font-bold">0966 802 457</div>
                </div>
              </a>
              <a
                href="https://zalo.me/0966802457"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-pink text-primary-foreground shadow-pink">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Nhắn tin</div>
                  <div className="font-display text-xl font-bold">Chat qua Zalo</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card"
          >
            <h3 className="font-display text-2xl font-bold">Gửi tin nhắn</h3>
            <p className="mt-1 text-sm text-muted-foreground">Chúng tôi sẽ phản hồi trong vài giờ.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold">Họ và tên</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  maxLength={80}
                  placeholder="Nguyễn Văn A"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Số điện thoại</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  maxLength={20}
                  placeholder="0966 802 457"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Nội dung</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  maxLength={800}
                  rows={4}
                  placeholder="Tôi muốn tìm hiểu thêm về khóa học IELTS..."
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-sunset px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] disabled:opacity-70"
              >
                {submitting ? "Đang gửi..." : "Gửi tin nhắn"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
