import React from "react";

const About = () => {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
                <p className="font-neue text-lg md:text-xl text-[#3C3D3E] md:w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </section>
    );
};

export default About;
