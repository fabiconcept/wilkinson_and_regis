"use client"

import { useContext } from "react"
import { reasonsContext } from "../Reasons"
import Image from "next/image";

export default function Reason({ id, img, text }) {
    const { currentReason, setCurrentReason } = useContext(reasonsContext);
    return (
        <div onClick={() => setCurrentReason(id)} className={`${currentReason === id ? "flex-1" : 'w-[10%]'} duration-300 cursor-pointer rounded-xl bg-white/10 grid place-items-center relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 h-full w-full ${currentReason === id ? "bg-black/0" : 'bg-black/60'}`}></div>
            <div className={`absolute font-semibold ${currentReason === id ? "origin-left text-3xl text-white p-6 bg-black/30 backdrop-blur-sm" : 'whitespace-nowrap rotate-90 text-base text-primary-light'}`}>
                {text}
            </div>
            <Image
                src={img}
                srcSet={img}
                alt={text}
                className="min-h-full w-full object-cover"
                priority
                width={1000}
                height={1000}
            />
        </div>
    );
}