import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero, { FloatingCTA } from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Tours from "@/components/Tours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services, { BookCTA } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Marquee />
        <Hero />
        <Stats />
        <About />
        <Tours />
        <WhyChooseUs />
        <Services />
        <BookCTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
