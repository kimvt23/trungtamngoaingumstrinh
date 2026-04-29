import { useEffect, useRef, useState } from "react";
import { Headphones, Play, Pause, RotateCcw, CheckCircle2, XCircle, Trophy, FileText, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
  id: number;
  q: string;
  options: { value: string; label: string }[];
  answer: string;
  keyword: string;        // key phrase from the audio
  explanation: string;    // why the answer is correct
};

type Part = {
  id: string;
  title: string;
  subtitle: string;
  audio: string;          // easy to replace later
  transcript: string;
  questions: Question[];
};

const ABC = (...labels: string[]) =>
  labels.map((l, i) => ({ value: ["A", "B", "C", "D"][i], label: l }));

/* -------------------------------------------------------------------------- */
/*  IELTS PRACTICE DATA — placeholder audio (/ielts/Part_X.mp3, swap anytime) */
/* -------------------------------------------------------------------------- */
const PARTS: Part[] = [
  {
    id: "part1",
    title: "Part 1 — Booking a Hotel",
    subtitle: "A phone conversation between a guest and a receptionist",
    audio: "/ielts/Part_1.mp3",
    transcript:
      "Receptionist: Good morning, Sunrise Hotel, how can I help you?\n" +
      "Guest: Hi, I'd like to book a room for next weekend, please. From Friday to Sunday — two nights.\n" +
      "Receptionist: Of course. May I have your full name?\n" +
      "Guest: It's Daniel Carter — that's C-A-R-T-E-R.\n" +
      "Receptionist: Thank you, Mr Carter. We have a single room for £80 a night, and a double for £110.\n" +
      "Guest: I'll take the double, please. Does breakfast cost extra?\n" +
      "Receptionist: Breakfast is included in the double room. We also offer free parking.\n" +
      "Guest: Great. One more question — is there a swimming pool?\n" +
      "Receptionist: Yes, the pool is open from 7am to 9pm. The gym closes at 8pm.\n" +
      "Guest: Perfect. Could I pay by credit card?\n" +
      "Receptionist: Certainly. We'll send a confirmation email to confirm@... what's your email?\n" +
      "Guest: daniel.carter@mail.com.",
    questions: [
      {
        id: 1,
        q: "How many nights does the guest want to stay?",
        options: ABC("One night", "Two nights", "Three nights"),
        answer: "B",
        keyword: "“From Friday to Sunday — two nights.”",
        explanation: "The guest explicitly says 'two nights', from Friday to Sunday.",
      },
      {
        id: 2,
        q: "What is the guest's surname?",
        options: ABC("Carver", "Carter", "Cartier"),
        answer: "B",
        keyword: "“Daniel Carter — that's C-A-R-T-E-R.”",
        explanation: "He spells it out letter by letter: C-A-R-T-E-R.",
      },
      {
        id: 3,
        q: "How much does a double room cost per night?",
        options: ABC("£80", "£100", "£110"),
        answer: "C",
        keyword: "“a double for £110”",
        explanation: "The receptionist gives two prices and the guest picks the £110 double room.",
      },
      {
        id: 4,
        q: "What is included in the double room?",
        options: ABC("Breakfast", "Dinner", "Airport transfer"),
        answer: "A",
        keyword: "“Breakfast is included in the double room.”",
        explanation: "She mentions breakfast specifically as included.",
      },
      {
        id: 5,
        q: "When does the gym close?",
        options: ABC("7pm", "8pm", "9pm"),
        answer: "B",
        keyword: "“The gym closes at 8pm.”",
        explanation: "The pool runs until 9pm, but the gym closes one hour earlier — at 8pm. Don't confuse the two.",
      },
      {
        id: 6,
        q: "How will the guest pay?",
        options: ABC("Cash", "Bank transfer", "Credit card"),
        answer: "C",
        keyword: "“Could I pay by credit card?”",
        explanation: "He asks to pay by credit card and the receptionist agrees.",
      },
    ],
  },
  {
    id: "part2",
    title: "Part 2 — The Elmsden Way",
    subtitle: "A short talk about a cycling route",
    audio: "/ielts/Part_2.mp3",
    transcript:
      "Welcome to today's introduction to the Elmsden Way. The cycle path is mainly quiet, but please be careful — sheep and deer often cross the path, especially in the early morning. Elmsden Station, which had been closed for years, has just reopened, so you can now start your ride right from the platform. Inside the Visitors' Centre you can hire a bicycle for the day; refreshments and historical exhibits are available in the village instead. If you want to take your bike on the train between Elmsden and Langton, please note this is only allowed at the weekend. We recommend a short walk to the River Elm — but keep in mind the return walk is uphill and can take much longer than expected. For information about other cycle paths in the region, look in the local newspaper, which lists routes every Saturday.",
    questions: [
      {
        id: 7,
        q: "What warning does the speaker give about cycling on the Elmsden Way?",
        options: ABC(
          "The roads usually have heavy traffic.",
          "Bad weather can cause problems.",
          "There may be animals on the cycle path."
        ),
        answer: "C",
        keyword: "“sheep and deer often cross the path”",
        explanation: "The warning is about animals (sheep and deer) crossing — not traffic or weather.",
      },
      {
        id: 8,
        q: "What does the speaker say about Elmsden Station?",
        options: ABC(
          "It is a very busy station.",
          "It has been modernized.",
          "It reopened recently."
        ),
        answer: "C",
        keyword: "“has just reopened”",
        explanation: "The station 'had been closed for years' and 'has just reopened' — that means it reopened recently.",
      },
      {
        id: 9,
        q: "In the Visitors' Centre, people can",
        options: ABC(
          "hire a bicycle.",
          "buy refreshments.",
          "learn about local history."
        ),
        answer: "A",
        keyword: "“you can hire a bicycle for the day”",
        explanation: "Refreshments and history are 'in the village instead'. Only bike hire is at the Visitors' Centre.",
      },
      {
        id: 10,
        q: "If cyclists want to travel between Elmsden and Langton by train,",
        options: ABC(
          "they need to book in advance.",
          "they have to travel at the weekend.",
          "they must pay an additional charge for their bicycle."
        ),
        answer: "B",
        keyword: "“only allowed at the weekend”",
        explanation: "Bikes on the train are only allowed at weekends — no booking or extra fee is mentioned.",
      },
      {
        id: 11,
        q: "What warning does the speaker give about walking to the River Elm?",
        options: ABC(
          "It can take a long time to get back.",
          "There is nowhere to leave bicycles.",
          "The waterfall is inaccessible on foot."
        ),
        answer: "A",
        keyword: "“the return walk is uphill and can take much longer than expected”",
        explanation: "The speaker warns the walk back is uphill and slow — i.e. takes a long time.",
      },
      {
        id: 12,
        q: "To find out about other cycle paths in the region, you can",
        options: ABC(
          "look in the local newspaper.",
          "check the radio station website.",
          "ring up the national cycle network."
        ),
        answer: "A",
        keyword: "“look in the local newspaper”",
        explanation: "The newspaper lists routes every Saturday. No website or phone number is mentioned.",
      },
    ],
  },
  {
    id: "part3",
    title: "Part 3 — Group Project Discussion",
    subtitle: "Two students discuss their psychology presentation",
    audio: "/ielts/Part_3.mp3",
    transcript:
      "Anna: So, Mark, are we ready for tomorrow's psychology presentation?\n" +
      "Mark: Almost. I think we should focus on memory rather than emotion — there's much more recent research on memory.\n" +
      "Anna: Agreed. And let's use a real-life case study instead of a survey, it's more engaging for the audience.\n" +
      "Mark: Good idea. About the slides — I think 10 slides is the maximum, otherwise we'll go over time.\n" +
      "Anna: Yes, the lecturer said clarity is more important than quantity.\n" +
      "Mark: Should I do the introduction?\n" +
      "Anna: Actually, I'd like to start, then you take the main analysis, and we can do the conclusion together.\n" +
      "Mark: Sounds fair. We should also rehearse twice — at least.\n" +
      "Anna: Definitely. And remember, no reading from the slides — eye contact only.",
    questions: [
      {
        id: 13,
        q: "What topic will the students focus on?",
        options: ABC("Emotion", "Memory", "Behaviour"),
        answer: "B",
        keyword: "“focus on memory rather than emotion”",
        explanation: "Mark suggests memory; Anna agrees. Emotion is rejected.",
      },
      {
        id: 14,
        q: "What method will they use to support their topic?",
        options: ABC("A survey", "A case study", "An experiment"),
        answer: "B",
        keyword: "“use a real-life case study instead of a survey”",
        explanation: "They explicitly choose a case study over a survey.",
      },
      {
        id: 15,
        q: "What is the maximum number of slides?",
        options: ABC("8", "10", "12"),
        answer: "B",
        keyword: "“10 slides is the maximum”",
        explanation: "Mark sets the limit at 10 slides to stay within the time.",
      },
      {
        id: 16,
        q: "Who will deliver the introduction?",
        options: ABC("Mark", "Anna", "Both together"),
        answer: "B",
        keyword: "“I'd like to start”",
        explanation: "Anna says she will start (introduction). Both together is only for the conclusion.",
      },
      {
        id: 17,
        q: "How many times should they rehearse?",
        options: ABC("Once", "Twice", "Three times"),
        answer: "B",
        keyword: "“we should also rehearse twice — at least”",
        explanation: "They agree to rehearse at least twice.",
      },
      {
        id: 18,
        q: "What is one rule for the presentation?",
        options: ABC(
          "No reading from slides.",
          "Always face the slides.",
          "Speak as fast as possible."
        ),
        answer: "A",
        keyword: "“no reading from the slides — eye contact only”",
        explanation: "Anna's final rule is no reading — keep eye contact with the audience.",
      },
    ],
  },
  {
    id: "part4",
    title: "Part 4 — Lecture: Honey Bees",
    subtitle: "A short university lecture on honey bee behaviour",
    audio: "/ielts/Part_4.mp3",
    transcript:
      "Good afternoon. Today's lecture explores how honey bees communicate. The most fascinating discovery is the 'waggle dance' — a movement performed inside the hive to share information about food sources. The dance was first described in detail in the 1940s by the Austrian scientist Karl von Frisch.\n\n" +
      "There are two main pieces of information encoded in the dance: the direction of the food and its distance. The angle of the dance, relative to vertical, indicates the direction of the food in relation to the sun. The duration of the waggle phase tells the other bees how far away the food is — the longer the dance, the greater the distance.\n\n" +
      "Bees also use chemical signals called pheromones to identify members of their own colony and to warn of danger. Recent research suggests pollution and pesticides can disrupt these chemical signals, which is one reason bee populations have declined. Conservation projects now focus on planting wildflowers and reducing pesticide use to protect these vital pollinators.",
    questions: [
      {
        id: 19,
        q: "What is the 'waggle dance' used for?",
        options: ABC(
          "Attracting a mate",
          "Sharing information about food",
          "Defending the hive"
        ),
        answer: "B",
        keyword: "“share information about food sources”",
        explanation: "The dance communicates where food is, not mating or defence.",
      },
      {
        id: 20,
        q: "Who first described the waggle dance in detail?",
        options: ABC("Charles Darwin", "Karl von Frisch", "Gregor Mendel"),
        answer: "B",
        keyword: "“the Austrian scientist Karl von Frisch”",
        explanation: "Karl von Frisch described it in the 1940s.",
      },
      {
        id: 21,
        q: "What does the angle of the dance show?",
        options: ABC(
          "The size of the food source",
          "The direction of the food in relation to the sun",
          "The number of bees needed"
        ),
        answer: "B",
        keyword: "“the angle of the dance ... indicates the direction of the food in relation to the sun”",
        explanation: "Angle = direction relative to the sun.",
      },
      {
        id: 22,
        q: "What does the duration of the waggle phase indicate?",
        options: ABC(
          "The distance to the food",
          "The quality of the food",
          "The time of day"
        ),
        answer: "A",
        keyword: "“the longer the dance, the greater the distance”",
        explanation: "Duration = distance. Longer dance, farther food.",
      },
      {
        id: 23,
        q: "Pheromones help bees to",
        options: ABC(
          "build the hive.",
          "identify their colony and warn of danger.",
          "navigate at night."
        ),
        answer: "B",
        keyword: "“identify members of their own colony and to warn of danger”",
        explanation: "Pheromones serve two functions in the lecture: identification and danger warnings.",
      },
      {
        id: 24,
        q: "What is one focus of current conservation projects?",
        options: ABC(
          "Building artificial hives",
          "Planting wildflowers and reducing pesticides",
          "Importing foreign bee species"
        ),
        answer: "B",
        keyword: "“planting wildflowers and reducing pesticide use”",
        explanation: "The lecture explicitly mentions these two conservation actions.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  AUDIO PLAYER                                                              */
/* -------------------------------------------------------------------------- */
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
  }, [src]);

  // pause when src changes
  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    setCurrent(0);
  }, [src]);

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
    <div className="rounded-3xl border border-secondary/40 bg-secondary/10 p-5 shadow-soft">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow transition-smooth hover:scale-110 active:scale-95"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={restart}
          aria-label="Restart"
          className="grid h-11 w-11 place-items-center rounded-full bg-card border border-border text-foreground/70 hover:text-foreground hover:border-secondary transition-smooth"
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
            className="w-full h-2 rounded-full appearance-none bg-muted accent-foreground cursor-pointer"
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

/* -------------------------------------------------------------------------- */
/*  MAIN SECTION                                                              */
/* -------------------------------------------------------------------------- */
export const IeltsPractice = () => {
  const [activePartId, setActivePartId] = useState(PARTS[0].id);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const part = PARTS.find((p) => p.id === activePartId)!;

  const score = part.questions.reduce(
    (n, q) => n + (answers[q.id] === q.answer ? 1 : 0),
    0
  );

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowTranscript(false);
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
            <Headphones className="h-4 w-4" />
            IELTS Listening Practice
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
            Practice the <span className="bg-secondary/60 px-2 rounded">real IELTS</span> format
          </h2>
          <p className="mt-4 text-muted-foreground">
            4 parts, just like the real exam. Listen, choose, submit — then review correct answers, key words from the audio and the full transcript.
          </p>
        </div>

        {/* Part tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PARTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => switchPart(p.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-smooth border-2",
                activePartId === p.id
                  ? "bg-secondary text-secondary-foreground border-transparent shadow-glow"
                  : "bg-card text-foreground/70 border-border hover:border-secondary hover:text-foreground"
              )}
            >
              {p.title.split(" — ")[0]}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-[2rem] bg-card border border-border shadow-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
            <div>
              <h3 className="font-display text-2xl font-bold">{part.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{part.subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-foreground/80">
              {part.questions.length} questions
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
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
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
                            !submitted && selected && "border-foreground bg-secondary/15",
                            !submitted && !selected && "border-border hover:border-secondary hover:bg-secondary/10",
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
                            className="mt-1 accent-foreground"
                          />
                          <span className="flex-1">
                            <span className="font-bold mr-2">{opt.value}.</span>
                            <span className="text-sm">{opt.label}</span>
                          </span>
                          {correctOne && <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />}
                          {wrongPick && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                        </label>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-4 ml-11 rounded-xl bg-secondary/15 border border-secondary/40 p-4 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        Correct answer: <span className="text-green-700">{q.answer}</span>
                      </p>
                      <p className="text-sm flex gap-2">
                        <Headphones className="h-4 w-4 mt-0.5 shrink-0 text-foreground/60" />
                        <span><span className="font-semibold">Keyword from audio:</span> <span className="italic">{q.keyword}</span></span>
                      </p>
                      <p className="text-sm flex gap-2">
                        <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-foreground/60" />
                        <span><span className="font-semibold">Explanation:</span> {q.explanation}</span>
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            {submitted ? (
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/30 px-5 py-3">
                <Trophy className="h-6 w-6" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Your score</div>
                  <div className="font-display font-extrabold text-xl">
                    {score} / {part.questions.length} correct
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Answered {Object.keys(answers).length}/{part.questions.length}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-secondary transition-smooth"
              >
                <RotateCcw className="h-4 w-4" /> Reset
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                disabled={submitted || Object.keys(answers).length === 0}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Transcript — available after submitting, audio still playable */}
          {submitted && (
            <div className="mt-8 rounded-2xl border border-border bg-muted/40 overflow-hidden">
              <button
                type="button"
                onClick={() => setShowTranscript((s) => !s)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold hover:bg-muted transition-smooth"
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {showTranscript ? "Hide transcript" : "Show full transcript"}
                </span>
                <span className="text-xs text-muted-foreground">Replay the audio above while you read</span>
              </button>
              {showTranscript && (
                <div className="px-5 pb-5 pt-1 text-sm leading-relaxed whitespace-pre-line text-foreground/80">
                  {part.transcript}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
