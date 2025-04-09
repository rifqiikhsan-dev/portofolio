import React from "react";

const Footerontact = () => {
    return (
        <footer className="bg-[#0B0C0E] text-white px-6 md:px-[80px] text-center">
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

export default Footerontact;
