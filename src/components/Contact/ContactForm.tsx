import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
import { services } from "../common/services";
import { useState } from "react";
import {toast} from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqeoqgok", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 pb-20 px-4">
      <FadeIn>
        <div className="max-w-4xl mx-auto bg-[#F7F4EE] rounded-2xl p-6 md:p-12 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Have a question or want a quote? Fill out the form below, and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <input name="name" placeholder="Full Name" required className="w-full border-b py-2" />

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <input name="email" type="email" placeholder="Email" required className="border-b py-2" />
              <input name="phone" type="tel" placeholder="Phone" required className="border-b py-2" />
            </div>

            {/* Address */}
            <input name="address" placeholder="Address" required className="w-full border-b py-2" />

            {/* Service */}
            <select name="service" className="w-full border-b py-2">
              <option value="">Select service</option>
              {services.map((s, i) => (
                <option key={i} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            {/* Message */}
            <textarea name="message" rows={3} placeholder="Message" className="w-full border-b py-2" />

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#800000] text-white px-8 py-3 rounded-lg"
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </Button>
            </div>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}