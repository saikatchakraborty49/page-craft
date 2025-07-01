// //set up the form page for chatting--some tweaks in chatbot.js --->DONE
// //fetching the codes from LLM  --->DONE
// //in front end remove all occurences of negi bot 
// //code setup
// // styling of code page
// //preview setup
// // chat bot me submit button
// // code preview icons 

// import Navbar from "@/components/create-website/Navbar";
// import { apiConnector } from "@/services/apiConnector";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
   
//   return (
//     <div className="w-screen z-30">
//       <div className="h-5/6 p-2 flex flex-col justify-center items-center">
//         <p className="text-3xl font-bold text-white">Welcome To The </p>
//         <p className="text-gradient text-5xl font-bold mt-1">PageCraft</p>
//         <p className="text-2xl mt-4">An AI-powered website builder</p>
//         <p className="text-2xl mt-2">
//          that generates a complete website from your text or voice input.
//         </p>
//         <Link href={"/create-website"}>
//         <div className="mt-8 text-2xl scale-125 hover:scale-150 hover:cursor-pointer">
//           <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//               Create Your Website
//           </button>
//         </div>
//         </Link>
//       </div>

//     </div>
//   );
// }

"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  const features=
  [
    {
      title: "AI-Powered Code",
      desc: "Let our AI generate clean and responsive websites from your input.",
      icon: "🤖",
    },
    {
      title: "Live Preview",
      desc: "See changes in real-time with our dynamic preview feature.",
      icon: "👁️",
    },
    {
      title: "Voice Input",
      desc: "Don’t want to type? Just speak your design idea and we’ll build it.",
      icon: "🎤",
    },
  ]
  return (
    <div className="z-30 w-screen min-h-screen text-white px-6 py-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient">
          Welcome to PageCraft
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Transform your ideas into fully functional websites using the power of
          AI. Generate HTML, CSS, and JavaScript with voice or text prompts.
        </p>

        <div className="flex gap-4 mt-6">
          <Link href="/create-website">
            <button className=" px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg transition">
              Start Creating
            </button>
          </Link>
          <Link href="/services">
            <button className="px-6 py-3 border border-gray-400 hover:bg-gray-800 text-white rounded-md text-lg transition">
              Explore Services
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-24 flex flex-wrap justify-center gap-6">
    {features.map((item, i) => (
    <div
      key={i}
      className="bg-gray-800 w-[90%] sm:w-[45%] lg:w-[30%] p-6 rounded-xl shadow-md hover:scale-105 transition"
    >
      <div className="text-4xl mb-3">{item.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-300 text-sm">{item.desc}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Home;
