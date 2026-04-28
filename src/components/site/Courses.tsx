import { Trophy, Mic, Award, Baby, Smile, Users, ArrowRight, Clock, UserRound } from "lucide-react";

const courses = [
  {
    icon: Trophy,
    title: "IELTS",
    tag: "General & Academic",
    desc: "Luyện thi IELTS toàn diện 4 kỹ năng với đề thi thử, chiến lược làm bài và phản hồi cá nhân.",
    duration: "4 tháng",
    age: "Thanh thiếu niên & Người lớn",
    extra: "Tặng 1 buổi luyện đề miễn phí",
    gradient: "gradient-warm",
  },
  {
    icon: Mic,
    title: "Giao tiếp Người lớn",
    tag: "Tự tin giao tiếp",
    desc: "Tiếng Anh giao tiếp cho người đi làm — phát âm, chủ đề thực tế và kỹ năng thuyết trình.",
    duration: "4 tháng",
    age: "Người lớn 18+",
    gradient: "gradient-pink",
  },
  {
    icon: Award,
    title: "Lớp Cambridge",
    tag: "Starters · KET · PET",
    desc: "Chứng chỉ Cambridge English được công nhận quốc tế giúp con bạn vươn ra thế giới.",
    duration: "Theo học kỳ",
    age: "7–14 tuổi",
    gradient: "gradient-warm",
  },
  {
    icon: Baby,
    title: "Lớp Mầm non",
    tag: "Bé yêu học tiếng Anh",
    desc: "Bài hát, trò chơi và câu chuyện giúp bé làm quen tiếng Anh qua hoạt động vui nhộn.",
    duration: "3 tháng",
    age: "4–5 tuổi",
    gradient: "gradient-pink",
  },
  {
    icon: Smile,
    title: "Lớp Thiếu nhi",
    tag: "Nền tảng vững chắc",
    desc: "Xây dựng vốn từ vựng, phát âm và ngữ pháp vững vàng qua các hoạt động vui nhộn, tương tác.",
    duration: "3 tháng",
    age: "6–10 tuổi",
    gradient: "gradient-warm",
  },
  {
    icon: Users,
    title: "Lớp Thiếu niên",
    tag: "Nâng cao trình độ",
    desc: "Bài học dự án giúp củng cố cả 4 kỹ năng và chuẩn bị cho các kỳ thi quốc tế.",
    duration: "3 tháng",
    age: "11–14 tuổi",
    gradient: "gradient-pink",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Khóa học</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
              Chương trình cho <span className="text-gradient">mọi lứa tuổi & mục tiêu</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Từ những từ tiếng Anh đầu tiên của con đến IELTS Band 8 tự tin — chúng tôi có lớp phù hợp dành cho bạn.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full ${c.gradient} opacity-15 blur-2xl transition-smooth group-hover:opacity-30`} />

              <div className="flex items-start justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${c.gradient} text-primary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6`}>
                  <c.icon className="h-7 w-7" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                  <Clock className="h-3.5 w-3.5" /> {c.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                  <UserRound className="h-3.5 w-3.5" /> {c.age}
                </span>
              </div>

              {c.extra && (
                <div className="mt-4 flex items-start gap-2 rounded-2xl bg-primary/8 p-3 text-sm">
                  <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-semibold">Ưu đãi:</span>
                  <span className="text-foreground/80">{c.extra}</span>
                </div>
              )}

              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                Đăng ký ngay <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
