"use client"
import Image from "next/image";
import { useContext } from "react";
import { FormModalContext } from "../../components/FormModal";

export default function Finish() {
    const { 
        currentPage,
    } = useContext(FormModalContext);

    return (
        <section className={`absolute top-0 left-0 grid place-items-center w-full page ${currentPage === 2 ? "in" : "out"}`}>
            <Image
                src={"https://sanydelw.sirv.com/Images/688cd18d-eb72-4475-821a-4be5a19d5d39.gif"}
                height={1000}
                width={1000}
                alt="successful gif"
                className="w-[18rem]"
            />
        </section>
    )
}