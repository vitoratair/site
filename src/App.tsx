import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Hobbies } from "./components/Hobbies";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <div className="page-backdrop" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
