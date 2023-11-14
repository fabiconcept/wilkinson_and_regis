"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export default function ReadyForYourOffer({type}) {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Adjust threshold as needed
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);
    
    return (
        <section ref={sectionRef} className={`bg-[url(https://sanydelw.sirv.com/Images/spacejoy-kz_xZG9ufbk-unsplash.jpg)] grid place-items-center h-[25rem] bg-cover bg-no-repeat duration-0 transition-none ${isVisible ? "para" : ""}`} style={{
            backgroundPosition: `center ${isVisible ? (scrollPosition * 0.015) : "40"}%`
        }}>
            <div className='pointer-events-none leave absolute top-0 left-0 h-full w-full bg-black/20 z-[1]'></div>
            <div className='z-10 shadow-2xl sm:w-[35rem] w-[18rem] h-fit flex flex-col items-center py-12 gap-8 bg-primary-heavy text-white'>
                {<span className='lg:text-3xl text-xl z-30'>Ready For Your Offer?</span>}
                <Link href={"#top"} className='lg:px-4 p-3 border border-white cursor-pointer hover:bg-white active:scale-90 z-30 group'>
                    <span className='z-20 group-hover:text-primary-heavy'>Get my offer</span>
                </Link>
            </div>
        </section>
    )
}