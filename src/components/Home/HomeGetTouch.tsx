"use client";

import React, { useState } from "react";
import Button from "../common/Button";

export default function HomeGetTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      
      {/* 🖼️ BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/worker-bg.jpg" // Replace with your local worker image path
          alt="Get in Touch Background"
          className="w-full h-full object-cover object-center filter brightness-[0.85] md:brightness-100"
        />
        {/* Dark overlay for extra readability on smaller screens */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/10 lg:bg-transparent" />
      </div>

      {/* 📦 CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 📢 LEFT SIDE: TEXT HERO */}
        <div className="lg:col-span-5 text-white lg:text-[#1a2424] p-4 lg:p-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase drop-shadow-md lg:drop-shadow-none">
            GET IN <br />
            TOUCH <br />
            WITH <br />
            OUR TEAM
          </h2>
        </div>

        {/* 📄 RIGHT SIDE: LIGHT GREY CONTACT FORM CARD */}
        <div className="lg:col-span-7 bg-[#f3f4f6] rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 max-w-2xl lg:max-w-none mx-auto w-full">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Have a project in mind or need quick assistance? Fill out the form below, 
            and our team will get back to you promptly to discuss your requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FULL NAME */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#800000] transition-colors"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            {/* EMAIL & PHONE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#800000] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="000-000-000"
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#800000] transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                Address*
              </label>
              <input
                type="text"
                required
                placeholder="Your location"
                className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#800000] transition-colors"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            {/* TYPE OF SERVICE SELECTOR */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                Type of service
              </label>
              <div className="relative">
                <select
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#800000] transition-colors appearance-none cursor-pointer"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="" disabled>Choose service</option>
                  <option value="consultation">Initial Consultation</option>
                  <option value="execution">Project Execution</option>
                  <option value="inspection">Quality Inspection</option>
                </select>
                {/* Custom chevron arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-gray-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Describe Service Needed"
                className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#800000] transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <Button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2d3748] hover:bg-[#1a202c] text-white font-semibold text-sm uppercase tracking-wider py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                Submit
                
              </Button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}