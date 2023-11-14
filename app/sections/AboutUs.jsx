import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-full py-12 sm:px-24 px-12 flex flex-col items-center gap-12 mb-8">
            <span className="sm:text-4xl lg:text-3xl text-xl text-center font-semibold">Get to know us <abbr title="Wilkinson & Regis" className="text-primary-light cursor-pointer no-underline text-center">W&R</abbr></span>
            <section className="flex items-center flex-wrap gap-24 w-full justify-center">
                <div className="flex flex-col items-center text-center flex-1 min-w-[15rem] gap-8">
                    <div className="grid gap-6 sm:text-base text-sm">
                        <span className="sm:text-2xl text-xl text-primary-light uppercase">Chris Wilkinson</span>
                        <span>
                            I&apos;m <span className="text-primary-light">Chris Wilkinson</span> born and raised in Stone Mountain, GA. For the last 7 years his enthusiasm and
                            dedication has led him to becoming an expert in real estate lending, acquisitions, and deal
                            structuring. His strong passion for people along with his skill set allows him to produce exceptional
                            results for his clients. In his free time he enjoys cooking, fitness training, and supporting the Falcons,
                            Hawks, and Braves.

                        </span>
                    </div>
                    <div className="min-h-[20rem] aspect-square grid place-items-center overflow-hidden rounded-xl border-[5px] dark:border-white/50 border-black/50 w-full">
                        <Image
                            src={"https://sanydelw.sirv.com/Images/HeadShot%20Chris.png"}
                            srcSet={"https://sanydelw.sirv.com/Images/HeadShot%20Chris.png"}
                            priori gap-8ty
                            alt="Background"
                            className="h-full min-w-full object-cover"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
                <div className="flex sm:flex-col flex-col-reverse items-center text-center flex-1 min-w-[15rem] gap-8">
                    <div className="min-h-[20rem] aspect-square grid place-items-center overflow-hidden rounded-xl border-[5px] dark:border-white/50 border-black/50 w-full">

                        <Image
                            src={"https://sanydelw.sirv.com/Images/Headshot%20Calvin.png"}
                            srcSet={"https://sanydelw.sirv.com/Images/Headshot%20Calvin.png"}
                            priority
                            alt="Background"
                            className="h-full min-w-full object-cover"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="grid gap-6">
                        <span className="sm:text-2xl text-xl text-primary-light uppercase">Vin Wilkinson</span>
                        <span>
                            I&apos;m <span className="text-primary-light">Vin Wilkinson</span>, an entrepreneur rooted in Atlanta with over eight years experience in real estate
                            acquisitions and investments. Vin has seamlessly shifted his expertise into the world of connecting
                            people and creating valuable investment opportunities.His experience allows him to see beyond the
                            numbers and produce extraordinary results. Beyond the business front, Vin enjoys exploring
                            Atlanta&apos;s diverse culinary scene, attending local performances, and passionately supporting the
                            Falcons, Braves, and Hawks. His philosophy isn&apos;t just about transactions; he&apos;s about fostering
                            genuine connections and bringing an authentic approach to both professional dealings and personal
                            interests.
                        </span>
                    </div>
                </div>
            </section>
        </section>
    )
}