import { useEffect, useState } from "react";
import { Heart, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "./Reveal";
import fb1 from "@/assets/feedback-1.png";

const items = [
  {
    name: "Hương",
    course: "Giao tiếp",
    img: fb1,
    quote: {
      vi: "Sau 1 khóa em tiến bộ rất nhiều, tự tin đặt câu và nói thành đoạn từ vựng mới. Cô luôn tạo điều kiện cho tụi em học thoải mái.",
      en: "After one course I improved a lot — confident making sentences and short paragraphs with new vocabulary. Teachers always create a relaxed space.",
    },
  },
  {
    name: "Minh Thư",
    course: "Giao tiếp Teen",
    img: null,
    quote: {
      vi: "Cô dạy dễ hiểu, tạo cảm giác thoải mái để học sinh tự tin nói và thuyết trình. Lúc đầu em rất ngại, giờ tự tin hơn nhiều.",
      en: "Lessons are easy to follow and relaxing — I used to be shy but now I'm much more confident speaking and presenting.",
    },
  },
  {
    name: "Phụ huynh",
    course: "Kids",
    img: null,
    quote: {
      vi: "Bé nhà mình rất thích đi học, về nhà còn hát và nói tiếng Anh. Cảm ơn trung tâm rất nhiều!",
      en: "My kid loves coming to class — singing and speaking English at home. Thank you so much!",
    },
  },
  {
    name: "Kim Stephens",
    course: "Giao tiếp",
    img: null,
    quote: {
      vi: "Cô dạy rất dễ hiểu, nhiệt tình và tâm huyết. Bài tập đa dạng giúp em luyện được kĩ năng cần thiết để sẵn sàng đi thi.",
      en: "Clear, passionate teaching. Varied exercises helped me build the exact skills I needed for the exam.",
    },
  },
];

export const Feedback = () => {
  const { lang } = useLang();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="feedback" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 via-background to-secondary/10" />
      <div className="blob h-72 w-72 top-20 -left-10 bg-secondary opacity-25" />
      <div className="blob h-72 w-72 bottom-10 -right-10 bg-accent opacity-30" />
      {/* Floating hearts */}
      <Heart className="absolute top-16 right-[8%] h-5 w-5 text-secondary/60 animate-float" />
      <Star className="absolute bottom-20 left-[10%] h-5 w-5 text-secondary/60 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container-x">
        <Reveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground">
              <Heart className="h-3.5 w-3.5 fill-current" />
              {lang === "vi" ? "Học viên nói gì" : "What students say"}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {lang === "vi" ? "Góc feedback học viên" : "Student feedback corner"}
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {items.map((it, idx) => (
                <div key={idx} className="w-full shrink-0 px-2 sm:px-4">
                  <article className="grid md:grid-cols-5 gap-6 rounded-3xl bg-card border-2 border-secondary/40 p-6 sm:p-8 shadow-[0_24px_60px_-24px_hsl(var(--secondary)/0.5)]">
                    <div className="md:col-span-2">
                      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/30 ring-2 ring-secondary/40 grid place-items-center">
                        {it.img ? (
                          <img src={it.img} alt={it.name} className="h-full w-full object-cover" loading="lazy" />
                        ) : (
                          <div className="text-center p-6">
                            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-secondary text-secondary-foreground font-display text-3xl font-extrabold shadow-glow">
                              {it.name.charAt(0)}
                            </div>
                            <div className="mt-3 text-sm font-semibold text-foreground/70">
                              {lang === "vi" ? "Ảnh sẽ cập nhật" : "Photo coming soon"}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <Quote className="h-8 w-8 text-secondary mb-3" />
                      <p className="text-base sm:text-lg leading-relaxed text-foreground/90 italic">
                        "{it.quote[lang]}"
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        {[...Array(5)].map((_, k) => (
                          <Star key={k} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <div className="mt-3">
                        <div className="font-display text-lg font-extrabold">{it.name}</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                          {it.course}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 grid h-11 w-11 place-items-center rounded-full bg-card border-2 border-secondary/60 shadow-soft hover:bg-secondary hover:text-secondary-foreground transition-smooth"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % items.length)}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-6 grid h-11 w-11 place-items-center rounded-full bg-card border-2 border-secondary/60 shadow-soft hover:bg-secondary hover:text-secondary-foreground transition-smooth"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Feedback ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;