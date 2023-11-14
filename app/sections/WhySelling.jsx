import { FaCheck, FaTimes } from "react-icons/fa";

export default function WhySelling() {
    return (
        <section className="py-12 sm:px-24 px-12 flex flex-col items-center gap-12 mb-8" id="whySelling">
            <span className="sm:text-4xl lg:text-3xl text-xl text-center font-semibold">Why Selling to <abbr title="Wilkinson & Regis" className="text-primary-light cursor-pointer no-underline text-center">W&R</abbr> is better</span>
            <div className="flex items-start lg:gap-6 gap-3 relative after:absolute after:h-full after:w-[3px] after:border-dotted after:border-l-[3px] after:opacity-30 after:left-1/2 after:top-10 after:-translate-x-[0.1rem]">
                <div className="flex items-center flex-col list-none gap-4">
                    <div className="flex flex-col items-end gap-8">
                        <li className="pr-6 font-semibold">
                            <span>Selling to <span className="text-primary-soft">Wilkinson & Regis</span></span>
                        </li>
                        <li className="w-full">
                            <span className="flex items-center justify-between gap-2">Competitive cash offer in 24 hours <FaCheck className="text-sm text-green-500" /></span>
                        </li>
                        <li className="w-full">
                            <span className="flex items-center justify-between gap-2">No listing, prep work or showing <FaCheck className="text-sm text-green-500" /></span>
                        </li>
                        <li className="w-full">
                            <span className="flex items-center justify-between gap-2">Skip the repair work <FaCheck className="text-sm text-green-500" /></span>
                        </li>
                        <li className="w-full">
                            <span className="flex items-center justify-between gap-2">Choose any close date from 10-60 days <FaCheck className="text-sm text-green-500" /></span>
                        </li>
                    </div>
                </div>
                <div className="h-[32px] w-[32px] flex-shrink-0 rounded-full bg-gray-400 text-black grid place-items-center font-semibold">vs</div>
                <div className="flex items-center flex-col list-none gap-4">
                    <div className="flex flex-col items-start gap-8">
                        <li className="pl-6 font-semibold">
                            <span>Selling to <span className="text-primary-soft">Wilkinson & Regis</span></span>
                        </li>
                        <li className="w-full">
                            <span className="flex justify-between items-center gap-3"><FaTimes className="text-gray-300" /> Competitive cash offer in 24 hours</span>
                        </li>
                        <li className="w-full">
                            <span className="flex justify-between items-center gap-3"><FaTimes className="text-gray-300" /> No listing, prep work or showing</span>
                        </li>
                        <li className="w-full">
                            <span className="flex justify-between items-center gap-3"><FaTimes className="text-gray-300" /> Skip the repair work</span>
                        </li>
                        <li className="w-full">
                            <span className="flex justify-between items-center gap-3"><FaTimes className="text-gray-300" /> Choose any close date from 10-60 days</span>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}