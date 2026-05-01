import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Courses } from "@/components/site/Courses";
import { IeltsPractice } from "@/components/site/IeltsPractice";
import { IeltsReading } from "@/components/site/IeltsReading";
import { Gallery } from "@/components/site/Gallery";
import { Branches } from "@/components/site/Branches";
import { Contact } from "@/components/site/Contact";
import { SocialContact } from "@/components/site/SocialContact";
import { NetlifyContactForm } from "@/components/site/NetlifyContactForm";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <IeltsPractice />
      <IeltsReading />
      <Gallery />
      <Branches />
      <Contact />
      <NetlifyContactForm />
      <SocialContact />
      <Footer />
    </main>
  );
};

export default Index;
