import About from "@/components/abt";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
    <div className="bg-[#F4F4F4] h-full w-full">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
