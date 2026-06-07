import Banner from "@/pages/home/Banner";
import About from "@/pages/home/About";
import WhyChooseUs from "@/pages/home/WhyChooseUs";
import Team from "@/pages/home/Team";
import FAQ from "@/pages/home/FAQ";
import Contact from "@/pages/home/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#04150e]">
      <Banner />
      <About />
      <WhyChooseUs />
      <Team />
      <FAQ />
      <Contact />
    </div>
  );
}