import { Link } from "react-router-dom";
import ChatModal from "../../molecules/Modal/ChatModal";

const Hero = () => {
    return (
        <div className="hero py-14 border-b lg:min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-28">
                <img src="/images/webp/ecoshelf-anime-gimp.webp" className="max-w-80 sm:max-w-sm md:max-w-md lg:max-w-lg" />
                <div className="max-w-[40rem]">
                    <h1 className="text-4xl sm:text-5xl font-bold text-green-700">Eco-Friendly Book Club (EcoShelf)</h1>
                    <p className="text-lg text-green-600 py-6">
                        Join the EcoShelf community, where we explore books and resources focused on sustainable living, environmental awareness, and eco-friendly practices. Let’s learn together and
                        make positive changes for a greener planet.
                    </p>
                    <div className="flex flex-row gap-4">
                        <Link to="/login" className="btn btn-success text-white">
                            Get Started
                        </Link>
                        <ChatModal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
