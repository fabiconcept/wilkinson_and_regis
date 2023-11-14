import { CiHome, CiMoneyCheck1 } from "react-icons/ci";

export default function StepsSection() {
    return (
        <section className="flex flex-wrap gap-6 justify-center py-12" id="steps">
            <div className="text-center flex flex-col gap-4 p-8 items-center max-w-[18rem] min-w-[18rem] rounded-lg hover:scale-105 dark:hover:bg-white/5 hover:bg-black/10 bg-black/5 cursor-default">
                <CiHome className="text-primary-soft text-3xl" />
                <span className="text-xl font-semibold">Get your offer</span>
                <span className="dark:opacity-50">
                    Receive a competitive cash offer on your home
                </span>
            </div>
            <div className="text-center flex flex-col gap-4 p-8 items-center max-w-[18rem] min-w-[18rem] rounded-lg hover:scale-105 dark:hover:bg-white/5 hover:bg-black/10 bg-black/5 cursor-default">
                <CiMoneyCheck1 className="text-primary-soft text-3xl" />
                <span className="text-xl font-semibold">Avoid fees</span>
                <span className="dark:opacity-50">
                    Sidestep the showing, open houses and stress
                </span>
            </div>
            <div className="text-center flex flex-col gap-4 p-8 items-center max-w-[18rem] min-w-[18rem] rounded-lg hover:scale-105 dark:hover:bg-white/5 hover:bg-black/10 bg-black/5 cursor-default">
                <CiHome className="text-primary-soft text-3xl" />
                <span className="text-xl font-semibold">Close Quick</span>
                <span className="dark:opacity-50">
                    Close quickly and move on to the next chapter of your life
                </span>
            </div>
        </section>
    )
}