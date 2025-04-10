import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0B0C0E] text-white px-6 md:px-[80px] text-center">
            <div className="flex flex-col md:flex-row justify-between items-center py-[60px] gap-8 text-left">
                <div className="flex flex-col gap-[6px] md:gap-[12px]">
                    <p className="text-[36px] md:text-[40px] lg:text-[60px] font-medium leading-tight">
                        Have something in mind?
                    </p>
                    <div className="flex items-center">
                        <img
                            src="/assets/profile.png"
                            alt="profile"
                            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
                        />
                        <p className="text-[36px] md:text-[40px] lg:text-[60px] font-medium ml-4">
                            let’s build it together.
                        </p>
                    </div>
                </div>
                <button className="cursor-pointer hover:scale-103 bg-white text-[16px] md:text-[18px] font-semibold text-black px-8 md:px-[48px] py-4 md:py-[24px] rounded-full whitespace-nowrap">
                    Get in touch
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-[40px] gap-6 text-[16px] text-[#C7D0D9]">
                <p className="text-center md:text-left">Build with 💖 by Rifqi Ikhsan Rizkillah</p>
                <div className="flex gap-6 flex-wrap justify-center">
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
                        WebFlow
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
