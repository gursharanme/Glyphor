import HeroSection from "../components/sections/HeroSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full z-50">
        <HeroSection />
      </div>

      <div className="relative z-[100]">
        <FeaturedSection />
      </div>

      <div>
        <AboutSection />
      </div>

      <div>
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
