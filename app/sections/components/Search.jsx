"use client"
import { FaMapPin, FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useCookies from "@/customHooks/useCookie";
import { useRouter } from "next/navigation";

export default function Search() {
    const { getCookie, setCookie, updateCookie } = useCookies();
    const router = useRouter();
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currIndex, setCurrIndex] = useState(null);
    const { suggestions: { status, data, loading }, value, ready, setValue, clearSuggestions, } = usePlacesAutocomplete({
        cache: 24 * 60 * 60,
        requestOptions: {
            componentRestrictions: {country: "us"}
        },
        debounce: 1000,
    });
    const hasSuggestions = status === 'OK';

    const handleKeyDown = (e) => {
        if (!hasSuggestions || !['Enter', 'Escape', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;

        if (e.key === 'Enter' || e.key === 'Escape') {
            clearSuggestions();
            return;
        }

        let nextIndex = currIndex ?? -1;
        nextIndex = e.key === 'ArrowUp' ? Math.max(nextIndex - 1, 0) : Math.min(nextIndex + 1, data.length - 1);

        setCurrIndex(nextIndex);
        setValue(data[nextIndex] ? data[nextIndex].description : address, false);
        setAddress(data[nextIndex] ? data[nextIndex].description : address, false);
    };
      
    const handleSelect = (suggestion) => () => {
        setValue(suggestion.description, false);
        clearSuggestions();
        setAddress(suggestion.description, false);
    };
    
    
    const handleSubmit = async() => {
        if (!address) {
            return;
        }

        const parameter = {
            address: address
        }
        setIsLoading(true);
        await getGeocode(parameter)
            .then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                const hasCookie = getCookie("coordinateValue");
                const coordinates = `${lat}, ${lng}`;

                if (hasCookie) {
                    updateCookie("coordinateValue", coordinates);
                    updateCookie("addressText", address);
                }else{ 
                    setCookie("coordinateValue", coordinates, {expires: new Date(Date.now() + 600000)});
                    setCookie("addressText", address, {expires: new Date(Date.now() + 600000)});
                }
                
                router.push("/getOffer");
            })
            .catch((error) => {
                console.log("Error: ", error, parameter);
            });

        clearSuggestions();
    }

    useEffect(() => {
        if (value) {
            return;
        }

        setAddress(value);
    }, [value]);

    return (
        <>
            <section className="relative sm:w-[calc(100%+4rem)] w-full group border-4 h-fit rounded-2xl flex p-2 focus-within:border-white/80 transition-all duration-300 border-white/25 bg-white/10 my-10 items-center backdrop-blur-md z-20" id="getoffer">
                <span className="text-primary-heavy px-3">
                    <FaMapPin className="group-focus-within:animate-pulse" />
                </span>
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Enter address..."
                        className="w-full py-3 text-md bg-transparent border-none outline-none"
                        value={value}
                        disabled={!ready}
                        onKeyUp={handleKeyDown}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {loading && <ul className="absolute top-[130%] max-h-[20rem] min-h-[1.5rem] rounded-md p-3 font-semibold bg-primary-lightest text-black w-full overflow-y-auto">
                        <span className="text-center font-semibold text-black">loading...</span>
                    </ul>}
                    {status === "ZERO_RESULTS" && <ul className="absolute top-[130%] max-h-[20rem] min-h-[1.5rem] rounded-md p-3 font-semibold bg-primary-lightest text-black w-full overflow-y-auto">
                        <span className="text-center font-semibold text-red-600">No suggestions!</span>
                    </ul>}
                    {hasSuggestions && (
                        <ul className="absolute top-[130%] max-h-[20rem] min-h-[1.5rem] rounded-md px-3 font-semibold bg-primary-lightest text-black w-full overflow-y-auto">
                            {loading && <span className="text-center font-semibold text-black">loading...</span>}
                            {data.map((suggestion, idx) => (
                                <li
                                    key={suggestion.place_id}
                                    className={`${idx === currIndex ? 'highlight' : ''} text-black font-semibold cursor-pointer hover:bg-black/10 hover:scale-105 p-2 active:scale-95 active:opacity-50 select-none`}
                                    onClick={handleSelect(suggestion)}
                                >
                                    {suggestion.description}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {<div className={`${address ? loading || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-90" : "opacity-50 cursor-not-allowed"} bg-primary-heavy p-3 lg:px-4 rounded-lg font-semibold`} onClick={()=> handleSubmit()}>
                    {!isLoading && <span className="lg:block hidden">Get my offer</span>}
                    {isLoading && <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >        
                        <path 
                            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" 
                            opacity=".25" 
                        />
                        <path 
                            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" 
                            class="spinner_z9k8" 
                        />
                    </svg>}
                    {!isLoading && <span className="block lg:hidden">
                        <FaSearch />
                    </span>}
                </div>}
            </section>
        </>
    );
}