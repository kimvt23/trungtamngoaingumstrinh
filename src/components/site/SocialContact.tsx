import { Facebook } from "lucide-react";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21Z"/>
  </svg>
);

export const SocialContact = () => {
  return (
    <section id="social" className="py-16">
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">Kết nối</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
            Thông tin <span className="bg-secondary/60 px-2 rounded">liên hệ</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Theo dõi chúng tôi trên mạng xã hội để cập nhật lớp học, mẹo học tiếng Anh và ưu đãi mới nhất.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/tienganhcotrinh.asara"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-card border border-border px-6 py-3 text-sm font-bold shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-secondary hover:shadow-card"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow">
              <Facebook className="h-5 w-5" />
            </span>
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@mstrinhenglishcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-card border border-border px-6 py-3 text-sm font-bold shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-secondary hover:shadow-card"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow">
              <TikTokIcon className="h-5 w-5" />
            </span>
            TikTok @mstrinhenglishcenter
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialContact;
