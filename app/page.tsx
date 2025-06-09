import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MainLayout from "./layout/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Approach />
        <About />
        <Contact />
      </MainLayout>
      <Footer />
    </>
  );
}
