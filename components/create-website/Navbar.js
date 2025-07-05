"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showHamburger,setShowHamburger]=useState(true)
    const menuRef=useRef(null)

    const pathname=usePathname()
    // console.log(pathname);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (
              menuRef.current &&
              !menuRef.current.contains(event.target)
            ) {
              setShowHamburger(true);
            }
        }
      document.addEventListener("mousedown", handleOutsideClick)
    
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    }, [])
    
  return (
    <>
    <div className='z-40 w-screen h-[60px] bg-gray-700  hidden md:flex items-center px-2 justify-around'>
        <Link href={"/"}>
            <div className={` text-3xl font-bold text-white text-gradient`}>PageCraft</div>
        </Link>
        <div className='flex gap-4 text-lg'>
            <Link className={`${pathname=="/"?' font-bold text-gradient':''}`} href={"/"}>
                Home
            </Link>
            <Link className={`${pathname=="/about"?' font-bold text-gradient':''}`} href={"/about"}>
                About
            </Link>
            <Link className={`${pathname=="/services"?' font-bold text-gradient':''}`} href={"/services"}>
                Services
            </Link>
        </div>
            <Link href={"/create-website"}>
        <div className='flex items-center z-50 hover:cursor-pointer'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Create Your Website
            </button>
        </div>
            </Link>
    </div>

    {/* Responsive Navbar */}
    <div className='z-40 w-screen h-[60px] bg-gray-700  flex md:hidden items-center px-2 justify-between'>
        <Link href={"/"}>
            <div className='text-3xl font-bold text-white text-gradient'>PageCraft</div>
        </Link>
        <div className='text-white text-2xl' onClick={()=>{
            if(showHamburger){
                setShowHamburger(false)
            }
            else{
                setShowHamburger(true)
            }
        }}>
            {showHamburger?<GiHamburgerMenu />:<RxCross2 />}
        
            <div
            ref={menuRef}
            className={`absolute transform transition-all duration-300 ${showHamburger?'opacity-0 pointer-events-none translate-y-4 -translate-x-4 scale-95':'opacity-100 pointer-events-auto translate-y-0 translate-x-0 scale-100 '} z-50 p-2 top-[60px] right-0 text-white bg-gray-700`}>
                <div className='flex flex-col gap-1'>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/about"}>
                    About
                </Link>
                <Link href={"/services"}>
                    Services
                </Link>
                </div>
                <div className='h-0.5 bg-white/15'>
                    
                </div>
                <Link href={"/create-website"}>
                <div className='flex items-center z-50 hover:cursor-pointer'>
                    <button type="button" className="mt-2 w-[120px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Create Your Website
                    </button>
                </div>
                </Link>
            </div>
        </div>
        {/* <div className='flex gap-4 text-lg'>
            <Link href={"/"}>
                Home
            </Link>
            <Link href={"/about"}>
                About
            </Link>
            <Link href={"/services"}>
                Services
            </Link>
        </div>
            <Link href={"/create-website"}>
        <div className='flex items-center z-50 hover:cursor-pointer'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Create Your Website
            </button>
        </div>
            </Link> */}
    </div>
    </>

  )
}

export default Navbar