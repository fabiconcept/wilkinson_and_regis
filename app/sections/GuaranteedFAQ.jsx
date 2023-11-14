import Image from "next/image";
import FAQs from "./components/FAQs";

export default function GuaranteedFAQ() {
    return (
        <section className="sm:px-24 px-6 my-24 flex flex-wrap items-end gap-8" id="guaranteedFAQ">
            <section className="w-[25rem] min-w-[18rem]">
                <div className="relative w-full rounded-t-full border-[10px] dark:border-white/80 overflow-hidden">
                    <Image
                        src={"https://sanydelw.sirv.com/Images/bernard-hermant-M0k4llbRpHU-unsplash.jpg"}
                        srcSet={"https://sanydelw.sirv.com/Images/bernard-hermant-M0k4llbRpHU-unsplash.jpg"}
                        priority
                        alt="side home"
                        className="w-full sm:h-[40rem] h-[30rem] rounded-t-full rounded-bl-xl scale-110"
                        width={1000}
                        height={1000}
                    />
                </div>
            </section>
            <FAQs />
        </section>
    )
}