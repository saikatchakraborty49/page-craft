"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full text-white px-8 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">About PageCraft</h1>
      <p className="max-w-3xl text-lg text-center leading-7 text-gray-300">
        <strong>PageCraft</strong> is an AI-powered website generator designed to turn your ideas into fully functional web pages in seconds.
        Whether you&apos;re a developer, designer, or someone without any coding knowledge, PageCraft helps you effortlessly create HTML, CSS, and JavaScript code with just a simple prompt.
      </p>

      <div className="mt-12 max-w-3xl text-left space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🚀 Key Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Natural language to website generation</li>
            <li>Live preview support with editable code</li>
            <li>Export/download ready-to-use HTML/CSS/JS files</li>
            <li>Voice input supported for fast interaction</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🎯 Our Mission</h2>
          <p className="text-gray-300">
            Our goal is to empower creators by making web development accessible, intuitive, and fast. We believe everyone should be able to build beautiful websites without struggling with syntax or layout issues.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🤖 Powered By</h2>
          <p className="text-gray-300">
            PageCraft leverages modern AI models and frontend technologies like React, Redux, and Tailwind CSS to deliver a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
