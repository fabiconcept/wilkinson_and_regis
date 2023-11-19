"use client"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Step03 from "../subPages/steps/Step03";
import Step04 from "../subPages/steps/Step04";
import React, { useContext, useEffect, useState } from "react";
import Finish from "../subPages/steps/Finish";
import { screenContext } from "../PageScreens";

export const FormModalContext = React.createContext();

export default function FormModal() {
    const { setModalOpen } = useContext(screenContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [canProceed, setCanProceed] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
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

    const handleNext = () => {
        if (currentPage === 1) {
            if (canSubmit) {
                setCurrentPage(2);
            }
            return;
        }

        if (!canProceed) {
            return
        }
        setCurrentPage(currentPage + 1);
    }

    const handleBack = () => {
        if (currentPage === 0) {
            return;
        }
        setCurrentPage(currentPage - 1);
    }

    return (
        <FormModalContext.Provider value={{ currentPage, generalInformationError, setGeneralInformationError, generalInformation, setGeneralInformation }}>
            <section className="fixed top-0 left-0 h-screen w-screen grid place-items-center py-14">
                <div onClick={()=>setModalOpen(false)} className="absolute top-0 left-0 backdrop-blur-[5px] h-full w-full bg-black/50"></div>
                <main className="relative z-[10] min-h-[30rem] lg:w-[30rem] shadow-2xl w-[calc(100%-1rem)] bg-white p-8 text-black flex flex-col gap-2 border">
                    {currentPage !== 2 &&<span className="text-center text-2xl font-semibold">Lets Get To Know Your Home!</span>}
                    {currentPage === 2 &&<span className="text-center text-2xl font-semibold mb-6">
                            Information Sent
                    </span>}
                    {currentPage !== 2 &&<span className="text-center">step {3} of 5 - (General Information)</span>}
                    {currentPage !== 2 &&<div className="bg-black/10 overflow-hidden rounded">
                        <div className="h-[1.5rem] rounded overflow-hidden" style={{ width: `${(100 / 4) * (3 + (currentPage < 1 ? currentPage : 1))}%` }}>
                            <div className="stripe"></div>
                        </div>
                    </div>}

                    <section className="flex-1 mt-3 font-semibold flex overflow-hidden items-center relative">
                        <Step03 />
                        <Step04 />
                        <Finish />
                    </section>

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
                                <span>Submit</span>
                            }
                        </div>
                    </section>}
                    {currentPage === 2 && <section className="flex flex-wrap gap-4 items-stretch mt-8">
                        <div onClick={() => handleBack()} className={`p-3 sm:px-4 flex-1 justify-center border border-black text-black font-semibold select-none flex items-center gap-2 hover:scale-105 bg-primary-heavy active:scale-95 cursor-pointer dark:hover:text-black hover:text-white`}>
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