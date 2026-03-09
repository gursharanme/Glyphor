import { heroImages } from "../../constants";
import { useEffect, useState } from "react";

const columnHeights = ["h-40", "h-48", "h-56", "h-64", "h-52"];

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section
      id="hero"
      className="w-full px-6 md:px-12 py-10 bg-black fade-in h-dvh overflow-clip fixed top-0"
    >
      <div className="flex flex-col gap-3 md:gap-6 justify-center text-center items-center mb-14 pt-24">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          Creative Designer
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Shaping bold visuals into meaningful experiences.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {heroImages.map((image, index) => {
          const height = columnHeights[index % columnHeights.length];
          return (
            <div
              key={image.id}
              className="overflow-hidden rounded-2xl shadow-lg break-inside-avoid bg-neutral-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${height} rounded-2xl`}
              />
            </div>
          );
        })}
      </div>

      {scrolled && (
        <div className="h-dvh w-full fixed top-0 left-0 right-0 bg-black/60 fade-in z-[800]" />
      )}
    </section>
  );
};

export default HeroSection;
