import { Sparkles, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-8 mt-10">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-sunset text-primary-foreground shadow-glow">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold">Sunrise English</span>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Helping students of all ages learn English with confidence — across Ba Ria & Vung Tau.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[
                ["About", "#about"],
                ["Benefits", "#benefits"],
                ["Courses", "#courses"],
                ["Gallery", "#gallery"],
                ["Branches", "#branches"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-primary transition-smooth">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">Courses</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {["IELTS","Adult Communication","Cambridge","Kindy Class","Kids Class","Teen Class"].map((c) => (
                <li key={c}><a href="#courses" className="hover:text-primary transition-smooth">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> 0966 802 457</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 218 Nguyen Huu Tho, Ba Ria</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 492 Dien Bien Phu, Ba Ria</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 420 Truong Cong Dinh, Vung Tau</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Sunrise English Center. All rights reserved.</p>
          <p>Made with ♥ for learners in Vietnam</p>
        </div>
      </div>
    </footer>
  );
};
