import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { services } from "../common/services";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#e9e5df] border-t border-[#d8d2c8]"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <img
              src="/AV Logo.png"
              alt="Aalizah Vision Logo"
              className="w-20 mb-5"
            />

            <p className="text-[#555] leading-relaxed">
              Professional maintenance and technical solutions designed to
              deliver quality, reliability and long-term value.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-xl mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-[#555]">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#800000] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#800000] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#800000] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#800000] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-[#555]">
             {services.map((service, index) => (
              <li key={index}>
                {service.title}
              </li>
             ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-[#555]">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
  href="https://wa.me/971551084366"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#800000] font-bold hover:underline whitespace-nowrap inline-block transition-all duration-300 ml-1"
>
  +971-551084366
</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:info@aalizahvision.com"
                  className="hover:text-[#800000] transition-colors duration-300"
                >
                  info@aalizahvision.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>office no :458,Al Barsha first Building(373-408) Al  Barsha 1 ,Dubai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d8d2c8] mt-12 pt-6 text-center text-[#666]">
          © 2026 Aalizah Vision Technical Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}