"use  client"
import { useContext, useEffect } from "react";
import { screenContext } from "../PageScreens";
import MapView from "../components/MapView";
import { FaCheck, FaTimes } from "react-icons/fa";
import useCookies from "@/customHooks/useCookie";
import { useRouter } from "next/navigation";

const myApi = process.env.NEXT_PUBLIC_VERCEL_MAPS_API_KEY;

export default function MapPage() {
    const { coordinates, addressText, handleContinue } = useContext(screenContext);
    const { removeCookie } = useCookies();
    const router = useRouter();


    const handleCancel = () => {
        removeCookie("coordinateValue");
        removeCookie("addressText");
        router.push("/");
    }

    return (
        <section className={`flex-1 flex flex-col items-center gap-6`}>
            <MapView coordinates={coordinates} myApi={myApi} />
            <span className="text-primary-heavy font-semibold text-xl">Is this your address?</span>
            <div className="line-clamp-2 text-center max-w-[20rem ] text-2xl font-semibold px-8">{addressText}</div>
            <div className="flex flex-wrap gap-4 items-center sm:w-[30rem] w-full px-4">
                <div onClick={() => handleCancel()} className="p-4 sm:px-4 flex-1 justify-center hover:scale-105 hover:bg-primary-heavy border border-primary-heavy font-light dark:hover:text-black hover:text-white text-primary-heavy font-semibold active:scale-95 cursor-pointer select-none text-lg flex items-center gap-2">
                    No, it isn&apos;s
                    <span>
                        <FaTimes className="text-white text-sm sm:block hidden" />
                    </span>
                </div>
                <div onClick={() => handleContinue()} className="p-4 sm:px-4 flex-1 justify-center hover:scale-105 bg-primary-heavy border border-primary-heavy font-light dark:text-black text-white font-semibold active:scale-95 cursor-pointer select-none text-lg flex items-center gap-2">
                    Yes, it is
                    <span>
                        <FaCheck className="text-white text-sm sm:block hidden" />
                    </span>
                </div>
            </div>
        </section>
    )
}