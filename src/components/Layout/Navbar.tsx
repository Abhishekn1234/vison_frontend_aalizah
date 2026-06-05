import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import FadeIn from "../common/FadeIn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="top-0 z-50">
     <FadeIn>

    
      {/* MOBILE TOP BAR (LOGO + MENU BUTTON) */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-[#354145] text-white">
       <img src="./AV Logo.png" alt="logo" className="w-20" />

        <Button onClick={() => setOpen(!open)} variant="borderless">
          {open ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* NAVBAR DESKTOP */}
      <nav className="relative bg-[#354145] text-white h-20">

        {/* TOP RIGHT CURVE */}
        <div
          className="
            hidden lg:block
            absolute
            -top-[80px]
            right-0
            w-[420px]
            h-[120px]
            bg-[#f1efea]
            rounded-bl-[100px]
            z-10
          "
        />

        <div className="max-w-[1500px] mx-auto px-5 md:px-10 h-full relative z-20">

          <div className="hidden lg:flex items-center gap-14 font-bold uppercase h-full">

            <Link to="/" className="hover:text-[#2BC77A] transition">
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="relative group">

              <Button className="flex items-center gap-2 hover:text-[#2BC77A]" variant="borderless">
                ABOUT US 
              </Button>

              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-2
                  w-56
                  bg-white
                  text-black
                  rounded-xl
                  shadow-xl
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-300
                "
              >
                <Link to="/about" className="block px-5 py-4 hover:bg-gray-100">
                  About Us
                </Link>

                <Link to="/team" className="block px-5 py-4 hover:bg-gray-100">
                  Join Our Team
                </Link>

                <Link to="/faq" className="block px-5 py-4 hover:bg-gray-100">
                  FAQ
                </Link>
              </div>
            </div>

            <Link to="/services" className="hover:text-[#2BC77A]">
              Services
            </Link>

            <Link to="/projects" className="hover:text-[#2BC77A]">
              Projects
            </Link>

            <Link to="/news" className="hover:text-[#2BC77A]">
              News
            </Link>

            <Link to="/contact" className="hover:text-[#2BC77A]">
              Contact
            </Link>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#354145] text-white">

          <div className="flex flex-col">

            <Link
              to="/"
              className="p-4 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* ABOUT MOBILE */}
            <Button
            variant="borderless"
              onClick={() => setAboutOpen(!aboutOpen)}
              className="p-4 border-b border-white/10 flex justify-between"
            >
              About Us
              <ChevronDown
                size={18}
                className={`${aboutOpen ? "rotate-180" : ""} transition`}
              />
            </Button>

            {aboutOpen && (
              <div className="bg-[#2e383b]">
                <Link
                  to="/about"
                  className="block p-4"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  to="/team"
                  className="block p-4"
                  onClick={() => setOpen(false)}
                >
                  Join Our Team
                </Link>

                <Link
                  to="/faq"
                  className="block p-4"
                  onClick={() => setOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            )}

            <Link
              to="/services"
              className="p-4 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className="p-4 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/news"
              className="p-4 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              News
            </Link>

            <Link
              to="/contact"
              className="p-4"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

          </div>
        </div>
      )}
       </FadeIn>
    </header>
  );
}