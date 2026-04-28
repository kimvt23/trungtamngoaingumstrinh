import g1 from "@/assets/photo-w1.jpg";
import g2 from "@/assets/photo-w2.jpg";
import g3 from "@/assets/photo-w3.jpg";
import g4 from "@/assets/photo-w4.jpg";
import g5 from "@/assets/photo-w5.jpg";
import g6 from "@/assets/photo-w6.jpg";

const images = [
  { src: g1, alt: "Học viên Ms Trinh nhận chứng nhận thành tích", className: "lg:col-span-2 lg:row-span-2" },
  { src: g2, alt: "Học viên đạt điểm tối đa Cambridge" },
  { src: g4, alt: "Hoạt động ngoại khóa cùng học sinh", className: "lg:row-span-2" },
  { src: g5, alt: "Lớp học mầm non vui nhộn tại Ms Trinh" },
  { src: g3, alt: "Hoạt động Halloween thú vị cho bé" },
  { src: g6, alt: "Lớp học IELTS với giáo viên bản ngữ", className: "lg:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Cộng đồng của chúng tôi</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Khoảnh khắc tại <span className="text-gradient">lớp học</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Bước vào Ms Trinh — học tập vui vẻ, tập trung và những thành tích đáng tự hào.
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
