"use client"
import Link from "next/link";
import { useContext } from "react";
import { navContect } from "../NavSection";

export default function MobileNav() {
    const { isColapsed, setIsColapsed, currentNav, setCurrentNav } = useContext(navContect);
    const activeClass = 'after:absolute after:h-[1px] after:w-[3rem] after:bottom-[-0.15rem] after:left-6 after:rounded-full after:bg-primary-heavy';
    const activeClean = 'after:absolute after:h-[1px] after:bottom-[-0.15rem] after:left-0 after:rounded-full';

    const colaspeNav = (tag) =>{
        setIsColapsed(!isColapsed)
        setCurrentNav(tag);
    }
    return (
        <section className={`${isColapsed ? "right-0" : "right-[-80vw]"} fixed top-0 h-screen w-[80vw] bg-black/80 backdrop-blur-[10px] z-[100] overflow-hidden shadow-xl sm:hidden grid place-items-center`} >
            <div className="grid text-xl gap-3 text-white">
                <Link onClick={()=>colaspeNav(0)} href={"#steps"} className={`${currentNav === 0 ? activeClass : activeClean} no-underline relative cursor-pointer dark:text-white px-8 list-none active:scale-90 hover:scale-110`}>Services</Link>
                <Link onClick={()=>colaspeNav(1)} href={"#about"} className={`${currentNav === 1 ? activeClass : activeClean} no-underline relative cursor-pointer dark:text-white px-8 list-none active:scale-90 hover:scale-110`}>Abouts Us</Link>
                <Link onClick={()=>colaspeNav(2)} href={"#whySelling"} className={`${currentNav === 2 ? activeClass : activeClean} no-underline relative cursor-pointer dark:text-white px-8 list-none active:scale-90 hover:scale-110`}>Why W<span className="text-primary-soft">&</span>R</Link>
                <Link onClick={()=>colaspeNav(3)} href={"#guaranteedFAQ"} className={`${currentNav === 3 ? activeClass : activeClean} no-underline relative cursor-pointer dark:text-white px-8 list-none active:scale-90 hover:scale-110`}>FAQ</Link>
                <Link onClick={()=>colaspeNav(4)} href={"#contact"} className={`${currentNav === 4 ? activeClass : activeClean} no-underline relative cursor-pointer dark:text-white px-8 list-none active:scale-90 hover:scale-110`}>Feedback</Link>
            </div>
        </section>
    )
}