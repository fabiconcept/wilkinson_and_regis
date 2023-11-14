import ContactForm from "./components/ContactForm";

export default function ContactSection() {
    return (
        <section className="lg:px-24 px-12 my-8 flex flex-col relative items-center after:absolute after:h-[25rem] after:aspect-square after:rounded-full after:bg-primary-soft after:top-2/3 after:blur-[120px] lg:after:left-auto after:left-[-5rem] after:-z-[1] after:-translate-y-1/2 after:sm:opacity-70 after:opacity-40 after:animate-pulse" id="contact">
            <span className="script-text text-xl text-primary-heavy text-center">Feel free to</span>
            <span className="text-4xl my-4">Leave Your FeedBack</span>
            <section className="relative bg-[url(https://sanydelw.sirv.com/Images/r-architecture-wDDfbanbhl8-unsplash.jpg)] min-h-[20rem] w-full bg-no-repeat bg-[center_80%] bg-cover sm:rounded-3xl mt-6 flex sm:justify-end justify-center items-center sm:p-8 p-4"> 
                <ContactForm />
            </section>
        </section>
    )
}