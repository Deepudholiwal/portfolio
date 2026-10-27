import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkillsSphere from "@/components/SkillsSphere";
import Testimonials from "@/components/Testimonials";
import VisitorTracker from "@/components/VisitorTracker";
import CursorGlow from "@/components/CursorGlow";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ParticleCanvas />
      <main className="relative z-10">
        <VisitorTracker />
        <Hero />
        <About />
        <SkillsSphere />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
