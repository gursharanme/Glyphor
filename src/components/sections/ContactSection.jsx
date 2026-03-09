import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <section
        id="about"
        className="bg-custom-black text-custom-white w-full min-h-[50vh] relative z-[888] rounded-t-4xl p-6 md:p-12 py-10 md:py-16 border-t-2 border-custom-white"
      >
        {/* section title */}
        <div className="flex flex-col gap-3 md:gap-6 mb-14 fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base">Have a project in mind</p>
        </div>

        {/* content */}
        <div className="fade-in">
          {/* book demo call */}
          <div className="flex items-center gap-5">
            <Link
              to={"https://calendly.com/"}
              target="_blank"
              className="md:text-lg font-medium bg-white/30 backdrop-blur-2xl px-8 py-3.5 md:py-4 pb-4.5 md:pb-5 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Book a call
            </Link>
            <Link
              to="mailto:glyphordesigns@example.com"
              target="_blank"
              className="bg-white/30 p-3.5 md:p-4 rounded-full backdrop-blur-2xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <Mail className="size-6.5 md:size-7.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
