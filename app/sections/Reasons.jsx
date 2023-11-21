"use client"
import React, { useEffect, useState } from "react";
import Reason from "./components/Reason";

export const reasonsContext = React.createContext();

const reasonContent = [
    {
        id: "01",
        img: "https://sanydelw.sirv.com/Images/markus-spiske-ms6N-gBtbCQ-unsplash.jpg",
        text: "Want to sell fast"
    },
    {
        id: "02",
        img: "https://sanydelw.sirv.com/Images/benjamin-lehman-EJU7A__krX0-unsplash.jpg",
        text: "Avoid costly repairs with contractors"
    },
    {
        id: "03",
        img: "https://sanydelw.sirv.com/Images/laura-fuhrman-73OJLcahQHg-unsplash.jpg",
        text: "Inherited property"
    },
    {
        id: "04",
        img: "https://sanydelw.sirv.com/Images/wesley-tingey-TdNLjGXVH3s-unsplash.jpg",
        text: "Avoid foreclosure"
    },
]

export default function ReasonsSection() {
    const [currentReason, setCurrentReason] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const changeComponent = () => {
        setCurrentReason((prevReason) => (prevReason + 1) % reasonContent.length);
    };

    useEffect(() => {
        const id = setInterval(changeComponent, 5000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    const handleClick = (id) => {
        setCurrentReason(id);
        clearInterval(intervalId); // Clear the current interval
        const newIntervalId = setInterval(changeComponent, 5000); // Set a new interval
        setIntervalId(newIntervalId);
    };

    return (
        <reasonsContext.Provider value={{ currentReason, handleClick }}>
            <section className="flex flex-col items-center my-24" id="reasons">
                <span className="sm:text-4xl text-3xl text-center">Reasons to sell with <abbr title="Wilkinson & Regis" className="text-primary-light cursor-pointer no-underline text-center">W&R</abbr></span>

                <section className="flex gap-2 h-[24rem] sm:px-24 px-6 my-8">
                    {reasonContent.map((reason, index) => (
                        <Reason key={reason.id} id={index} img={reason.img} text={reason.text} />
                    ))}
                </section>
            </section>
        </reasonsContext.Provider>
    );
}