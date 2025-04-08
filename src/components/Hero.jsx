import React, { useState, useEffect } from "react";

const Hero = () => {
    const [professionIndex, setProfessionIndex] = useState(0);
    const professions = ["Webflow Developer", "UI/UX Designer", "Frontend Developer", "Web Designer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [professions.length]);

    return (
        <section className="w-full h-screen bg-[#C7D0D9] relative overflow-hidden">
            {/* Navbar */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 text-[#0B0C0E] text-base md:text-lg">
                <p>@Rifqiikhsan</p>
                <nav className="flex gap-6 mt-4 md:mt-0">
                    <a href="#">About</a>
                    <a href="#">Work</a>
                    <a href="#">Contact</a>
                </nav>
            </div>

            {/* Wave Button */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button className="bg-black text-white px-6 py-4 md:px-8 md:py-6 rounded-l-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    <img src="/src/assets/hai_image.png" alt="Wave Icon" className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>

            {/* Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full text-center">
                <img
                    src="/src/assets/hero_image.png"
                    alt="profile"
                    className="rounded-lg w-64 md:w-[500px] object-cover mx-auto"
                />
            </div>

            {/* Animated Profession Text */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full z-10 text-center px-4">
                <div className="text-4xl md:text-6xl lg:text-[150px] text-white font-semibold transition-all duration-700 ease-in-out">
                    {professions[professionIndex]}
                </div>
            </div>
        </section>
    );
};

export default Hero;
