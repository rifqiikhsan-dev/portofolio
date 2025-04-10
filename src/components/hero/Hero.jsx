import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full min-h-[50vh] md:min-h-screen bg-[#C7D0D9] relative overflow-hidden">
            {/* <div className="flex items-center justify-between px-6 md:px-20 py-6 text-[#0B0C0E] text-base md:text-lg">
                <p>@Rifqiikhsan</p>

                <nav className="hidden lg:flex gap-6">
                    <a href="#" className="font-semibold hover:text-[#616161]">
                        About
                    </a>
                    <a href="#" className="font-semibold hover:text-[#616161]">
                        Work
                    </a>
                    <Link to="/contact" className="font-semibold hover:text-[#616161]">
                        Contact
                    </Link>
                </nav>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="focus:outline-none bg-[#0B0C0E] p-2 rounded-full"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {isNavOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isNavOpen && (
                <div className="fixed top-0 right-0 w-[80vw] sm:w-[50vw] h-[50vh] bg-black text-white z-50 flex flex-col justify-between p-6 transition-all duration-300 lg:hidden shadow-2xl">
                    <button
                        onClick={() => setIsNavOpen(false)}
                        className="absolute top-4 right-4 text-black text-2xl bg-white p-2 rounded-full"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col gap-4 mt-12 text-2xl font-semibold">
                        <a href="#" onClick={() => setIsNavOpen(false)}>
                            Home
                        </a>
                        <a href="#" onClick={() => setIsNavOpen(false)}>
                            About
                        </a>
                        <a href="#" onClick={() => setIsNavOpen(false)}>
                            Work
                        </a>
                        <Link to="/contact" onClick={() => setIsNavOpen(false)}>
                            Contact
                        </Link>
                    </div>

                    <div className="flex gap-4 text-xs mt-auto">
                        <a href="#" className="hover:underline">
                            Linkedin
                        </a>
                        <a href="#" className="hover:underline">
                            Twitter
                        </a>
                        <a href="#" className="hover:underline">
                            Instagram
                        </a>
                        <a href="#" className="hover:underline">
                            Webflow
                        </a>
                    </div>
                </div>
            )} */}

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                <div
                    className={`bg-black text-white py-4 md:py-6 rounded-l-full flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer ${
                        isHovered ? "px-6 md:px-10" : "px-6"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src="/assets/hai_image.png" alt="Wave Icon" className="w-6 h-6 md:w-8 md:h-8" />
                    {isHovered && (
                        <span className="text-base md:text-[30px] whitespace-nowrap transition-opacity duration-300 opacity-100">
                            Hi I'm Rifqi
                        </span>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full text-center">
                <img
                    src="/assets/hero_image.png"
                    alt="profile"
                    className="rounded-lg w-64 md:w-[500px] object-cover mx-auto"
                />
            </div>

            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full z-10 text-center px-4">
                <marquee scrollamount="20" behavior="scroll" direction="left" className="w-full">
                    <div className="text-4xl md:text-6xl lg:text-[150px] text-white font-semibold whitespace-nowrap">
                        Webflow Developer - UI/UX Designer - Frontend Developer - Web Designer
                    </div>
                </marquee>
            </div>
        </section>
    );
};

export default Hero;
