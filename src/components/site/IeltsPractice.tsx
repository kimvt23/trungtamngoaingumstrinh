import { useEffect, useRef, useState } from "react";
import { Headphones, Play, Pause, RotateCcw, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
  id: number;
  q: string;
  options: { value: string; label: string }[];
  answer: string;
};

type Part = {
  id: string;
  title: string;
  subtitle: string;
  audio: string;
  questions: Question[];
};

const ABC = (...labels: string[]) =>
  labels.map((l, i) => ({ value: ["A", "B", "C", "D"][i], label: l }));

const PARTS: Part[] = [
  {
    id: "part2",
    title: "Part 2 — The Elmsden Way",
    subtitle: "Cycling route information",
    audio: "/ielts/Part_2.mp3",
    questions: [
      {
        id: 15,
        q: "What warning does the speaker give about cycling on the Elmsden Way?",
        options: ABC(
          "The roads usually have heavy traffic.",
          "Bad weather can cause problems.",
          "There may be animals on the cycle path."
        ),
        answer: "C",
      },
      {
        id: 16,
        q: "What does the speaker say about Elmsden Station?",
        options: ABC(
          "It is a very busy station.",
          "It has been modernized.",
          "It reopened recently."
        ),
        answer: "C",
      },
      {
        id: 17,
        q: "In the Visitors' Centre, people can",
        options: ABC(
          "hire a bicycle.",
          "buy refreshments.",
          "learn about local history."
        ),
        answer: "A",
      },
      {
        id: 18,
        q: "If cyclists want to travel between Elmsden and Langton by train,",
        options: ABC(
          "they need to book in advance.",
          "they have to travel at the weekend.",
          "they must pay an additional charge for their bicycle."
        ),
        answer: "B",
      },
      {
        id: 19,
        q: "What warning does the speaker give about walking to the River Elm?",
        options: ABC(
          "It can take a long time to get back.",
          "There is nowhere to leave bicycles.",
          "The waterfall is inaccessible on foot."
        ),
        answer: "A",
      },
      {
        id: 20,
        q: "To find out about other cycle paths in the region, you can",
        options: ABC(
          "look in the local newspaper.",
          "check the radio station website.",
          "ring up the national cycle network."
        ),
        answer: "A",
      },
    ],
  },
];

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const restart = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play();
    setPlaying(true);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    a.currentTime = (Number(e.target.value) / 100) * a.duration;
  };

  const fmt = (t: number) => {
    if (!Number.isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="rounded-3xl border border-secondary/40 bg-gradient-to-br from-secondary/15 via-background to-background p-5 shadow-soft">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-14 w-14 place-items-center rounded-full gradient-warm text-primary-foreground shadow-glow transition-smooth hover:scale-110 active:scale-95"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={restart}
          aria-label="Restart"
          className="grid h-11 w-11 place-items-center rounded-full bg-card border border-border text-foreground/70 hover:text-primary hover:border-primary transition-smooth"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={seek}
            className="w-full h-2 rounded-full appearance-none bg-muted accent-primary cursor-pointer"
          />
          <div className="mt-1.5 flex justify-between text-xs font-medium text-muted-foreground tabular-nums">
            <span>{fmt(current)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IeltsPractice = () => {
  const [activePartId, setActivePartId] = useState(PARTS[0].id);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const part = PARTS.find((p) => p.id === activePartId)!;

  const score = part.questions.reduce(
    (n, q) => n + (answers[q.id] === q.answer ? 1 : 0),
    0
  );

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const switchPart = (id: string) => {
    setActivePartId(id);
    reset();
  };

  return (
    <section id="ielts" className="py-20 lg:py-28 gradient-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            <Headphones className="h-4 w-4 text-primary" />
            Practice IELTS
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Luyện thi <span className="text-gradient">IELTS Listening</span> miễn phí
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nghe audio chính thức và chọn đáp án đúng. Nhấn "Nộp bài" để xem điểm và đáp án ngay lập tức.
          </p>
        </div>

        {PARTS.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {PARTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => switchPart(p.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-smooth border-2",
                  activePartId === p.id
                    ? "gradient-warm text-primary-foreground border-transparent shadow-glow"
                    : "bg-card text-foreground/70 border-border hover:border-primary hover:text-primary"
                )}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}

        <div className="mx-auto max-w-3xl rounded-[2rem] bg-card border border-border shadow-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
            <div>
              <h3 className="font-display text-2xl font-bold">{part.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{part.subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-foreground/80">
              {part.questions.length} câu hỏi
            </span>
          </div>

          <AudioPlayer src={part.audio} />

          <ol className="mt-8 space-y-6">
            {part.questions.map((q, idx) => {
              const userVal = answers[q.id];
              const isCorrect = submitted && userVal === q.answer;
              const isWrong = submitted && userVal && userVal !== q.answer;
              return (
                <li
                  key={q.id}
                  className={cn(
                    "rounded-2xl border-2 p-5 transition-smooth",
                    !submitted && "border-border hover:border-secondary/60",
                    isCorrect && "border-green-500/50 bg-green-500/5",
                    isWrong && "border-destructive/40 bg-destructive/5",
                    submitted && !userVal && "border-border bg-muted/40"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full gradient-warm text-primary-foreground text-sm font-bold">
                      {idx + 1}
                    </span>
                    <p className="font-semibold text-foreground leading-snug">{q.q}</p>
                  </div>

                  <div className="mt-4 space-y-2 pl-11">
                    {q.options.map((opt) => {
                      const selected = userVal === opt.value;
                      const correctOne = submitted && opt.value === q.answer;
                      const wrongPick = submitted && selected && opt.value !== q.answer;
                      return (
                        <label
                          key={opt.value}
                          className={cn(
                            "flex items-start gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer transition-smooth",
                            !submitted && selected && "border-primary bg-primary/5",
                            !submitted && !selected && "border-border hover:border-primary/40 hover:bg-secondary/10",
                            correctOne && "border-green-500 bg-green-500/10",
                            wrongPick && "border-destructive bg-destructive/10",
                            submitted && "cursor-default"
                          )}
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt.value}
                            checked={selected || false}
                            disabled={submitted}
                            onChange={() =>
                              setAnswers((a) => ({ ...a, [q.id]: opt.value }))
                            }
                            className="mt-1 accent-primary"
                          />
                          <span className="flex-1">
                            <span className="font-bold mr-2 text-primary">{opt.value}.</span>
                            <span className="text-sm">{opt.label}</span>
                          </span>
                          {correctOne && <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />}
                          {wrongPick && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                        </label>
                      );
                    })}
                  </div>

                  {submitted && (
                    <p className="mt-3 pl-11 text-xs font-semibold">
                      Đáp án đúng:{" "}
                      <span className="text-green-600">{q.answer}</span>
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            {submitted ? (
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/30 px-5 py-3">
                <Trophy className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Kết quả</div>
                  <div className="font-display font-extrabold text-xl">
                    {score} / {part.questions.length} câu đúng
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Đã trả lời {Object.keys(answers).length}/{part.questions.length} câu
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-smooth"
              >
                <RotateCcw className="h-4 w-4" /> Làm lại
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                disabled={submitted || Object.keys(answers).length === 0}
                className="inline-flex items-center gap-2 rounded-full gradient-warm px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-smooth hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
