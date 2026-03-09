import { ArrowUpRight } from "lucide-react";
import { featuredSection } from "../../constants";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  return (
    <>
      <section
        id="featured-work"
        className="bg-custom-black text-custom-white min-h-screen w-full relative z-[888] rounded-t-4xl p-6 md:p-12 py-10 md:py-16 pb-15 md:pb-21 border-t-2 border-custom-white"
      >
        {/* section title */}
        <div className="flex flex-col gap-3 md:gap-6 mb-14 fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Featured Work
          </h2>
          <p className="text-sm sm:text-base">
            Here are some of the projects I have worked on.
          </p>
        </div>

        {/* section content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* card */}
          {featuredSection.map((card, index) => (
            <Link
              to={card.url}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 slide-in-from-down"
            >
              {/* Image */}
              <img
                src={card.src}
                alt={card.alt}
                className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]"
              />

              {/* Overlay with text */}
              <div className="absolute inset-0 flex flex-col justify-end px-5 py-3 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {card.title}
                  </h3>
                  <ArrowUpRight className="size-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
