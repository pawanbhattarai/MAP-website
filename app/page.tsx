import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import BannerSection from "./components/BannerSection";
import TeamSection from "./components/TeamSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ThemeProvider from "./ThemeProvider.";

export default function Home() {
  return (
    <ThemeProvider>
      <header>
        <section className="grid md:grid-cols-2 flex flex-col h-full mt-24 mx-auto px-20 py-2">
          <Navbar />
        </section>
      </header>

      <main className="flex min-h-screen flex-col">
        <div className="container back mt-50 mx-auto px-2 py-4">
          <HeroSection />
          <AchievementsSection />
          <ServicesSection />
          <AboutSection />
          </div>
        <div>
          <ProjectsSection />
        </div>
        {/* <div>
          <BannerSection />
        </div> */}
        <div>
          <TeamSection />
        </div>
        <div>
          <EmailSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
