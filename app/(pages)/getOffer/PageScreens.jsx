"use client"
import React, { useEffect, useState } from "react";
import MapPage from "./subPages/mapPage";
import { useRouter } from "next/navigation";
import useCookies from "@/customHooks/useCookie";
import FormModal from "./components/FormModal";

export const screenContext = React.createContext();

export default function PageScreens() {
    const { getCookie } = useCookies();
    const [coordinates, setCoordinates] = useState(null);
    const [addressText, setAddressText] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const coordinatesValue = getCookie("coordinateValue");
        const addressText = getCookie("addressText");
        
        if (coordinatesValue && addressText) {
            setCoordinates(coordinatesValue);
            setAddressText(addressText);
            return;
        }else{
            router.back();
        }
    }, []);

    const handleContinue = () =>{
        setModalOpen(true);
    }

    return (
        <screenContext.Provider value={{coordinates, addressText, setModalOpen, handleContinue }}>
            <section className="flex flex-col">
                <MapPage />
                {modalOpen && <FormModal />}
            </section>
        </screenContext.Provider>
    )
}