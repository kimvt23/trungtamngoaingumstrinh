import { Heart, Globe2, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Về chúng tôi</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Nơi tỏa sáng để <span className="text-gradient">phát triển tiếng Anh</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ms Trinh English Center là trung tâm tiếng Anh hiện đại, thân thiện tại Bà Rịa & Vũng Tàu.
            Hơn 3 năm qua, chúng tôi đã giúp các em mầm non, học sinh và người lớn tự tin nói tiếng Anh —
            thông qua các lớp học sinh động, đội ngũ giáo viên tận tâm và chương trình học rõ ràng,
            được phụ huynh tin tưởng và học viên yêu thích.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: "Giáo viên tận tâm" },
              { icon: Target, label: "Kết quả rõ ràng" },
              { icon: Globe2, label: "Chuẩn quốc tế" },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-xl gradient-warm text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm">{it.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl gradient-warm p-6 text-primary-foreground shadow-glow">
                <div className="font-display text-5xl font-black">3+</div>
                <div className="mt-2 text-sm font-medium opacity-90">Năm giảng dạy chất lượng</div>
              </div>
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black text-gradient">3</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">Chi nhánh tại Bà Rịa & Vũng Tàu</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black text-gradient">300+</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">Học viên đang theo học</div>
              </div>
              <div className="rounded-3xl gradient-pink p-6 text-primary-foreground shadow-pink">
                <div className="font-display text-5xl font-black">98%</div>
                <div className="mt-2 text-sm font-medium opacity-90">Phụ huynh hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
