import React from "react";

const Contact = () => {
    return (
        <section className="w-full bg-white pb-16 px-6 md:px-20 mt-[200px]">
            <div className="flex flex-col lg:flex-row justify-center gap-12">
                <div className="flex flex-col gap-6 md:gap-14 w-full lg:w-1/2">
                    <img
                        src="/assets/profile.png"
                        alt="profile"
                        className="w-[200px] h-[200px] md:w-[320px] md:h-[320px]  rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-2 md:gap-3">
                        <p className="text-[18px] text-[#3C3D3E]">Contact Details</p>
                        <div className="flex flex-col gap-1 md:gap-2 text-[27px] text-[#0B0C0E]">
                            <p>ayush.barnwal@brightscout.com</p>
                            <p>+91 1234567890</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-3">
                        <p className="text-[18px] text-[#3C3D3E]">Social</p>
                        <div className="flex flex-col gap-1 md:gap-2 text-[27px] text-[#0B0C0E]">
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                            <a href="#">WebFlow</a>
                            <a href="#">Figma</a>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-9">
                    <p className="text-[36px] md:text-[60px] font-medium text-[#0B0C0E] leading-tight">
                        Let’s build something cool together
                    </p>

                    <form className="flex flex-col gap-6 text-[#0B0C0E]">
                        <div>
                            <label className="text-[18px] mb-1 block">Name</label>
                            <input
                                type="text"
                                placeholder="James Robert"
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 text-[27px] placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-[18px] mb-1 block">Email</label>
                            <input
                                type="email"
                                placeholder="ayush.barnwal@brightscout.com"
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 text-[27px] placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-[18px] mb-1 block">Subject</label>
                            <input
                                type="text"
                                placeholder="For web design work Enquire"
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 text-[27px] placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-[18px] mb-1 block">Message</label>
                            <textarea
                                rows={3}
                                placeholder="Type your Message"
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2 text-[27px] placeholder-gray-500 resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-black text-white rounded-full px-6 py-3 text-[18px] hover:bg-gray-800 transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
