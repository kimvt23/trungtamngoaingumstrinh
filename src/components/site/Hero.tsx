import { ArrowRight, PhoneCall, Star, Users, GraduationCap } from "lucide-react";
import heroImg from "@/assets/photo-w1.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 gradient-hero">
      {/* Soft sunset blobs */}
      <div className="blob h-72 w-72 -top-10 -left-10 bg-secondary animate-blob-move opacity-40" />
      <div className="blob h-80 w-80 top-40 -right-20 bg-primary animate-blob-move opacity-25" style={{ animationDelay: "2s" }} />
      <div className="blob h-64 w-64 bottom-0 left-1/3 bg-accent animate-blob-move opacity-30" style={{ animationDelay: "4s" }} />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Star className="h-4 w-4 fill-primary" />
            Được hơn 300+ học viên tin chọn
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Học Tiếng Anh{" "}
            <span className="text-gradient">Tự Tin</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Khóa học cho mọi lứa tuổi — từ Mầm non đến Người lớn. IELTS, Cambridge, Giao tiếp và nhiều hơn nữa, được giảng dạy bởi đội ngũ giáo viên tâm huyết tại Bà Rịa & Vũng Tàu.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full gradient-sunset px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              Xem khóa học
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-7 py-4 text-base font-semibold text-foreground shadow-soft transition-smooth hover:border-primary hover:text-primary"
            >
              <PhoneCall className="h-5 w-5" />
              Liên hệ ngay
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { icon: Users, value: "300+", label: "Học viên" },
              { icon: GraduationCap, value: "3+", label: "Năm kinh nghiệm" },
              { icon: Star, value: "4.9★", label: "Đánh giá" },
            ].map((s, i) => (
              <div key={s.label} className="animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="font-display text-3xl font-extrabold text-gradient">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-4 gradient-sunset rounded-[2.5rem] blur-2xl opacity-30" />
            <img
              src={heroImg}
              alt="Học viên Ms Trinh English Center nhận chứng nhận"
              width={1536}
              height={1152}
              className="relative rounded-[2rem] shadow-glow w-full object-cover aspect-[4/3]"
            />
            {/* Floating badges */}
            <div className="absolute -left-4 top-12 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card animate-float">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-warm text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">IELTS trung bình</div>
                <div className="font-display font-bold">7.5+ điểm</div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-pink animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-pink text-primary-foreground">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Phụ huynh đánh giá</div>
                <div className="font-display font-bold">4.9 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
