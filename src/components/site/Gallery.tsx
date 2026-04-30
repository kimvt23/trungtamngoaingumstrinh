import g1 from "@/assets/photo-w1.jpg";
import g2 from "@/assets/photo-w2.jpg";
import g3 from "@/assets/photo-w3.jpg";
import g4 from "@/assets/photo-w4.jpg";
import g5 from "@/assets/photo-w5.jpg";
import g6 from "@/assets/photo-w6.jpg";
import g7 from "@/assets/photo-w7.jpg";
import g8 from "@/assets/photo-w8.jpg";
import { useLang } from "@/i18n/LanguageContext";

const images = [
  { src: g1, alt: "Students receiving certificates", className: "lg:col-span-2 lg:row-span-2" },
  { src: g2, alt: "Cambridge top score student" },
  { src: g4, alt: "Outdoor activity with students", className: "lg:row-span-2" },
  { src: g5, alt: "Fun kindergarten class" },
  { src: g3, alt: "Halloween activity for kids" },
  { src: g6, alt: "IELTS class with teacher", className: "lg:col-span-2" },
  { src: g7, alt: "Students showing their drawings in class" },
  { src: g8, alt: "Group study activity in classroom", className: "lg:col-span-2" },
];

export const Gallery = () => {
  const { t } = useLang();
  return (
    <section id="gallery" className="py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">{t("gallery.kicker")}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t("gallery.title.main")} <span className="bg-secondary/60 px-2 rounded">{t("gallery.title.accent")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t("gallery.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-soft transition-smooth hover:shadow-card ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
