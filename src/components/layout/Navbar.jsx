import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[900] bg-custom-black slide-in-from-up">
        <div className="flex justify-between items-start py-6 px-6 md:px-12">
          <a href="/">
            <h1 className="text-2xl md:text-3xl font-bold">Glyphor</h1>
          </a>

          <Link
            to={"https://calendly.com/"}
            target="_blank"
            className="flex items-center md:gap-2 py-2 md:py-3 px-5 md:px-6 pb-2.5 md:pb-3.5 rounded-full bg-custom-white text-sm text-custom-black hover:bg-custom-white/80 transition font-medium"
          >
            <Phone
              onClick={() => setIsOpen(true)}
              strokeWidth={2.5}
              className="size-4 cursor-pointer hidden md:block"
            />
            Book call
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
