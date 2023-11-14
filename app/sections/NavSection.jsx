"use client"

import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import MobileNav from "./components/MobileNav";
import React, { useEffect, useState } from "react";

export const navContect = React.createContext();

export default function NavSection() {
    const [isColapsed, setIsColapsed] = useState(false);
    const [currentNav, setCurrentNav] = useState(0);

    const activeClass = 'after:absolute after:h-[1px] after:w-[3rem] after:bottom-[-0.75rem] after:left-6 after:rounded-full after:bg-primary-heavy';
    const activeClean = 'after:absolute after:h-[1px] after:bottom-[-0.75rem] after:left-0 after:rounded-full';

    useEffect(() => {
        const hasFragment = window.location.hash;
        if (hasFragment) {
            console.log("Hash Fragment: ", hasFragment);
        }
    }, []);

    return (
        <navContect.Provider value={{ isColapsed, setIsColapsed, currentNav, setCurrentNav }}>
            <nav className="text-white lg:px-24 px-6 sm:py-4 py-2 flex items-center justify-between sticky top-0 backdrop-blur-md sm:mb-[-12%] mb-[-30%] z-[101] dark:bg-transparent bg-black/5">
                <div className="flex items-center gap-2 my-6">
                    <Image
                        src={"https://sanydelw.sirv.com/Images/Original%20Logo%20cut.png"}
                        srcSet={"https://sanydelw.sirv.com/Images/Original%20Logo%20cut.png"}
                        priority
                        alt="Logo"
                        className="min-h-full sm:w-14 w-12 object-cover"
                        width={400}
                        height={400}
                    />
                    <div className="font-semibold uppercase sm:text-[1rem] text-sm leading-4 max-w-[5rem]">Wilkinson <span className="text-primary-light">&</span> Regis</div>
                </div>
                <div className="flex items-center text-base font-semibold">
                    <Link onClick={()=>setCurrentNav(0)} href={"#steps"} className={`no-underline hover:scale-105 relative lg:flex hidden cursor-pointer dark:text-white px-8 list-none active:scale-90 ${currentNav === 0 ? activeClass : activeClean}`}>Services</Link>
                    <Link onClick={()=>setCurrentNav(1)} href={"#about"} className={`no-underline hover:scale-105 relative lg:flex hidden cursor-pointer dark:text-white px-8 list-none active:scale-90 ${currentNav === 1 ? activeClass : activeClean}`}>Abouts Us</Link>
                    <Link onClick={()=>setCurrentNav(2)} href={"#whySelling"} className={`no-underline hover:scale-105 relative lg:flex hidden cursor-pointer dark:text-white px-8 list-none active:scale-90 ${currentNav === 2 ? activeClass : activeClean}`}>Why W<span className="text-primary-soft">&</span>R</Link>
                    <Link onClick={()=>setCurrentNav(3)} href={"#guaranteedFAQ"} className={`no-underline hover:scale-105 relative lg:flex hidden cursor-pointer dark:text-white px-8 list-none active:scale-90 ${currentNav === 3 ? activeClass : activeClean}`}>FAQ</Link>
                    <Link onClick={()=>setCurrentNav(4)} href={"#contact"} className={`no-underline hover:scale-105 relative lg:flex hidden cursor-pointer dark:text-white px-8 list-none active:scale-90 ${currentNav === 4 ? activeClass : activeClean}`}>Feedback</Link>
                    <Link href={"tel:+14046615581"} className="p-4 sm:px-4 rounded sm:bg-primary-heavy font-light lg:text-white active:scale-95 cursor-pointer select-none text-lg flex items-center gap-2">
                        404-661-5581
                        <span>
                            <FaPhone className="text-white mb-[-6px] text-sm sm:block hidden" />
                        </span>
                    </Link>

                    <div className="sm:ml-6 grid place-items-center lg:hidden gap-[4px] group cursor-pointer active:scale-90 relative bg-white/10 p-[0.5rem] rounded h-[30px] w-[34px]" onClick={()=>setIsColapsed(!isColapsed)}>
                        <div className={`${isColapsed ? "rotate-45 bg-primary-soft" : "top-2 group-hover:bg-primary-soft "} w-[18px] absolute h-[2px] bg-white origin-center`}></div>
                        <div className={`${isColapsed ? "opacity-0 bg-primary-soft" : "opacity-100 group-hover:bg-primary-soft"} w-[18px] h-[2px] bg-white`}></div>
                        <div className={`${isColapsed ? "-rotate-45 bg-primary-soft" : "bottom-2 group-hover:bg-primary-soft "} w-[18px] absolute h-[2px] bg-white origin-center`}></div>
                    </div>
                </div>
            </nav>
            <MobileNav />
        </navContect.Provider>
    );
}