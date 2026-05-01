import { useState } from "react";
import { BookOpen, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

type MCQ = {
  id: string;
  q: string;
  options: { value: string; label: string }[];
  answer: string;
  explanation: string;
};

type TFNG = {
  id: string;
  statement: string;
  answer: "TRUE" | "FALSE" | "NOT GIVEN";
  explanation: string;
};

type Matching = {
  id: string;
  paragraph: string;
  answer: string;
  explanation: string;
};

type Completion = {
  id: string;
  before: string;
  after: string;
  answer: string;
  explanation: string;
};

const PASSAGE = `Cities around the world are rethinking how people move. In many European capitals, planners now prioritise pedestrians and cyclists over private cars. Wider pavements, protected bike lanes and low-speed zones have become standard features in renewed neighbourhoods. Studies show that when streets are calmer, local shops earn more, not less, because more people walk past and stop in.

Public transport is also being reshaped. Electric buses are quieter and cleaner than diesel models, and several cities have made short trips on them free of charge. The aim is simple: reduce traffic, cut air pollution, and give residents back their streets. Critics, however, warn that such schemes only succeed if buses run frequently and reliably enough to compete with the private car.`;

const MCQ_DATA: MCQ[] = [
  {
    id: "mcq1",
    q: "What do European planners now prioritise in city streets?",
    options: [
      { value: "A", label: "Private cars" },
      { value: "B", label: "Pedestrians and cyclists" },
      { value: "C", label: "Delivery vehicles" },
      { value: "D", label: "Taxis" },
    ],
    answer: "B",
    explanation: "The text says planners 'prioritise pedestrians and cyclists over private cars'.",
  },
  {
    id: "mcq2",
    q: "According to the passage, what happens to local shops on calmer streets?",
    options: [
      { value: "A", label: "They lose customers" },
      { value: "B", label: "They have to close earlier" },
      { value: "C", label: "They earn more money" },
      { value: "D", label: "They move to other areas" },
    ],
    answer: "C",
    explanation: "'Local shops earn more, not less, because more people walk past and stop in.'",
  },
  {
    id: "mcq3",
    q: "What is one advantage of electric buses mentioned in the passage?",
    options: [
      { value: "A", label: "They are faster than diesel buses" },
      { value: "B", label: "They are quieter and cleaner" },
      { value: "C", label: "They are cheaper to build" },
      { value: "D", label: "They never break down" },
    ],
    answer: "B",
    explanation: "'Electric buses are quieter and cleaner than diesel models.'",
  },
];

const TFNG_DATA: TFNG[] = [
  {
    id: "tf1",
    statement: "Wider pavements and protected bike lanes are common in renewed European neighbourhoods.",
    answer: "TRUE",
    explanation: "The text states these have 'become standard features in renewed neighbourhoods'.",
  },
  {
    id: "tf2",
    statement: "Calming traffic reduces income for local shops.",
    answer: "FALSE",
    explanation: "The opposite is stated: shops 'earn more, not less'.",
  },
  {
    id: "tf3",
    statement: "Most European cities have already made all bus trips free.",
    answer: "NOT GIVEN",
    explanation: "Only 'several cities' offer free 'short trips' — nothing is said about most cities or all trips.",
  },
];

const HEADINGS = [
  { id: "i", label: "i. The role of public transport reform" },
  { id: "ii", label: "ii. Rethinking street design for people" },
  { id: "iii", label: "iii. The history of European architecture" },
];

const MATCHING_DATA: Matching[] = [
  {
    id: "m1",
    paragraph: "Paragraph 1",
    answer: "ii",
    explanation: "Paragraph 1 is about pedestrians, cyclists, pavements and bike lanes — i.e. designing streets for people.",
  },
  {
    id: "m2",
    paragraph: "Paragraph 2",
    answer: "i",
    explanation: "Paragraph 2 focuses on buses, fares and reform of public transport.",
  },
  {
    id: "m3",
    paragraph: "Overall theme",
    answer: "ii",
    explanation: "The overall focus is rethinking streets and transport for people, not private cars.",
  },
];

const COMPLETION_DATA: Completion[] = [
  {
    id: "c1",
    before: "Wider pavements, protected bike lanes and low-speed zones have become standard features in renewed",
    after: ".",
    answer: "neighbourhoods",
    explanation: "Direct lift from the passage: '...in renewed neighbourhoods.' (also accepts 'neighborhoods').",
  },
  {
    id: "c2",
    before: "Electric buses are quieter and",
    after: "than diesel models.",
    answer: "cleaner",
    explanation: "'Electric buses are quieter and cleaner than diesel models.'",
  },
  {
    id: "c3",
    before: "Critics warn that schemes only succeed if buses run frequently and",
    after: "enough to compete with the private car.",
    answer: "reliably",
    explanation: "'...if buses run frequently and reliably enough to compete with the private car.'",
  },
];

const ScorePill = ({ score, total }: { score: number; total: number }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-1.5 text-sm font-bold text-foreground">
    <Trophy className="h-4 w-4" />
    {score}/{total}
  </div>
);

const Feedback = ({ correct, explanation }: { correct: boolean; explanation: string }) => (
  <div
    className={cn(
      "mt-2 flex items-start gap-2 rounded-xl px-3 py-2 text-sm",
      correct
        ? "bg-green-50 text-green-800 border border-green-200"
        : "bg-red-50 text-red-800 border border-red-200"
    )}
  >
    {correct ? (
      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
    ) : (
      <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
    )}
    <span className="leading-relaxed">{explanation}</span>
  </div>
);

const CheckButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
  >
    Kiểm tra đáp án
  </button>
);

const ResetButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-bold transition-smooth hover:border-secondary"
  >
    Làm lại
  </button>
);

const Part1MCQ = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = MCQ_DATA.filter((q) => answers[q.id] === q.answer).length;
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-xl font-bold">Part 1 — Multiple Choice</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose the best answer (A, B, C or D).</p>
        </div>
        {submitted && <ScorePill score={score} total={MCQ_DATA.length} />}
      </div>

      <div className="mt-6 space-y-6">
        {MCQ_DATA.map((q, idx) => {
          const userAns = answers[q.id];
          const isCorrect = userAns === q.answer;
          return (
            <div key={q.id}>
              <p className="font-semibold text-sm">{idx + 1}. {q.q}</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                {q.options.map((opt) => {
                  const selected = userAns === opt.value;
                  const isAnswer = opt.value === q.answer;
                  let cls = "border-border bg-background hover:border-secondary hover:bg-secondary/10";
                  if (submitted) {
                    if (isAnswer) cls = "border-green-400 bg-green-50 text-green-900";
                    else if (selected && !isAnswer) cls = "border-red-400 bg-red-50 text-red-900";
                    else cls = "border-border bg-background opacity-70";
                  } else if (selected) {
                    cls = "border-secondary bg-secondary/20";
                  }
                  return (
                    <label key={opt.value} className={cn("flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm cursor-pointer transition-smooth", cls)}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        checked={selected || false}
                        disabled={submitted}
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt.value }))}
                        className="mt-1 accent-foreground"
                      />
                      <span><span className="font-bold mr-1">{opt.value}.</span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <Feedback
                  correct={isCorrect}
                  explanation={isCorrect ? `Correct. ${q.explanation}` : `Correct answer: ${q.answer}. ${q.explanation}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? <CheckButton onClick={() => setSubmitted(true)} /> : <ResetButton onClick={reset} />}
      </div>
    </div>
  );
};

const TF_OPTIONS: ("TRUE" | "FALSE" | "NOT GIVEN")[] = ["TRUE", "FALSE", "NOT GIVEN"];

const Part2TFNG = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = TFNG_DATA.filter((q) => answers[q.id] === q.answer).length;
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-xl font-bold">Part 2 — True / False / Not Given</h3>
          <p className="text-sm text-muted-foreground mt-1">Decide whether each statement agrees with the passage.</p>
        </div>
        {submitted && <ScorePill score={score} total={TFNG_DATA.length} />}
      </div>

      <div className="mt-6 space-y-6">
        {TFNG_DATA.map((q, idx) => {
          const userAns = answers[q.id];
          const isCorrect = userAns === q.answer;
          return (
            <div key={q.id}>
              <p className="font-semibold text-sm">{idx + 1}. {q.statement}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TF_OPTIONS.map((opt) => {
                  const selected = userAns === opt;
                  const isAnswer = opt === q.answer;
                  let cls = "border-border bg-background hover:border-secondary hover:bg-secondary/10";
                  if (submitted) {
                    if (isAnswer) cls = "border-green-400 bg-green-50 text-green-900";
                    else if (selected && !isAnswer) cls = "border-red-400 bg-red-50 text-red-900";
                    else cls = "border-border bg-background opacity-70";
                  } else if (selected) {
                    cls = "border-secondary bg-secondary/20";
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                      className={cn("rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-smooth", cls)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <Feedback
                  correct={isCorrect}
                  explanation={isCorrect ? `Correct. ${q.explanation}` : `Correct answer: ${q.answer}. ${q.explanation}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? <CheckButton onClick={() => setSubmitted(true)} /> : <ResetButton onClick={reset} />}
      </div>
    </div>
  );
};

const Part3Matching = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = MATCHING_DATA.filter((m) => answers[m.id] === m.answer).length;
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-xl font-bold">Part 3 — Matching Headings</h3>
          <p className="text-sm text-muted-foreground mt-1">Match each paragraph with the most suitable heading.</p>
        </div>
        {submitted && <ScorePill score={score} total={MATCHING_DATA.length} />}
      </div>

      <div className="mt-5 rounded-2xl bg-secondary/10 border border-secondary/30 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">Headings</p>
        <ul className="space-y-1 text-sm">
          {HEADINGS.map((h) => (
            <li key={h.id} className="text-foreground/80">{h.label}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-5">
        {MATCHING_DATA.map((m) => {
          const userAns = answers[m.id];
          const isCorrect = userAns === m.answer;
          return (
            <div key={m.id}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold text-sm min-w-[120px]">{m.paragraph}</span>
                <select
                  value={userAns ?? ""}
                  disabled={submitted}
                  onChange={(e) => setAnswers((a) => ({ ...a, [m.id]: e.target.value }))}
                  className={cn(
                    "rounded-2xl border bg-background px-4 py-2.5 text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary",
                    submitted && isCorrect && "border-green-400 bg-green-50",
                    submitted && !isCorrect && "border-red-400 bg-red-50",
                    !submitted && "border-input"
                  )}
                >
                  <option value="">— Select heading —</option>
                  {HEADINGS.map((h) => (
                    <option key={h.id} value={h.id}>{h.label}</option>
                  ))}
                </select>
              </div>
              {submitted && (
                <Feedback
                  correct={isCorrect}
                  explanation={isCorrect ? `Correct. ${m.explanation}` : `Correct heading: ${m.answer}. ${m.explanation}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? <CheckButton onClick={() => setSubmitted(true)} /> : <ResetButton onClick={reset} />}
      </div>
    </div>
  );
};

const Part4Completion = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const norm = (s: string) => s.trim().toLowerCase().replace(/neighborhoods/g, "neighbourhoods");
  const score = COMPLETION_DATA.filter((c) => norm(answers[c.id] ?? "") === norm(c.answer)).length;
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-xl font-bold">Part 4 — Sentence Completion</h3>
          <p className="text-sm text-muted-foreground mt-1">Fill in each blank with ONE word from the passage.</p>
        </div>
        {submitted && <ScorePill score={score} total={COMPLETION_DATA.length} />}
      </div>

      <div className="mt-6 space-y-6">
        {COMPLETION_DATA.map((c, idx) => {
          const userAns = answers[c.id] ?? "";
          const isCorrect = norm(userAns) === norm(c.answer);
          return (
            <div key={c.id}>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold mr-1">{idx + 1}.</span>
                {c.before}{" "}
                <input
                  type="text"
                  value={userAns}
                  disabled={submitted}
                  onChange={(e) => setAnswers((a) => ({ ...a, [c.id]: e.target.value }))}
                  className={cn(
                    "inline-block rounded-xl border bg-background px-3 py-1.5 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-secondary",
                    submitted && isCorrect && "border-green-400 bg-green-50 text-green-900",
                    submitted && !isCorrect && "border-red-400 bg-red-50 text-red-900",
                    !submitted && "border-input"
                  )}
                  placeholder="________"
                />{" "}
                {c.after}
              </p>
              {submitted && (
                <Feedback
                  correct={isCorrect}
                  explanation={isCorrect ? `Correct. ${c.explanation}` : `Correct answer: "${c.answer}". ${c.explanation}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? <CheckButton onClick={() => setSubmitted(true)} /> : <ResetButton onClick={reset} />}
      </div>
    </div>
  );
};

export const IeltsReading = () => {
  return (
    <section id="ielts-reading" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
            <BookOpen className="h-4 w-4" /> IELTS Reading
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            Luyện tập <span className="bg-secondary/60 px-2 rounded">IELTS Reading</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Đọc đoạn văn bên dưới rồi hoàn thành 4 phần bài tập. Bấm "Kiểm tra đáp án" để xem điểm và giải thích.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-secondary/10 border border-secondary/30 p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold mb-3">Reading Passage — Greener Cities</h3>
          <div className="space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed whitespace-pre-line">
            {PASSAGE}
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <Part1MCQ />
          <Part2TFNG />
          <Part3Matching />
          <Part4Completion />
        </div>
      </div>
    </section>
  );
};

export default IeltsReading;
