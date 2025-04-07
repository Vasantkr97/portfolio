import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import { SmallNavbar } from "./components/SmallNavbar";
import { navItems } from "./data";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <SmallNavbar navItems={navItems} />
        <Hero />
        <AboutMe />
    </main>
  );
}
