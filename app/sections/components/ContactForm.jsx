import { FaArrowUp, FaEnvelope, FaUser, FaUserAlt } from "react-icons/fa";

export default function ContactForm() {
    return (
        <section className="sm:w-[25rem] w-[21rem] bg-black/70 backdrop-blur-[3px] min-h-fit sm:rounded-3xl sm:px-10 px-5 py-12 flex flex-col gap-8 text-white">
            <div className="group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit">
                <span>
                    <FaEnvelope className="text-sm" />
                </span>
                <input
                    type="email"
                    placeholder=" "
                    className="bg-transparent outline-none border-none peer flex-1"
                />
                <span className="whitespace-nowrap text-xs absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Enter your email</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit">
                    <span>
                        <FaUserAlt className="text-sm" />
                    </span>
                    <input
                        type="text"
                        placeholder=" "
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-xs absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">First name</span>
                </div>
                <div className="group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit">
                    <span>
                        <FaUser className="text-sm" />
                    </span>
                    <input
                        type="email"
                        placeholder=" "
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-xs absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Last name</span>
                </div>
            </div>
            <div className="group relative flex items-start border-b border-white/25 focus-within:border-white gap-2 h-fit mt-14">
                <textarea
                    placeholder=" "
                    className="bg-transparent outline-none border-none peer flex-1"
                    cols="30"
                    rows="1"
                ></textarea>
                <span className="whitespace-nowrap text-xs absolute top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Message</span>
            </div>
            <div className="p-3 px-6 bg-primary-heavy text-sm rounded-lg cursor-pointer active:scale-90 w-fit flex gap-2 items-center">
                Submit <FaArrowUp className="rotate-45" />
            </div>
        </section>
    )
}