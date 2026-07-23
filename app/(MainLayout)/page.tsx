import Banner from "@/pages/home/Banner";
import About from "@/pages/home/About";
import Services from "@/pages/home/Services";
import Projects from "@/pages/home/Projects";
import WhyChooseUs from "@/pages/home/WhyChooseUs";
import Team from "@/pages/home/Team";
import Testimonials from "@/pages/home/Testimonials";
import FAQ from "@/pages/home/FAQ";
import Blog from "@/pages/home/Blog";
import Contact from "@/pages/home/Contact";
import Footer from "@/pages/home/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#04150e]">
      <Banner />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}