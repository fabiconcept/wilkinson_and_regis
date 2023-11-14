"use client"
import React, { useState } from "react";
import Faq from "./sub components/Faq";

export const Faqcontext = React.createContext();

const faqsContents = [
    {
        id: "01", 
        content: "Single-family homes built after 1950 between $50,000 – 1.5M. Additionally, they must be homes that are owner-occupied or vacant, non-distressed, not bank-owned, and not in or near flood zones. Finally, the homes must be in our service areas and not have any unpermitted additions or significant foundation issues.", 
        q: "What types of properties are you looking for?"
    },
    {
        id: "02", 
        content: "Once you submit your home for a Guaranteed Offer, our team will verify if your home meets the program parameters. If your home meets the requirements, a Guaranteed Offer will be extended contingent upon a walk through to collect an interior assessment conducted by a Mark Spain Real Estate licensed realtor. Finally, you have the opportunity to close in as little as 21 days upon accepting the offer.", 
        q: "How does the process work?"
    },
    {
        id: "03", 
        content: "A Guaranteed Offer from Mark Spain Real Estate is the most competitive all-cash offer in the industry. Mark Spain Real Estate is dedicated to helping our clients sell fast and reach their real estate goals. A Guaranteed Offer makes selling your home easy!", 
        q: "Are you wholesale friendly?"
    },
    {
        id: "04", 
        content: "Our team can oftentimes present an offer to our clients in as little as 48 hours after your in-home consultation!", 
        q: "What areas do you buy properties in?"
    },
    {
        id: "05", 
        content: "Mark Spain Real Estate’s Guaranteed Offer program keeps our clients in control. Depending on your home, you may qualify for multiple offers to allow you to decide which offer best helps you reach your real estate goals.", 
        q: "Can I receive multiple Guaranteed Offers?"
    },
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