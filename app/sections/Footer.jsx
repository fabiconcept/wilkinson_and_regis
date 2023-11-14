import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-6 flex flex-wrap gap-4 items-center justify-between mt-12 py-4 border-t dark:border-white/20 border-black/10">
            <div className="my-6 min-w-[10rem] flex-1">
                <div className="flex items-center gap-2">
                    <Image
                        src={"https://sanydelw.sirv.com/Images/Original%20Logo%20cut.png"}
                        srcSet={"https://sanydelw.sirv.com/Images/Original%20Logo%20cut.png"}
                        priority
                        alt="Background"
                        className="min-h-full w-14 object-cover"
                        width={400}
                        height={400}
                    />
                    <div className="uppercase sm:text-lg leading-4 max-w-[6rem] font-semibold">Wilkinson <span className="text-primary-light">&</span> Regis</div>
                </div>
                <div className="mt-3 ml-3 max-w-[15rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor exercitationem voluptatem velit alias eos ipsum enim minus animi error.
                </div>
            </div>

            <div className="flex flex-col text-sm min-w-[10rem] flex-1">
                <span className="text-lg mb-3 font-semibold">Quick Links</span>
                <Link href={"#steps"} className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90">Services</Link>
                <Link href={"#about"} className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90">About Us</Link>
                <Link href={"#whySelling"} className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90">Why W<span className="text-primary-soft">&</span>R</Link>
                <Link href={"#guaranteedFAQ"} className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90">FAQ</Link>
                <Link href={"#contact"} className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90">Feedback</Link>
            </div>

            <div className="grid gap-4 p-4 min-w-[10rem] max-[700px]:flex-1 text-center max-w-[24rem]">
                <span className="">Terms & Conditions Privacy</span>
                <div className="flex justify-between items-center text-xl">
                    <FaTwitter className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90" />
                    <FaFacebookF className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90" />
                    <FaLinkedinIn className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90" />
                    <FaInstagram className="cursor-pointer hover:scale-110 hover:text-primary-soft active:scale-90" />
                </div>
            </div>
        </footer>
    )
}