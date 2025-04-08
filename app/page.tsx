import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { SmallNavbar } from "./components/SmallNavbar";
import TechStack from "./components/TechStack";
import { navItems } from "./data";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <SmallNavbar navItems={navItems} />
      <Hero />
      <div className="max-w-7xl w-full mx-auto">
        <AboutMe />
        <TechStack/>
        <Projects />
        <Resume />
      </div>
      <Contact />
    </main>
  );
}
