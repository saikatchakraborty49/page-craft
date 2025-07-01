import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "@/components/create-website/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PageCraft-A Website Generator",
  description: "This website generates websites based on users' demand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
        <div className="relative flex flex-col justify-between min-h-screen w-screen bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <Navbar/>
          {children}
          <Footer/>
          <Toaster />
        </div>
        </StoreProvider>
        {/* <div className="relative min-h-screen w-screen bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
         {children}
        </div> */}
        
      </body>
    </html>
  );
}
