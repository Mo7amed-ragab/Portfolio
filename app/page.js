import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

export default function Home() {
  return (
    <NoxfolioLayout onePageMenu={true}>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume />
      {/* Resume Area end */}
      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
    </NoxfolioLayout>
  );
}
