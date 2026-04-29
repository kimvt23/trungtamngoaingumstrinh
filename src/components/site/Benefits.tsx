import { BadgePercent, BookOpen, ClipboardCheck, GraduationCap } from "lucide-react";

const benefits = [
  { icon: BadgePercent, title: "10% off in special months", desc: "Enjoy attractive promotions of up to 10% off tuition during selected months of the year." },
  { icon: BookOpen, title: "Free learning materials", desc: "Receive textbooks, workbooks and online resources for free during special enrollment periods." },
  { icon: ClipboardCheck, title: "Free school exam review", desc: "Special review sessions to help students prepare for school tests — completely free." },
  { icon: GraduationCap, title: "1 free IELTS test lesson", desc: "Every IELTS student gets one extra in-depth practice session to maximize their score." },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">Why choose us</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Real <span className="bg-secondary/60 px-2 rounded">benefits</span>, real value
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We invest in our students with promotions, free materials and bonus sessions — supporting you every step of the way.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow transition-smooth group-hover:scale-110 group-hover:rotate-6">
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
