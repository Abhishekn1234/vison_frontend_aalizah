import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

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
              src="./AV Logo.png"
              alt="logo"
              className="w-20 mb-5"
            />

            <p className="text-[#555] leading-relaxed">
              Professional maintenance and
              technical solutions designed to
              deliver quality, reliability and
              long-term value.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-xl mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-[#555]">
              <li>
                <a href="#about">About Us</a>
              </li>

              <li>
                <a href="#team">Team</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-[#555]">
              <li>Technical Maintenance</li>
              <li>Electrical Works</li>
              <li>HVAC Services</li>
              <li>Facility Management</li>
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
                <span>+971 XX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@company.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Dubai, UAE</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-[#d8d2c8] mt-12 pt-6 text-center text-[#666]">
          © 2026 Aalizah Vision Technical Services.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}