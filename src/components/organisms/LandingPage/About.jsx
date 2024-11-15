import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <h1 className="text-4xl sm:text-5xl font-bold text-green-700 text-center pt-14">Why EcoShelf Exists ?</h1>
            <div className="hero pb-14 border-b">
                <div className="hero-content flex-col lg:flex-row gap-16 md:gap-28 ">
                    <div className="max-w-[40rem]">
                        <p className="text-lg text-green-600 py-3">
                            EcoShelf is a community-driven platform dedicated to sustainable living through literature. We bring together books and resources that inspire readers to learn about and
                            engage with issues like sustainability, climate change, renewable energy, and nature conservation.
                        </p>
                        <p className="text-lg text-green-600 py-3">
                            At EcoShelf, we believe that meaningful change starts with the right information. Our mission is to empower everyone—whether they’re newcomers or long-time environmental
                            advocates—to make informed choices and take steps towards a greener lifestyle. By offering curated book recommendations and easy-to-use features, we help users explore
                            credible resources on the topics that matter most for our planet.
                        </p>
                        <p className="text-lg text-green-600 py-3">
                            Join us on EcoShelf and become part of a community that cares deeply for the Earth. Together, through reading and sharing knowledge, we can make small steps towards a more
                            sustainable future.
                        </p>
                    </div>
                    <img src="/images/webp/ecoshelf-about.webp" className="max-w-80 sm:max-w-sm md:max-w-md lg:max-w-lg" />
                </div>
            </div>
        </section>
    );
});

export default About;
