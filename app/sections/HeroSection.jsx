import Image from "next/image";
import Search from "./components/Search";

export default function HeroSection() {
    return (
        <div className="w-full md:px-24 sm:px-12 px-3 sm:pt-56 pt-40 grid sm:grid-cols-2 sm:gap-0 gap-6 grid-cols-1 relative" id="topSection">
            <div className="absolute top-0 left-0 h-full object-cover w-full grid place-items-center overflow-hidden">
                <Image
                    src={"https://sanydelw.sirv.com/Images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"}
                    srcSet={"https://sanydelw.sirv.com/Images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"}
                    priority
                    alt="Background"
                    className="min-h-full w-full object-cover dark:opacity-10 opacity-70"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="absolute top-8 left-8 sm:h-[24rem] sm:w-[24rem] h-[10rem] w-[10rem] rounded-full bg-white blur-[100px] opacity-100 mix-blend-soft-light"></div>
            <div className="dark:hidden h-full w-full absolute top-0 left-0 bg-black/50 pointer-events-none z-[1]">

            </div>
            {/* text section */}
            <section className="flex-1 relative z-30">
                <div className="sm:mx-0 mx-8 sm:text-[4rem] text-white lg:leading-[4rem] leading-[3rem] text-[3rem] sm:max-w-[28rem] max-w-[20rem] font-semibold mb-8">
                    <span className="relative after:w-12 after:z-[-1] after:right-[-2rem] after:top-1 after:h-12 after:rounded-full after:bg-[linear-gradient(30deg,#f4e1c5,#ee9003_95%)] after:absolute after:animate-bounce">We buy houses </span>
                    <span>and apartment complexes.</span>
                </div>
                <div className="sm:mx-0 mx-8 text-xl opacity-60 sm:max-w-[27rem] max-w-[20rem] my-4 text-white">
                    Secure the strongest offer on your home or apartment complex.
                </div>
                <Search />
                <section className="grid grid-cols-3 pb-8 text-white">                
                    <div className="flex flex-col items-center">
                        <span className="sm:text-4xl text-2xl">9k<span className="text-primary-heavy">+</span></span>
                        <div className="max-w-[5rem] sm:text-base text-sm text-center opacity-60">Offers sent</div>
                    </div>    
                    <div className="flex flex-col items-center">
                        <span className="sm:text-4xl text-2xl">2k<span className="text-primary-heavy">+</span></span>
                        <div className="max-w-[5rem] sm:text-base text-sm text-center opacity-60">Happy Customers</div>
                    </div>    
                    <div className="flex flex-col items-center">
                        <span className="sm:text-4xl text-2xl">28<span className="text-primary-heavy">+</span></span>
                        <div className="max-w-[5rem] sm:text-base text-sm text-center opacity-60">Years of experience</div>
                    </div>    
                </section>
            </section>
            {/* Image Section */}
            <section className="flex-1 min-w-[15rem] z-10">
                <div className="relative w-full rounded-t-full border-[10px] dark:border-white/80">
                    <Image
                        src={"https://sanydelw.sirv.com/Images/pierre-chatel-innocenti--u4ddXsjULQ-unsplash.jpg"}
                        srcSet={"https://sanydelw.sirv.com/Images/pierre-chatel-innocenti--u4ddXsjULQ-unsplash.jpg"}
                        priority
                        className="w-full sm:h-[43rem] h-[35rem] rounded-t-full mb-[-5rem] rounded-bl-xl"
                        width={1000}
                        alt="backgraoud faded"
                        height={1000}
                    />
                </div>
            </section>
        </div>
    )
}