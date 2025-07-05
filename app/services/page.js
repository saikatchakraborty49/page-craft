"use client";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "AI Website Generation",
      description:
        "Generate complete HTML, CSS, and JavaScript code instantly from your text prompts using advanced AI models.",
      icon: "⚙️",
    },
    {
      title: "Live Code Preview",
      description:
        "View a real-time preview of your website while editing the code. Instantly see the results of your changes.",
      icon: "🖥️",
    },
    {
      title: "Code Download",
      description:
        "Download your generated website as a .zip file containing all necessary files, ready to deploy or customize.",
      icon: "📦",
    },
    {
      title: "Voice-to-Code Input",
      description:
        "Speak your ideas out loud—our system converts them to code. Great for faster and more accessible creation.",
      icon: "🎤",
    },
    {
      title: "Code History Tracking",
      description:
        "Easily access your previous queries and code outputs to reuse or reference past work without losing progress.",
      icon: "📜",
    },
    {
      title: "Responsive Designs",
      description:
        "Every layout generated is responsive and mobile-friendly by default, ensuring compatibility across all devices.",
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen w-full text-white px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 z-20 rounded-xl md:w-[30%] shadow-md p-6 hover:scale-105 transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
