import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Clock3,

} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="top-0 z-50">

      {/* TOP BAR */}
      <div className="bg-[#f1efea]">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10">

          <div className="hidden lg:flex justify-between items-center py-8">

            {/* Logo */}
            <div>
              <img
                src="/AV Logo.png"
                alt="Logo"
                className="w-[120px]"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="text-[50px] font-bold text-[#EA4335]">
                G
              </div>

              <div>
                <div className="font-bold text-lg">
                  4.9 ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-500 underline">
                  Based on 100+ Reviews
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <Phone size={24} />
              </div>

              <span className="text-[#2BC77A] text-3xl font-bold">
                +971 4 294 5001
              </span>
            </div>

            {/* Quote */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <Clock3 size={24} />
              </div>

              <span className="font-bold text-2xl">
                Request A Quote
              </span>
            </div>

          </div>

          {/* Mobile */}
          <div className="lg:hidden flex justify-between items-center py-4">
            <img
              src="/AV Logo.png"
              alt="logo"
              className="w-22"
            />

            <button
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* NAVBAR */}
    {/* NAVBAR */}
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

  {/* BOTTOM LEFT CURVE */}
  <div
    className="
     
    "
  />

  {/* SLANTED PART */}
  <div
    className="
      
    "
  />

  <div className="max-w-[1500px] mx-auto px-5 md:px-10 h-full relative z-20">

    <div className="hidden lg:flex items-center gap-14 font-bold uppercase h-full">

      <Link
        to="/"
        className="hover:text-[#2BC77A] transition"
      >
        Home
      </Link>

      {/* ABOUT DROPDOWN */}
      <div className="relative group">

        <button className="flex items-center gap-2 hover:text-[#2BC77A]">
          About Us
          <ChevronDown size={18} />
        </button>

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
            Team
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
        className="hover:text-[#2BC77A]"
      >
        Services
      </Link>

      <Link
        to="/projects"
        className="hover:text-[#2BC77A]"
      >
        Projects
      </Link>

      <Link
        to="/news"
        className="hover:text-[#2BC77A]"
      >
        News
      </Link>

      <Link
        to="/contact"
        className="hover:text-[#2BC77A]"
      >
        Contact
      </Link>

    </div>

  </div>

</nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#354145] text-white">

          <div className="flex flex-col" onClick={() => setOpen(false)}>

            <Link to="/" className="p-4 border-b border-white/10">
              Home
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen(!aboutOpen);
              }}
              className="
                p-4
                border-b
                border-white/10
                flex
                justify-between
              "
            >
              About Us
              <ChevronDown size={18} />
            </button>

            {aboutOpen && (
              <div className="bg-[#2e383b]">

                <Link
                  to="/about"
                  className="block p-4"
                >
                  About Us
                </Link>

                <Link
                  to="/team"
                  className="block p-4"
                >
                  Team
                </Link>

                <Link
                  to="/faq"
                  className="block p-4"
                >
                  FAQ
                </Link>

              </div>
            )}

            <Link to="/services" className="p-4 border-b border-white/10">
              Services
            </Link>

            <Link to="/projects" className="p-4 border-b border-white/10">
              Projects
            </Link>

            <Link to="/news" className="p-4 border-b border-white/10">
              News
            </Link>

            <Link to="/contact" className="p-4">
              Contact
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}