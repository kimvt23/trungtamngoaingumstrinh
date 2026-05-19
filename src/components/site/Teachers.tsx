import { GraduationCap, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import trinh from "@/assets/teacher-trinh.jpg";
import kim from "@/assets/teacher-kim.jpg";
import van from "@/assets/teacher-van.jpg";
import nhi from "@/assets/teacher-nhi.jpg";
import { Reveal } from "./Reveal";

const teachers = [
  {
    name: "Ms Trinh",
    role: { vi: "Giám đốc điều hành", en: "Center Director" },
    img: trinh,
    desc: {
      vi: "Giám đốc điều hành trung tâm. Tốt nghiệp loại giỏi ĐH Bách Khoa. Hơn 10 năm kinh nghiệm giảng dạy. Đã giúp đỡ hàng trăm học viên tiến bộ và yêu thích tiếng Anh. Phương pháp giảng dạy tận tâm, hiện đại và truyền cảm hứng cho học viên.",
      en: "Executive director. Graduated with honors from HCMC University of Technology. Over 10 years of teaching experience. Has helped hundreds of learners grow and love English through a dedicated, modern and inspiring approach.",
    },
    tags: { vi: ["10+ năm", "ĐH Bách Khoa", "Lãnh đạo"], en: ["10+ years", "HCMUT", "Leadership"] },
  },
  {
    name: "Ms Kim",
    role: { vi: "Quản lý học thuật", en: "Head of Academics" },
    img: kim,
    desc: {
      vi: "Gần 7 năm kinh nghiệm đứng lớp. Tốt nghiệp loại giỏi ngành Giáo dục Tiểu học & THCS - Đại học Quốc tế Châu Âu Paris. Chứng chỉ TESOL. Chứng chỉ nghiệp vụ sư phạm bậc 5. Phương pháp giảng dạy sống động, sáng tạo, giúp học viên tự tin giao tiếp tiếng Anh.",
      en: "Almost 7 years of classroom experience. Honors graduate in Primary & Secondary Education from European International University Paris. TESOL certified, Level 5 pedagogy certificate. Lively and creative teaching style that builds confident English communicators.",
    },
    tags: { vi: ["7 năm", "TESOL", "Sư phạm bậc 5"], en: ["7 years", "TESOL", "Pedagogy L5"] },
  },
  {
    name: "Ms Vân",
    role: { vi: "", en: "" },
    img: van,
    desc: {
      vi: "Hơn 2 năm kinh nghiệm đứng lớp. Phương pháp giảng dạy sôi động, gần gũi và dễ hiểu. Tốt nghiệp loại giỏi ngành Ngôn ngữ Anh - Đại học Ngoại ngữ Tin học TP.HCM. Chứng chỉ TOEIC 895. Luôn tạo môi trường học tập tích cực và vui vẻ cho học viên.",
      en: "Over 2 years of teaching experience. Lively, friendly and easy-to-follow style. Honors graduate in English Linguistics from HUFLIT. TOEIC 895. Creates a positive and joyful learning environment for every student.",
    },
    tags: { vi: ["TOEIC 895", "HUFLIT", "Năng động"], en: ["TOEIC 895", "HUFLIT", "Energetic"] },
  },
  {
    name: "Ms Nhi",
    role: { vi: "", en: "" },
    img: nhi,
    desc: {
      vi: "Tốt nghiệp ngành Sư phạm Tiểu học. 2 năm kinh nghiệm đứng lớp. Nhiệt tình, sôi nổi và thân thiện với học viên. Luôn tạo không khí học tập vui vẻ và truyền động lực cho học sinh.",
      en: "Graduated in Primary Education. 2 years of classroom experience. Enthusiastic, energetic and friendly — keeps the classroom fun and motivating for every learner.",
    },
    tags: { vi: ["Tiểu học", "Thân thiện", "Truyền động lực"], en: ["Primary", "Friendly", "Motivating"] },
  },
];

export const Teachers = () => {
  const { lang } = useLang();
  return (
    <section id="teachers" className="relative py-24 overflow-hidden">
      {/* Soft cute background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 via-background to-accent/10" />
      <div className="blob h-72 w-72 -top-10 left-1/4 bg-secondary opacity-30" />
      <div className="blob h-72 w-72 bottom-0 right-10 bg-accent opacity-25" />

      <div className="container-x">
        <Reveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              {lang === "vi" ? "Đội ngũ giảng viên" : "Our teachers"}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {lang === "vi" ? "Gặp gỡ GV" : "Meet our teachers"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {lang === "vi"
                ? "Những người thầy tận tâm, hiện đại và truyền cảm hứng — luôn đồng hành cùng học viên trên mỗi bước tiến."
                : "Dedicated, modern and inspiring teachers walking with students at every step."}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <Reveal key={t.name} variant="fade-up" delay={i * 120} sparkle={false}>
              <article className="group relative h-full rounded-3xl bg-card border border-border p-5 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_hsl(var(--secondary)/0.6)] hover:border-secondary/60">
                <div aria-hidden className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-secondary/0 via-secondary/30 to-accent/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted ring-2 ring-secondary/30">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-secondary/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground shadow-glow">
                      <GraduationCap className="h-3 w-3" /> GV
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-extrabold leading-tight">{t.name}</h3>
                    {t.role[lang] && (
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/80 mt-1">
                        {t.role[lang]}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-5">
                      {t.desc[lang]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {t.tags[lang].map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary/25 px-2.5 py-0.5 text-[11px] font-semibold text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;