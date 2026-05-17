import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Courses } from "@/components/site/Courses";
import { Gallery } from "@/components/site/Gallery";
import { Branches } from "@/components/site/Branches";
import { Contact } from "@/components/site/Contact";
import { BranchesMap } from "@/components/site/BranchesMap";
import { SocialContact } from "@/components/site/SocialContact";
import { Footer } from "@/components/site/Footer";
import { GeneralBenefits } from "@/components/site/GeneralBenefits";
import { IeltsCta } from "@/components/site/IeltsCta";
import { Reveal } from "@/components/site/Reveal";
import { SignupPopup } from "@/components/site/SignupPopup";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <Reveal variant="fade-up"><About /></Reveal>
      <Reveal variant="zoom"><Benefits /></Reveal>
      <Reveal variant="fade-up"><Courses /></Reveal>
      <Reveal variant="slide-right"><IeltsCta /></Reveal>
      <Reveal variant="fade-up"><GeneralBenefits /></Reveal>
      <Reveal variant="zoom"><Gallery /></Reveal>
      <Reveal variant="fade-up"><Branches /></Reveal>
      <Reveal variant="fade"><Contact /></Reveal>
      <Reveal variant="zoom"><BranchesMap /></Reveal>
      <Reveal variant="fade-up"><SocialContact /></Reveal>
      <Footer />
      <SignupPopup />
    </main>
  );
};

export default Index;
