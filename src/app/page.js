import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Intro } from "@/components/features/Intro";
import { CaseModal } from "@/components/features/CaseModal";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Work />
        <Approach />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
      <CaseModal />
    </div>
  );
}
