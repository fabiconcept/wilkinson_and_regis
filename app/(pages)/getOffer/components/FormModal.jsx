"use client"
import emailjs from "emailjs-com";
import Step03 from "../subPages/steps/Step03";
import Step04 from "../subPages/steps/Step04";
import React, { useContext, useEffect, useRef, useState } from "react";
import Finish from "../subPages/steps/Finish";
import { screenContext } from "../PageScreens";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useCookies from "@/customHooks/useCookie";

export const FormModalContext = React.createContext();

export default function FormModal() {
    const { removeCookie } = useCookies();
    const { setModalOpen } = useContext(screenContext);
    const submitRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [canProceed, setCanProceed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const router = useRouter();
    const [generalInformation, setGeneralInformation] = useState({
        email: null,
        firstName: null,
        lastName: null,
        phone: null,
        wholeSale: null,
        timeline: null

    });
    const [generalInformationError, setGeneralInformationError] = useState([
        {
            email: null,
            firstName: null,
            lastName: null,
        },
        {
            phone: null,
            wholeSale: null,
            timeline: null
        }
    ]);

    useEffect(() => {
        let condition = true;
        Object.values(generalInformationError[0]).forEach((item) => {
            if (item === null || item) {
                condition = false;
            }
        });

        setCanProceed(condition);
    }, [generalInformationError[0]]);

    useEffect(() => {
        let condition = true;
        Object.values(generalInformationError[1]).forEach((item) => {
            if (item === null || item) {
                condition = false;
            }
        });

        setCanSubmit(condition);
    }, [generalInformationError[1]]);

    const handleSubmit = (e) => { 
        if (isLoading) {
            return;
        }
        e.preventDefault();
        const promise = submitLogic(e);
        toast.promise(promise, {
            error: "An error occurred",
            success: "We've received your message.",
            loading: "Sending message..."
        }, {
            style: {
                border: '1px solid #ee9003',
                padding: '16px',
                color: '#141414',
              },
              iconTheme: {
                primary: '#ee9003',
                secondary: '#141414',
            }
        });
    }

    const submitLogic = async (e) => {
        setIsLoading(true);
        setCanSubmit(false);
        const userID = process.env.NEXT_PUBLIC_VERCEL_USER_ID_2;
        const serviceID = process.env.NEXT_PUBLIC_VERCEL_SERVICE_ID_2;
        const serviceConatctID = process.env.NEXT_PUBLIC_VERCEL_GET_OFFER;
        try {
            await emailjs.sendForm(serviceID, serviceConatctID, e.target, userID)
            .then(()=>{
                e.target.reset();
                setCurrentPage(2);
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleNext = () => {
        if (isLoading) {
            return;
        }

        if (currentPage === 1) {
            if (canSubmit) {
                submitRef.current.click();
            }
            return;
        }

        if (!canProceed) {
            return
        }
        setCurrentPage(currentPage + 1);
    }

    const handleBack = () => {
        if (isLoading) {
            return;
        }
        if (currentPage === 0) {
            return;
        }
        setCurrentPage(currentPage - 1);
    }

    const handleClose = () => {
        removeCookie("coordinateValue");
        removeCookie("addressText");
        router.push("/");
        setModalOpen(false);
    }

    return (
        <FormModalContext.Provider value={{ currentPage, generalInformationError, setGeneralInformationError, generalInformation, setGeneralInformation }}>
            <section className="fixed top-0 left-0 h-screen w-screen grid place-items-center py-14">
                <div onClick={()=>setModalOpen(false)} className="absolute top-0 left-0 backdrop-blur-[5px] h-full w-full bg-black/50"></div>
                <main className="relative z-[10] min-h-[30rem] lg:w-[30rem] shadow-2xl w-[calc(100%-1rem)] bg-white p-8 text-black flex flex-col gap-2 border">
                    {currentPage !== 2 &&<span className="text-center text-2xl font-semibold">Lets Get To Know Your Home!</span>}
                    {currentPage === 2 &&<span className="text-center text-2xl font-semibold mb-6">
                            Entry Received - Thank you
                    </span>}
                    {isLoading &&<div className="bg-black/10 overflow-hidden rounded">
                        <div className="h-[1.5rem] rounded overflow-hidden w-full">
                            <div className="stripe"></div>
                        </div>
                    </div>}

                    <form method="POST" action={''} onSubmit={handleSubmit} className="flex-1 mt-3 font-semibold flex overflow-hidden items-center relative">
                        <Step03 />
                        <Step04 />
                        <Finish />
                        {canSubmit && <button type="submit" ref={submitRef} hidden></button>}
                    </form>

                    {currentPage !== 2 &&<section className="flex flex-wrap gap-4 items-stretch mt-8">
                        <div onClick={() => handleBack()} className={`p-3 sm:px-4 flex-1 justify-center border border-black text-black font-semibold select-none flex items-center gap-2 ${currentPage === 1 ? "hover:scale-105 hover:bg-primary-heavy active:scale-95 cursor-pointer dark:hover:text-black hover:text-white" : "opacity-70"}`}>
                            <span>
                                back
                            </span>
                        </div>
                        <div onClick={() => handleNext()} className={`p-3 sm:px-4 flex-1 justify-center border border-black text-black font-semibold select-none flex items-center gap-2 ${canProceed ? "hover:scale-105 bg-primary-heavy active:scale-95 cursor-pointer dark:hover:text-black hover:text-white" : "opacity-70"}`}>
                            {currentPage === 0 ? <span>
                                next
                            </span>: 
                                <span>
                                    {!isLoading && "Submit"}
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
                                            className="spinner_z9k8"
                                        />
                                    </svg>}
                                </span>
                            }
                        </div>
                    </section>}
                    {currentPage === 2 && <section className="flex flex-wrap gap-4 items-stretch mt-8">
                        <div onClick={()=>handleClose()} className={`p-3 sm:px-4 flex-1 justify-center border border-black text-black font-semibold select-none flex items-center gap-2 hover:scale-105 bg-primary-heavy active:scale-95 cursor-pointer dark:hover:text-black hover:text-white`}>
                            <span>
                                close
                            </span>
                        </div>
                    </section>}
                </main>
            </section>
        </FormModalContext.Provider>
    );
}