import { useParams, Link } from "react-router-dom";
import {
  illustrations,
  logos,
  posters,
  socialmedia,
  featuredSection,
} from "../constants";
import ContactSection from "../components/sections/ContactSection";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const FeaturedWorkDetails = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [moreCategories, setMoreCategories] = useState([]);

  useEffect(() => {
    if (id === "illustrations") {
      setImages(illustrations);
    } else if (id === "logos") {
      setImages(logos);
    } else if (id === "posters") {
      setImages(posters);
    } else if (id === "social-media") {
      setImages(socialmedia);
    }
  }, [id]);

  useEffect(() => {
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");
    const newArray = featuredSection.filter(
      (item) => normalize(item.title) !== id
    );
    setMoreCategories(newArray);
  }, [id]);

  return (
    <>
      <section
        id="featured-work-details"
        className="bg-custom-black text-custom-white min-h-screen w-full mt-20 p-6 md:p-12 py-10 md:py-16 pb-15 md:pb-21"
      >
        {/* section title */}
        <div className="flex flex-col gap-3 md:gap-6 mb-14 fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Featured Work / {id}
          </h2>
          <p className="text-sm sm:text-base">
            Here are some of the projects I have worked on.
          </p>
        </div>

        {/* section content */}
        <div className="fade-in">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <div key={image.id} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lg break-inside-avoid bg-neutral-900">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="more-to-explore"
        className="bg-custom-black text-custom-white w-full min-h-[50vh] relative z-[888] rounded-t-4xl p-6 md:p-12 py-10 md:py-16 pb-15 md:pb-21 border-t-2 border-custom-white"
      >
        {/* section title */}
        <div className="flex flex-col gap-3 md:gap-6 mb-14 fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            More to explore
          </h2>
          <p className="text-sm sm:text-base">See my more work here</p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* card */}
          {moreCategories.map((card, index) => (
            <Link
              to={card.url}
              key={index}
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

      <ContactSection />
    </>
  );
};

export default FeaturedWorkDetails;
