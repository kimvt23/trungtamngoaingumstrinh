import { Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-8 mt-10">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ms Trinh English Center" className="h-12 w-12 rounded-xl object-contain bg-white p-1" />
              <span className="font-display text-lg font-extrabold">Ms Trinh English</span>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Đồng hành cùng học viên mọi lứa tuổi học tiếng Anh tự tin — tại Bà Rịa & Vũng Tàu.
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
            <h4 className="font-display font-bold text-base">Liên kết nhanh</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[
                ["Giới thiệu", "#about"],
                ["Ưu đãi", "#benefits"],
                ["Khóa học", "#courses"],
                ["Hình ảnh", "#gallery"],
                ["Chi nhánh", "#branches"],
                ["Liên hệ", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-primary transition-smooth">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">Khóa học</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {["IELTS","Giao tiếp Người lớn","Cambridge","Lớp Mầm non","Lớp Thiếu nhi","Lớp Thiếu niên"].map((c) => (
                <li key={c}><a href="#courses" className="hover:text-primary transition-smooth">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base">Liên hệ</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> 0966 802 457</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 218 Nguyễn Hữu Thọ, Bà Rịa</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 492 Điện Biên Phủ, Bà Rịa</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 420 Trương Công Định, Vũng Tàu</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Ms Trinh English Center. Mọi quyền được bảo lưu.</p>
          <p>Tự hào đồng hành cùng học viên Việt Nam ♥</p>
        </div>
      </div>
    </footer>
  );
};
