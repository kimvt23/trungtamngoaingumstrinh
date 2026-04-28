import { MapPin, Navigation } from "lucide-react";

const branches = [
  { code: "CN1", address: "218 Nguyễn Hữu Thọ", city: "Bà Rịa", gradient: "gradient-warm" },
  { code: "CN2", address: "492 Điện Biên Phủ, Long Toàn", city: "Bà Rịa", gradient: "gradient-pink" },
  { code: "CN3", address: "420 Trương Công Định", city: "Vũng Tàu", gradient: "gradient-warm" },
];

export const Branches = () => {
  return (
    <section id="branches" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Tìm chúng tôi</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Ba chi nhánh tại <span className="text-gradient">Bà Rịa & Vũng Tàu</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hãy ghé thăm chi nhánh gần bạn nhất — chúng tôi rất mong được đón tiếp bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <article
              key={b.code}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute -top-16 -right-16 h-44 w-44 rounded-full ${b.gradient} opacity-20 blur-2xl`} />
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${b.gradient} text-primary-foreground shadow-glow`}>
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="font-display text-3xl font-extrabold text-gradient">{b.code}</div>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{b.address}</h3>
              <p className="mt-1 text-muted-foreground">{b.city}</p>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(`${b.address}, ${b.city}, Vietnam`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                <Navigation className="h-4 w-4" /> Chỉ đường
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
