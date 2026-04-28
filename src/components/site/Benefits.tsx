import { BadgePercent, BookOpen, ClipboardCheck, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: BadgePercent,
    title: "Giảm 10% học phí tháng đặc biệt",
    desc: "Nhận ưu đãi hấp dẫn lên đến 10% học phí trong các tháng khuyến mãi đặc biệt trong năm.",
    gradient: "gradient-warm",
  },
  {
    icon: BookOpen,
    title: "Tặng tài liệu học miễn phí",
    desc: "Nhận sách, vở bài tập và tài liệu online hoàn toàn miễn phí trong các đợt đăng ký đặc biệt.",
    gradient: "gradient-pink",
  },
  {
    icon: ClipboardCheck,
    title: "Ôn thi trên trường miễn phí",
    desc: "Buổi ôn tập đặc biệt giúp học sinh chuẩn bị tốt cho các bài kiểm tra trên trường — hoàn toàn miễn phí.",
    gradient: "gradient-warm",
  },
  {
    icon: GraduationCap,
    title: "Tặng 1 buổi luyện đề IELTS",
    desc: "Mỗi học viên IELTS được tặng thêm 1 buổi luyện đề chuyên sâu giúp tối đa hóa điểm số.",
    gradient: "gradient-pink",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Vì sao chọn chúng tôi</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-gradient">Ưu đãi</span> thật, giá trị thật
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Chúng tôi đầu tư cho học viên bằng các ưu đãi, tài liệu miễn phí và các buổi học bổ sung — đồng hành cùng bạn trên mọi chặng đường.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${b.gradient} text-primary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6`}>
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
