import { FaMapPin, FaSearch } from "react-icons/fa"

export default function Search() {
    return (
        <section className="relative sm:w-[calc(100%+4rem)] w-full group border-4 h-fit rounded-2xl flex p-2 focus-within:border-white/80 transition-all duration-300 border-white/25 bg-white/10 my-10 items-center backdrop-blur-md" id="getoffer">
            <span className="text-primary-heavy px-3">
                <FaMapPin className="group-focus-within:animate-pulse" />
            </span>
            <input 
                type="text" 
                placeholder="Enter address..."
                className="flex-1 py-3 text-md bg-transparent border-none outline-none"
            />
            <div className="p-3 lg:px-4 bg-primary-heavy rounded-lg cursor-pointer active:scale-90 font-semibold">
                <span className="lg:block hidden">Get my offer</span>
                <span className="block lg:hidden">
                    <FaSearch />
                </span>
            </div>
        </section>
    );
}