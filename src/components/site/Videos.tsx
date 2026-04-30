import { Play } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import poster1 from "@/assets/photo-w2.jpg";
import poster2 from "@/assets/photo-w4.jpg";
import poster3 from "@/assets/photo-w6.jpg";

// Placeholder MP4s — easy to swap with real classroom videos later.
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const Videos = () => {
  const { t } = useLang();
  const videos = [
    { title: t("videos.1.title"), poster: poster1, src: SAMPLE_VIDEO },
    { title: t("videos.2.title"), poster: poster2, src: SAMPLE_VIDEO },
    { title: t("videos.3.title"), poster: poster3, src: SAMPLE_VIDEO },
  ];

  return (
    <section id="videos" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
            {t("videos.kicker")}
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            {t("videos.title.main")}{" "}
            <span className="bg-secondary/60 px-2 rounded">{t("videos.title.accent")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("videos.desc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card hover:border-secondary animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-video bg-muted">
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  preload="none"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <track kind="captions" />
                </video>
                <div className="pointer-events-none absolute inset-0 grid place-items-center bg-foreground/10 opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};