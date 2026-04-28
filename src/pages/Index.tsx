import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Courses } from "@/components/site/Courses";
import { Gallery } from "@/components/site/Gallery";
import { Branches } from "@/components/site/Branches";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <Gallery />
      <Branches />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
