import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Kindergarten class learning the alphabet", className: "lg:col-span-2 lg:row-span-2" },
  { src: g2, alt: "Teen students studying with laptops" },
  { src: g3, alt: "Adult communication class" },
  { src: g4, alt: "Teacher giving high five" },
  { src: g5, alt: "IELTS preparation class" },
  { src: g6, alt: "Graduation celebration", className: "lg:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our community</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Moments from our <span className="text-gradient">classrooms</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Step inside Sunrise — joyful learning, focused study, and proud achievements.
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
