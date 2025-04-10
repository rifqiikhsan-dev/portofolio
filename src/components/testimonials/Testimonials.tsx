import React from "react";

const testimonials = [
    {
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        name: "Rifqi Ikhsan Rizkillah",
        position: "CEO, Bebeul IT Solution",
        avatar: "/assets/profile.png",
    },
    {
        message:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        name: "Jane Smith",
        position: "CTO, Another Company",
        avatar: "/assets/profile.png",
    },
];

const Testimonials = () => {
    return (
        <section className="w-full bg-white pb-16 px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <h2 className="text-3xl md:text-4xl font-semibold whitespace-nowrap">Testimonials</h2>
                <div className="flex flex-col gap-[30px] md:gap-[64px] md:w-2/3">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="flex flex-col gap-[16px] md:gap-[28px]">
                            <p className="text-base md:text-lg text-[#3C3D3E] font-neue">"{t.message}"</p>
                            <div className="flex items-start gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                                />
                                <div>
                                    <p className="text-base font-semibold">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
