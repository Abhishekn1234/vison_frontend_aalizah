import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import FadeIn from "../common/FadeIn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="top-0 z-50">
      <FadeIn>
        {/* MOBILE HEADER */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-gray-600 text-white">
          <Link to="/">
            <img
              src="/AV Logo.png"
              alt="Logo"
              className="w-24 object-contain"
            />
          </Link>

          <Button
            onClick={() => setOpen(!open)}
            variant="borderless"
            className="text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* DESKTOP NAVBAR */}
        <nav className="relative bg-[#6b5b95] text-white h-20 hidden lg:block">
          {/* Top Right Curve */}
          <div
            className="
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

          <div className="max-w-[1500px] mx-auto px-10 h-full relative z-20">
            {/* All menu items aligned left */}
            <div className="flex items-center gap-12 h-full font-semibold uppercase tracking-wide">
              <Link
                to="/"
                className="hover:text-[#A8E6CF] transition-colors duration-300"
              >
                Home
              </Link>

              {/* ABOUT DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-[#A8E6CF] transition-colors duration-300">
                  ABOUT US
                  <ChevronDown size={16} />
                </button>

                <div
                  className="
                    absolute
                    top-full
                    left-0
                    mt-3
                    w-60
                    bg-white
                    text-black
                    rounded-xl
                    shadow-2xl
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                >
                  <Link
                    to="/about"
                    className="block px-5 py-4 hover:bg-gray-100"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    className="block px-5 py-4 hover:bg-gray-100"
                  >
                    Join Our Team
                  </Link>

                  <Link
                    to="/faq"
                    className="block px-5 py-4 hover:bg-gray-100"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <Link
                to="/services"
                className="hover:text-[#A8E6CF] transition-colors duration-300"
              >
                Services
              </Link>

              {/* <Link
                to="/projects"
                className="hover:text-[#A8E6CF] transition-colors duration-300"
              >
                Projects
              </Link>

              <Link
                to="/news"
                className="hover:text-[#A8E6CF] transition-colors duration-300"
              >
                News
              </Link> */}

              <Link
                to="/contact"
                className="hover:text-[#A8E6CF] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-gray-600 text-white shadow-lg">
            <div className="flex flex-col">
              <Link
                to="/"
                className="px-5 py-4 border-b border-white/10 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              {/* MOBILE ABOUT */}
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between px-5 py-4 border-b border-white/10 hover:bg-white/5"
              >
                <span>About Us</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="bg-[#5c4d82]">
                  <Link
                    to="/about"
                    className="block px-8 py-3 hover:bg-white/5"
                    onClick={() => {
                      setOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    className="block px-8 py-3 hover:bg-white/5"
                    onClick={() => {
                      setOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    Join Our Team
                  </Link>

                  <Link
                    to="/faq"
                    className="block px-8 py-3 hover:bg-white/5"
                    onClick={() => {
                      setOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    FAQ
                  </Link>
                </div>
              )}

              <Link
                to="/services"
                className="px-5 py-4 border-b border-white/10 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
{/* 
              <Link
                to="/projects"
                className="px-5 py-4 border-b border-white/10 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/news"
                className="px-5 py-4 border-b border-white/10 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                News
              </Link> */}

              <Link
                to="/contact"
                className="px-5 py-4 hover:bg-white/5"
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