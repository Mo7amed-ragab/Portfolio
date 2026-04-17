import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

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
