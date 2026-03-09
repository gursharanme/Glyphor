import { aboutSection } from "../../constants";

const AboutSection = () => {
  return (
    <>
      <section
        id="about"
        className="bg-custom-black text-custom-white min-h-screen w-full relative z-[888] rounded-t-4xl p-6 md:p-12 py-10 md:py-16 pb-15 md:pb-21 border-t-2 border-custom-white"
      >
        {/* section title */}
        <div className="flex flex-col gap-3 md:gap-6 mb-14 fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            {aboutSection.title}
          </h2>
          <p className="text-sm sm:text-base">{aboutSection.subheading}</p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* description */}
          <div className="space-y-6 fade-in md:text-lg text-custom-white">
            {aboutSection.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* image */}
          <div>
            <img
              src={aboutSection.aboutImage}
              alt={aboutSection.title}
              className="w-full aspect-square object-cover rounded-2xl fade-in"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
