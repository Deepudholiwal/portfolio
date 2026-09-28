import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkillsSphere from "@/components/SkillsSphere";
import VisitorTracker from "@/components/VisitorTracker";

export default function Home() {
  return (
    <main>
      <VisitorTracker />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Experience />
      <SkillsSphere />
      <ContactForm />
      <Footer />
    </main>
  );
}
