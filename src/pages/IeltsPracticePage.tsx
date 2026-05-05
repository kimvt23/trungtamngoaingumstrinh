import { IeltsPractice } from "@/components/site/IeltsPractice";
import { IeltsReading } from "@/components/site/IeltsReading";
import logo from "@/assets/logo.png";

const IeltsPracticePage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-40">
        <div className="container-x flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="English Center" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold">IELTS Practice Tests</div>
              <div className="text-[11px] text-muted-foreground">Listening & Reading · Free practice</div>
            </div>
          </a>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted transition-smooth"
          >
            ← Back to Home
          </a>
        </div>
      </header>
      <IeltsPractice />
      <IeltsReading />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} English Center · IELTS Practice
      </footer>
    </main>
  );
};

export default IeltsPracticePage;