import { Dribbble, ExternalLink, Instagram, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { footer } from "../../constants";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="flex justify-between items-center py-6 px-6 sm:px-14 relative z-[888] bg-custom-black">
        {/* Disclamer */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex gap-2 items-center hover:scale-105 hover:underline transition-all duration-200 ease-in-out cursor-pointer fade-in"
        >
          <ExternalLink className="size-4 md:size-5" />
          <span className="text-sm md:text-base">{footer.disclamer}</span>
        </div>

        {/* Social links */}
        <ul className="flex gap-3 md:gap-4 items-center justify-center fade-in">
          {footer.socialLinks.map((link) => (
            <Link
              to={link.url}
              target="_blank"
              key={link.id}
              className="cursor-pointer text-custom-black bg-custom-white p-2 md:p-3 rounded-full hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <link.icon className="size-4.5 md:size-5" />
            </Link>
          ))}
        </ul>
      </footer>

      <div className="bg-custom-black relative z-[888] text-sm md:text-base py-6 px-6 sm:px-14 text-center">
        <p className="fade-in">
          Designed & developed by{" "}
          <span className="font-bold underline">
            <a href="https://github.com/gursharanme/glyphor/" target="_blank">
              Gursharan Singh
            </a>
          </span>
        </p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-custom-black/90 flex items-center justify-center p-4 fade-in">
          <div className="w-full max-w-4xl bg-custom-white/10 backdrop-blur-2xl p-6 sm:p-10 md:p-12 md:pb-15 rounded-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">
                {footer.disclamer}
              </h2>
              <X
                onClick={() => setIsOpen(false)}
                strokeWidth={2.5}
                className="size-10 sm:size-12 cursor-pointer p-2 sm:p-3 rounded-full hover:bg-gray-200/40 transition"
              />
            </div>
            <p className="text-base sm:text-lg tracking-wide mb-3">
              {footer.disclamerDescription1}
            </p>
            <p className="text-base sm:text-lg tracking-wide indent-10">
              {footer.disclamerDescription2}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
