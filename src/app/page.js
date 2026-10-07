import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     {/* <Skills/> */}
     <Projects/>
     <Experience/>
     <Education/>
     <Contact/>
    </div>
  );
}
