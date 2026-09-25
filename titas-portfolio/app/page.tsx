import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Creative from "./components/Creative";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Creative />
      <Skills />
    </main>
  );
}