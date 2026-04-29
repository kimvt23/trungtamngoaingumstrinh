import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#benefits", label: "Ưu đãi" },
  { href: "#courses", label: "Khóa học" },
  { href: "#ielts", label: "Luyện IELTS" },
  { href: "#gallery", label: "Hình ảnh" },
  { href: "#branches", label: "Chi nhánh" },
  { href: "#contact", label: "Liên hệ" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Ms Trinh English Center"
            className="h-11 w-11 rounded-xl object-contain bg-white shadow-soft transition-smooth group-hover:scale-110"
          />
          <span className="font-display text-lg font-extrabold tracking-tight hidden sm:block">
            Ms Trinh <span className="text-gradient">English</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full gradient-sunset px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
          >
            Đăng ký ngay
          </a>
        </div>

        <button
          className="lg:hidden rounded-xl p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full gradient-sunset px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Đăng ký ngay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
