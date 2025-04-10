import React, { useEffect, useRef } from "react";

const Portfolio = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    const imagesRow1 = [
        "/assets/portofolio_1.png",
        "/assets/portofolio_2.png",
        "/assets/portofolio_3.png",
        "/assets/portofolio_4.png",
        "/assets/portofolio_5.png",
    ];

    const imagesRow2 = [
        "/assets/portofolio_4.png",
        "/assets/portofolio_5.png",
        "/assets/portofolio_1.png",
        "/assets/portofolio_6.png",
        "/assets/portofolio_2.png",
    ];

    useEffect(() => {
        const row1 = row1Ref.current;
        const row2 = row2Ref.current;

        if (row2) {
            row2.scrollLeft = 0;
        }

        const animate = () => {
            if (row1) {
                row1.scrollLeft += 1;
                if (row1.scrollLeft >= row1.scrollWidth / 2) {
                    row1.scrollLeft = 0;
                }
            }

            if (row2) {
                row2.scrollLeft -= 1;
                if (row2.scrollLeft <= 0) {
                    row2.scrollLeft = row2.scrollWidth / 2;
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section className="flex flex-col mb-20 md:mb-40">
            <div
                ref={row1Ref}
                className="w-full overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <div className="flex p-6 md:px-10 pt-6 md:pt-10 pb-0 w-max">
                    {imagesRow1.map((src, idx) => (
                        <div key={idx} className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10">
                            <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                <img src={src} alt={`Project 1-${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                    {imagesRow1.map((src, idx) => (
                        <div key={`dup-${idx}`} className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10">
                            <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                <img src={src} alt={`Project 1-${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                ref={row2Ref}
                className="w-full overflow-x-auto scrollbar-hide mt-6 md:mt-10"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <div className="flex px-6 md:px-10  pb-0 w-max">
                    {imagesRow2.map((src, idx) => (
                        <div key={idx} className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10">
                            <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                <img src={src} alt={`Project 2-${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                    {imagesRow2.map((src, idx) => (
                        <div key={`dup-${idx}`} className="bg-gray-200 p-6 md:px-12 md:py-14 rounded-xl mr-6 md:mr-10">
                            <div className="min-w-[260px] md:min-w-[348px] h-[160px] md:h-[194px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                                <img src={src} alt={`Project 2-${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
