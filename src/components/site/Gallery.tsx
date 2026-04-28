import gClassroom from "@/assets/photo-classroom.jpg";
import gIelts from "@/assets/photo-ielts.jpg";
import gEvent from "@/assets/photo-event.jpg";

const images = [
  { src: gClassroom, alt: "Happy students celebrating in our classroom", className: "lg:col-span-2 lg:row-span-2" },
  { src: gIelts, alt: "Student receiving IELTS test report at Ms Trinh IELTS center" },
  { src: gEvent, alt: "Community event with students and families outside the center", className: "lg:row-span-2" },
  { src: gClassroom, alt: "Students raising hands in class" },
  { src: gIelts, alt: "Proud IELTS achievement moment" },
  { src: gEvent, alt: "Outdoor celebration with balloons", className: "lg:col-span-2" },
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
