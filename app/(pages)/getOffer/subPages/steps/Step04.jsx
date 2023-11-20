"use client"

import { useContext, useEffect, useState } from "react";
import { FormModalContext } from "../../components/FormModal";
import useDebounce from "@/customHooks/useDebounce";
import useSanitize from "@/customHooks/useSanitize";

export default function Step04() {
    const { 
        currentPage, 
        generalInformation, 
        setGeneralInformation, 
        generalInformationError, 
        setGeneralInformationError 
    } = useContext(FormModalContext);

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [timeline, setTimeline] = useState("15-30");
    const [wholeSaleValue, setWholeSaleValue] = useState("yes");
    const [cleanNumber, setCleanNumber] = useSanitize();

    const phoneNumberDebounce = useDebounce(phoneNumber, 500);

    useEffect(() => {
        const updatePhone = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                ...prevGeneralInformation.slice(0, 1),
                {
                    ...prevGeneralInformation[1],
                    phone: status,
                },
            ]);
        };
        if (String(phoneNumber).length < 1) {
            updatePhone(null);
            return;
        }

        if (String(phoneNumber).length === 10) {
            updatePhone(false);
            setCleanNumber(phoneNumber);
            return;
        }
        updatePhone(true);
    }, [phoneNumberDebounce]);

    useEffect(() => {
        if (cleanNumber) {
            setGeneralInformation({
                ...generalInformation, 
                phone: cleanNumber
            });
        }
    }, [cleanNumber]);

    useEffect(() => {
        const updateWholeSale = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                ...prevGeneralInformation.slice(0, 1),
                {
                    ...prevGeneralInformation[1],
                    wholeSale: status,
                },
            ]);
        };
        updateWholeSale(false);
        setGeneralInformation({
            ...generalInformation, 
            wholeSale: wholeSaleValue
        })
    }, [wholeSaleValue]);

    useEffect(() => {
        const updateTimeLine = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                ...prevGeneralInformation.slice(0, 1),
                {
                    ...prevGeneralInformation[1],
                    timeline: status,
                },
            ]);
        };
        updateTimeLine(false);
        setGeneralInformation({
            ...generalInformation, 
            timeline: timeline
        })
    }, [timeline]);

    return (
        <section className={`page no-shrink min-w-full flex flex-col gap-4 absolute left-0 top-0 ${currentPage === 1 ? "in" : "out"}`}>
            <div className="flex flex-col gap-2">
                <span>Phone number <span  className="text-red-500">*</span></span>
                <input 
                    type="number"
                    className={`px-3 py-2 bg-transparent w-full outline-none ${generalInformationError[1].phone !== null ? generalInformationError[1].phone ? "border-2 border-red-500" : "border border-green-500" : "border border-black"}`}
                    placeholder="(###) ### ####"
                    maxLength={10}
                    required
                    name="from_phone"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span>Timeline to sell <span  className="text-red-500">*</span></span>
                <select
                    name="from_timeline"
                    required
                    onChange={(e)=>setTimeline(e.target.value)}
                    className="px-3 py-2 bg-transparent w-full border border-black"
                >
                    <option value="15-30">15-30 days</option>
                    <option value="30-60">30-60 days</option>
                    <option value="60+">60+ days</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <span>Are you a wholesaler? <span  className="text-red-500">*</span></span>
                <select 
                    name="from_whole"
                    required
                    className="px-3 py-2 bg-transparent w-full border border-black"
                    onChange={(e)=>setWholeSaleValue(e.target.value)}
                >
                    <option value="yes">Yes, i am</option>
                    <option value="no">No, I&apos;m not</option>
                </select>
            </div>
        </section>
    )
}
