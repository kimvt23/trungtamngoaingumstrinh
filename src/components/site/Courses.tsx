import { Trophy, Mic, Award, Baby, Smile, Users, ArrowRight, Clock, UserRound } from "lucide-react";

const courses = [
  { icon: Trophy, title: "IELTS", tag: "General & Academic", desc: "Comprehensive IELTS training across all 4 skills with mock tests, strategy and personal feedback.", duration: "4 months", age: "Teens & Adults", extra: "1 free test lesson included" },
  { icon: Mic, title: "Adult Communication", tag: "Speak with confidence", desc: "Practical English for working adults — pronunciation, real-life topics and presentation skills.", duration: "4 months", age: "Adults 18+" },
  { icon: Award, title: "Cambridge", tag: "Starters · Movers · Flyers · KET · PET", desc: "Internationally recognized Cambridge English certificates that open the world for your child.", duration: "By term", age: "7–14 years" },
  { icon: Baby, title: "Kindy", tag: "Little learners", desc: "Songs, games and stories that introduce English through joyful, playful activities.", duration: "3 months", age: "4–5 years" },
  { icon: Smile, title: "Kids", tag: "Strong foundations", desc: "Build solid vocabulary, pronunciation and grammar through fun, interactive lessons.", duration: "3 months", age: "6–10 years" },
  { icon: Users, title: "Teen", tag: "Level up", desc: "Project-based lessons that strengthen all 4 skills and prepare for international exams.", duration: "3 months", age: "11–14 years" },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">Courses</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
              Programs for <span className="bg-secondary/60 px-2 rounded">every age & goal</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From your child's first English words to a confident IELTS Band 8 — we have a class for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card hover:border-secondary animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary opacity-10 blur-2xl transition-smooth group-hover:opacity-25" />

              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="h-7 w-7" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right max-w-[55%]">
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
                <div className="mt-4 flex items-start gap-2 rounded-2xl bg-secondary/30 p-3 text-sm">
                  <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-semibold">Bonus:</span>
                  <span className="text-foreground/80">{c.extra}</span>
                </div>
              )}

              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:gap-3 transition-all">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
