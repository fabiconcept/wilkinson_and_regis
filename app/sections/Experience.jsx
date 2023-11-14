import Image from "next/image";
import { CiBookmarkMinus } from "react-icons/ci";

export default function Experience() {
    return (
        <section className="relative lg:flex sm:px-24 px-6 py-8 lg:justify-normal justify-center max-[800px]:flex-wrap items-center after:absolute after:h-[25rem] after:aspect-square after:rounded-full after:bg-primary-lightest after:top-2/3 sm:after:block after:hidden after:blur-[120px] after:-z-[1] after:-translate-y-1/2 after:sm:opacity-10 after:opacity-40 after:animate-pulse before:absolute before:h-[25rem] before:aspect-square before:rounded-full before:bg-primary-soft before:top-[10rem] sm:before:block before:hidden before:right-0 before:blur-[120px] before:-z-[1] before:-translate-y-1/2 before:sm:opacity-20 before:opacity-40" id="about">
            <div className="min-w-[18rem] md:w-[37rem] w-full aspect-square rounded-xl overflow-hidden relative bg-white">
                <Image
                    src={"https://sanydelw.sirv.com/Images/ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg"}
                    srcSet={"https://sanydelw.sirv.com/Images/ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg"}
                    priority
                    alt="Home"
                    className="min-h-full w-full object-cover"
                    width={1000}
                    height={1000}
                />
                <div className="h-64 w-[12rem] absolute bottom-[1rem] left-[1rem] rounded-2xl overflow-hidden border-[5px] border-white/20">
                    <Image
                        src={"https://sanydelw.sirv.com/Images/frames-for-your-heart-JDBVXignFdA-unsplash.jpg"}
                        srcSet={"https://sanydelw.sirv.com/Images/frames-for-your-heart-JDBVXignFdA-unsplash.jpg"}
                        alt="Home"
                        className="min-h-full w-full object-cover"
                        priority
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className="min-w-[20rem] md:w-[35rem] w-full lg:h-auto lg:aspect-square lg:mt-0 mt-[-2rem] rounded-lg overflow-hidden relative bg-[rgba(32,32,32)] lg:ml-[-4rem]">
                <div className="absolute top-0 left-0 lg:w-16 w-8 lg:h-24 h-16 pt-8 grid place-items-center bg-primary-heavy rounded-b-full">
                    <CiBookmarkMinus className="lg:text-4xl text-2xl mt-[-3rem]" />
                </div>

                <div className="lg:pl-24 lg:pr-24 pl-14 pr-10 py-8 grid gap-4 relative z-10 text-white">
                    <span className="text-primary-heavy script-text text-2xl">We Offer</span>
                    <span className="lg:text-5xl text-3xl">
                        Experience New & Be Strong in Real Estate
                    </span>
                    <span className="lg:text-xs text-sm grid gap-4">
                        <p>At Wilkinson & Regis, we understand that selling your home is more than a transaction; it&apos;s a significant moment in your life. Choose us as your trusted partner, and experience a seamless journey guided by expertise and a commitment to your goals.</p>

                        <p>Our dedicated team, led by seasoned professionals, is here to amplify the selling process. From strategic marketing to leveraging our extensive network, we ensure your property receives the attention it deserves. Sell with confidence, sell with Wilkinson & Regis – where your home meets its perfect match.</p>
                    </span>

                </div>
                <Image
                    src={"https://sanydelw.sirv.com/Images/ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg"}
                    srcSet={"https://sanydelw.sirv.com/Images/ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg"}
                    alt="Home"
                    className="h-[20rem] w-[20rem] object-cover absolute bottom-[-12rem] left-[-2rem] opacity-60 rounded-2xl"
                    width={500}
                    height={500}
                    priority
                />
            </div>
        </section>
    )
}