import { Toaster } from "react-hot-toast";
import AboutUs from "./sections/AboutUs";
import ContactSection from "./sections/ContactSection";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import GuaranteedFAQ from "./sections/GuaranteedFAQ";
import HeroSection from "./sections/HeroSection";
import MidSection from "./sections/MidSection";
import NavSection from "./sections/NavSection";
import ReadyForYourOffer from "./sections/ReadyForYourOffer";
import ReasonsSection from "./sections/Reasons";
import StepsSection from "./sections/StepsSection";
import WholesaleSection from "./sections/WholesaleSection";
import WhySelling from "./sections/WhySelling";

export default function page() {
    return (
        <main className="w-screen overflow-x-hidden relative">
            <NavSection />
            <HeroSection />
            <MidSection />
            <StepsSection />
            <Experience />
            <WhySelling />
            <ReadyForYourOffer />
            <GuaranteedFAQ />
            <AboutUs />
            <WholesaleSection />
            <ReasonsSection />
            <ContactSection />
            <Footer />
            <Toaster
                position="bottom-left"
            />
        </main>
    );
}