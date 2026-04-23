import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Courses } from "./components/Courses";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Hobbies } from "./components/Hobbies";
import { Nav } from "./components/Nav";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <div className="page-backdrop" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Courses />
        <Experience />
        <Resume />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
