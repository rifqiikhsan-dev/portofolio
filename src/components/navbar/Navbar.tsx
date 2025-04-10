import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section className="w-full absolute top-0 left-0 z-50">
            <div className="flex items-center justify-between px-6 md:px-20 py-6 text-[#0B0C0E] text-base md:text-lg">
                <p>@Rifqiikhsan</p>

                <nav className="hidden lg:flex gap-6">
                    <a href="/" className="font-semibold hover:text-[#616161]">
                        Home
                    </a>
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
                        <a href="/" onClick={() => setIsNavOpen(false)}>
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
            )}
        </section>
    );
};

export default Navbar;
