import Main from "../layouts/Main";
import About from "../components/organisms/LandingPage/About";
import Hero from "../components/organisms/LandingPage/Hero";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import ListBooks from "../components/organisms/LandingPage/ListBooks";

const LandingPage = () => {
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <Hero />
                <About />
                <ListBooks />
            </Main>
            <Footer />
        </>
    );
};

export default LandingPage;
