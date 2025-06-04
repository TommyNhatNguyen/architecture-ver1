import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <main id="main" className="main">
        <Hero />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
