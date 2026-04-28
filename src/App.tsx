import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { DarkPain } from "./components/sections/DarkPain";
import { Manifest } from "./components/sections/Manifest";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Course } from "./components/sections/Course";
import { Pricing } from "./components/sections/Pricing";
import { FaqAndFinalCta } from "./components/sections/FaqAndFinalCta";
import { ConsentBanner } from "./components/ConsentBanner";

export function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <DarkPain />
        <Manifest />
        <HowItWorks />
        <Course />
        <Pricing />
        <FaqAndFinalCta />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
}
