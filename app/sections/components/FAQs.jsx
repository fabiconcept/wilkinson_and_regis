"use client"
import React, { useState } from "react";
import Faq from "./sub components/Faq";

export const Faqcontext = React.createContext();

const faqsContents = [
    {
        id: "01", 
        content: "We are looking for residential properties that may need some repairs. We purchase everything from 200k single family homes to 5M apartment complexes, preferably garden style.", 
        q: " What type of properties are you looking for?"
    },
    {
        id: "02", 
        content: "Once you enter your address and give us some basic information so we can deliver you our customer offer, one of our friendly agents will reach out to discuss your needs in 24-48 hours. With the information provided we will extend a customer offer contingent upon one of our licensed contractors briefly walking the property. Finally, you’ll have the opportunity to close in as little as 15-21 days.", 
        q: "How does the process work?"
    },
    {
        id: "03", 
        content: "Yes! If you are a wholesaler looking to assign your contract, our agent will reach out to you to discuss the project. If the numbers make sense for both parties, we’ll assume your contract so you can go out and find more deals.", 
        q: "Are you wholesale friendly?"
    },
    {
        id: "04", 
        content: "We purchase properties in Georgia, primarily: Metro Atlanta, Lawrenceville, Duluth, Norcross, and Acworth.Don’t see your area listed? Still feel free to submit your request for a cash offer. We can still help you get more cash for your property", 
        q: "What areas do you buy properties in?"
    }
]

export default function FAQs() {
    const [isColapsed, setIsColapsed] = useState(0);
    return (
        <Faqcontext.Provider value={{ isColapsed, setIsColapsed }}>
            <section className="flex-1 flex flex-col">
                <span className="text-primary-heavy text-2xl mb-6">Guaranteed Offer Frequently Asked Questions</span>
                <div className="flex flex-col gap-4 items-center mt-8 w-full sm:mx-3">
                    {faqsContents.map((items, index)=> (
                        <Faq key={items.id} id={index} q={items.q} content={items.content} />
                    ))}
                </div>
            </section>
        </Faqcontext.Provider>
    )
}