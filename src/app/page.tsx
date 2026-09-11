import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CommissionerSection from "./components/CommissionerSection";
import AgenciesSection from "./components/AgenciesSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsSection from "./components/NewsSection";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <AboutSection />
      <CommissionerSection />
      <AgenciesSection />
      <ProjectsSection />
      <NewsSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}