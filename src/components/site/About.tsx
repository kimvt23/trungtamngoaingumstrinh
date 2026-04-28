import { Heart, Globe2, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About us</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            A bright place to <span className="text-gradient">grow your English</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sunrise English Center is a friendly, modern English language center based in Ba Ria & Vung Tau.
            For over a decade, we have helped kindergarteners, school students, and adults speak English with
            confidence — through engaging classes, caring teachers, and a clear, structured curriculum that
            parents trust and students love.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: "Caring teachers" },
              { icon: Target, label: "Clear results" },
              { icon: Globe2, label: "Global standards" },
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
                <div className="font-display text-5xl font-black">12+</div>
                <div className="mt-2 text-sm font-medium opacity-90">Years of teaching excellence</div>
              </div>
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black text-gradient">3</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">Branches in Ba Ria & Vung Tau</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display text-5xl font-black text-gradient">5K+</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">Happy students & alumni</div>
              </div>
              <div className="rounded-3xl gradient-pink p-6 text-primary-foreground shadow-pink">
                <div className="font-display text-5xl font-black">98%</div>
                <div className="mt-2 text-sm font-medium opacity-90">Parent satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
