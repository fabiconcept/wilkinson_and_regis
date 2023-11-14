"use client"
import { useContext, useState } from "react";
import { FaAngleDoubleDown, FaMinus, FaPlus } from "react-icons/fa";
import { Faqcontext } from "../FAQs";

export default function Faq({id, q, content}) {
    const {isColapsed, setIsColapsed} = useContext(Faqcontext);
    return (
        <div className={`border flex flex-col w-full ${isColapsed === id ? 'border-primary-light/50'  :  'bg-primary-light/10 dark:border-white/10 border-black/10 dark:hover:border-white/50 hover:border-black/50'}`}>  
            <div className="flex gap-5 items-center p-4 cursor-pointer group" onClick={()=>setIsColapsed(id === isColapsed ? (id === 0 ? "a" : 0) : id)}>
                <div className="h-7 w-7 rounded bg-primary-light text-black grid place-items-center font-semibold relative">
                    Q. <div className="absolute text-xs right-[0.2rem] top-1">{id+1}</div>
                </div>
                <span className="flex-1 text-lg font-semibold">{q}</span>
                <div className="h-7 w-7 rounded bg-primary-light text-black grid place-items-center font-semibold group-active:rotate-90">
                    {isColapsed === id ? <FaMinus className="" /> : <FaPlus className="" />}
                </div>
            </div>
            <div className={`px-8 text-base ease-linear duration-150 transition-[all_height_150ms_linear] ${isColapsed === id ? "py-4 max-h-full" : "max-h-0 overflow-hidden"}`}>
                {content}
            </div>
        </div>
    )
}