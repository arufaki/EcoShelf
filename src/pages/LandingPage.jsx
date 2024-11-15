import Main from "../layouts/Main";
import About from "../components/organisms/LandingPage/About";
import Hero from "../components/organisms/LandingPage/Hero";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import ListBooks from "../components/organisms/LandingPage/ListBooks";
import { useRef } from "react";

const LandingPage = () => {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <Header handleAbout={scrollToAbout} />
            <Main className="max-w-[1440px] mx-auto">
                <Hero />
                <About ref={aboutRef} />
                <ListBooks />
            </Main>
            <Footer />
        </>
    );
};

export default LandingPage;
